//import { Program1 } from ".."

import ShowCard from "../ShowCard";
import {Container, Row, Col} from "react-bootstrap"
import { shows } from "../../shows";
import { Link } from "react-router-dom";

function Calendar(props) {
  return (

  <div>

    <div className="eventt">
      <div className="event1">{props.date}</div>
      <div className="event2">{props.name}</div>
      <div>
        <Link to={props.link}>
          <button type="button" className="button2">Κάντε Κράτηση</button>
        </Link>
      </div>
    </div>

  </div>
  );
}

/* Convert tis imeromhnies se logia*/

function convert_date(string_date) {
  var months = [
    "empty",
    "Ιανουαρίου",
    "Φεβρουαρίου",
    "Μαρτίου",
    "Απριλίου",
    "Μαϊου",
    "Ιουνίου",
    "Ιουλίου",
    "Αυγούστου",
    "Σεπτεμβρίου",
    "Οκτωβρίου",
    "Νοεμβρίου",
    "Δεκεμβρίου",
  ];

  let year = string_date.split("-")[0];
  let month = string_date.split("-")[1];
  let day = string_date.split("-")[2];
  let month_name = months[parseInt(month)];
  let new_string = day + "\n" + month_name + "\n" + year;
  return new_string;
}


function Program (){
  const items = [];
  const dates_arr = [];
  for (let i in shows) {
    for (let j in shows[i]["dates"]) {
      dates_arr.push([shows[i]["dates"][j], i]);
    }
  }
  dates_arr.sort();


  for (let i in dates_arr) {
    items.push(
      <Calendar
        key={i}
        date={convert_date(dates_arr[i][0])}
        name={dates_arr[i][1]}
        link={"/Reservation?" + dates_arr[i][1] + "&" + dates_arr[i][0]} // gia na pernei thn hmeromhnia kai parastash kai na ta pernaei stis krathseis
      />
    );
  }
  
    return (
<div>

  <div className="con">
    <img src="photo_calendar.jpg" className="img-fluid mt-0" alt="..."/>
    <div className="centered">ΠΡΟΓΡΑΜΜΑ</div>
  </div>

  <div className="container text-center mt-5">
    <h5 className="headline d-inline-block mb-5">UPCOMING</h5>
  </div>

  <Container fluid>
   <Row>
        <Col> <ShowCard src="ντον1.jpg" title="Ντον Τζοβάννι" link1="Play?Don Giovanni"  sinthesi="Βόλφγκανγκ Αμαντέους Μότσαρτ" libreto="Λορένζο ντα Πόντε" paragogi="Συμπαραγωγή με την Όπερα του Γκαίτεμποργκ (Σουηδία) και τη Βασιλική Όπερα της Δανίας" /></Col>
        <Col><ShowCard src="repertoire.jpg" title="Μαντάμα Μπατερφλάι" link1="Play?Madame Butterfly" sinthesi="Τζάκομο Πουτσίνι" libreto="Λουίτζι Ίλικα και Τζουζέπε Τζακόζα" paragogi="Εθνική Λυρική Σκηνή"  /> </Col>
        <Col><ShowCard src="ballet11.jpg" title="Δον Κιχώτης" sinthesi="Τιάγκο Μπορντίν / Λούντβιχ Μίνκους / Τζων Λόνγκσταφ" libreto="Λορένζο ντα Πόντε" paragogi="Εθνική Λυρική Σκηνή" /></Col>
   </Row> 

    <Row>
        <Col><ShowCard src="figaro!1.jpg" title="Οι Γάμοι του Φίγκαρο" link1="Play?The Marriage of Figaro" sinthesi="Βόλφγκανγκ Αμαντέους Μότσαρτ" libreto="Λορένζο ντα Πόντε" paragogi="Εθνική Λυρική Σκηνή" /></Col>
        <Col><ShowCard src="adrea_senie1.jpg" title="Αντρέα Σενιέ" sinthesi="Ουμπέρτο Τζορντάνο" libreto="Λορένζο ντα Πόντε" paragogi="Εθνική Λυρική Σκηνή"  /></Col>
        <Col></Col>
    </Row>
 </Container>

 <div className="main-frame">
          <h3 className="cal">Calendar</h3>

 {items}
 
 </div>
 <br/>
 <hr/>

</div>
  )
  }

  export default Program