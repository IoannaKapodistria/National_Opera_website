
import React from "react";
import {shows} from "../../shows";

function Tile(props){
  var roles = shows[props.name]['roles'];
  var new_keys = Object.keys(roles[props.keyName]) //ta keys twn keys twn "roles"
  var items=[];
  for (let i of new_keys){
    items.push(<div className="mainactors">{i} : {roles[props.keyName][i]} </div>)  // oi hmeromhnies
  }
  return(items)
}




class PlayTemplate extends React.Component {
  constructor (props) {
    super(props)
  }
  //
  getShow (){
    var url = document.URL.split("?")[1]; 
    
    var link_to_show = "/Reservation?" + url.split("&")[0].replaceAll("%20", " ");
    return(
      link_to_show
    )
  }
  //
  render() {

  return (
    <div className="container-fluid text-left">
      <div className="row">
        <div className="col-6">
          <p className="title h4 fw-bold mt-5 mx-5">{this.props.title_show} </p>
          <p className="composer h5 mt-6 mx-5">{this.props.composer}</p>
          <p className="imerominies mt-4 mx-5 ">
            {this.props.imerominies}
          </p>
          <p className="h5 mt-4 mx-5"><b>Σύνοψη</b></p>
          <p className="synopsis h6 mt-2 mx-5 ">{this.props.sinopsi}</p>
          <p className="h5 mt-4 mx-5 mb-4 fw-bold">Πρωταγωνιστούν:</p>
          <p className="protagonists">{this.props.protagonists}</p>
        </div>
        <div className="col-6 px-0">
          <div ><img className="photo" src={this.props.src} /></div>
          <p className="h5 mt-5 mx-2 fw-bold"> Συντελεστές</p>
          <p className=" h6 mt-6 mx-0">{this.props.sintelestes}</p>
          <br />
          <br />
          <a className="btn btn-primary more" href="" role="button">
            Μάθετε περισσότερα
          </a>{" "}
          &nbsp;
          <a className=" reservbtn btn btn-primary play" href={this.getShow()} role="button">
            Κάντε Κράτηση
          </a>
          <hr className="hrclass" />
          <br />
          <p>
            <strong>
              <em>
                Η παραγωγή υλοποιείται με τη στήριξη της δωρεάς του Ιδρύματος
                Σταύρος Νιάρχος (ΙΣΝ) [
                <a href="">www.SNF.org</a>] για την ενίσχυση
                της καλλιτεχνικής εξωστρέφειας της Εθνικής Λυρικής Σκηνής
              </em>
            </strong>
          </p>
          <p>
            Για περισσότερες πληροφορίες σχετικά με την ιστορία της ΕΛΣ,
            μπορείτε να επισκεφθείτε την ιστοσελίδα του Εικονικού Εκπαιδευτικού
            Μουσείου
            <br />
            <br />
            <strong>
              <a href="http://virtualmuseum.nationalopera.gr/">
                http://virtualmuseum.nationalopera.gr/
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
}


function Play() {
  var show_name = window.location.href.split("?")[1].replaceAll("%20", " ");

  var keys = Object.keys(shows[show_name]["crew"]);
  var crew = [];
  
  for (let i in keys) {
    crew.push(
      <div className="role-name">{shows[show_name]["crew"][keys[i]]}&nbsp;<span className='role'>&nbsp;{keys[i]}</span></div>, // key[i] h idiothta
    )   
}

var dates_list = shows[show_name]["dates"];
var dates_array=[]
for ( let i in dates_list) { dates_array.push(  //hmeromhnies
   dates_list[i]+",  ")
}

var roles_array=[];
var keys = Object.keys(shows[show_name]["roles"]);
for (let k in keys){
    roles_array.push(<div className="show_roles"><b>{keys[k]}</b>:<Tile name={show_name} keyName={keys[k]}/></div>)
}

  return (
    <div>
      <PlayTemplate
        title_show={shows[show_name]["name"]}
        composer={shows[show_name]["composer"]}
        sinopsi={shows[show_name]["description"]}
        imerominies={dates_array}
        src={shows[show_name]["img_src"]}
        protagonists={roles_array}
        sintelestes={crew}
      />
    </div>
  );
}

export default Play;
