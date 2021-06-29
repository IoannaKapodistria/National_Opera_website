import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import {shows} from "../../shows"; 




 class Reservation extends React.Component {
    constructor () {
        super()
        this.state={
            show_name:this.getName(),
            show_date: shows[this.getName()]["dates"]
        }
        this.handleChange = this.handleChange.bind(this)
    }
 handleChange(event){
     this.setState({show_date: shows[event.target.value]["dates"], show_name: event.target.value})
     //console.log(this.state.show_date, event.target.value)
 }

 
  getName() {
    var url = document.URL.split("?")[1]; 
    if(url ==undefined){ //otan erxetai apo tis krathseis einai undefined
      return "Don Giovanni"
    }else{
  
  var show_name = url.split("&")[0].replaceAll("%20", " "); 
 // this.setState({show_date: shows[show_name]["dates"]})

return (
  show_name
)
}}

getDate() {
  var url = document.URL.split("?")[1];  //otan erxetai apo tis krathseis einai url= ""
  if(url ==undefined){ //otan erxetai apo tis krathseis einai undefined
    return " "
  }
  
  var show_date = url.split("&")[1]; // otan erxetai apo tis krathseis einai show_date =""

return (
  show_date
)
}

render() {
    return(
<div className="reservation_page">
<h4 className="text-left pt-4 pl-2"><b>Αίτηση Κράτησης θέσης</b></h4>
 <div className="kratisi">
    
    <Form>
    <fieldset >
    <legend><h5><b>Προσωπικά στοιχεία</b></h5></legend>
    
    <Form.Row>
        <Form.Group as={Col} id="formGridName">
        <Form.Label>Ονοματεπώνυμο</Form.Label>
        <Form.Control type="text" placeholder="Όνομα" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSurname">
        <Form.Label>&nbsp;</Form.Label>
        <Form.Control type="text" placeholder="Επώνυμο" />
        </Form.Group>
    </Form.Row>

    </fieldset>
    <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Στοιχεία επικοινωνίας</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTel">
        <Form.Label>&nbsp;</Form.Label>
        <Form.Control type="password" placeholder="Tηλέφωνο" />
        </Form.Group>
    </Form.Row>

    <Form.Row>
        

        <Form.Group as={Col} controlId="formGridShow">
        <Form.Label>Παράσταση</Form.Label>
        <Form.Control as="select" name="parastasi" id="parastasi" defaultValue={this.getName()} onChange={this.handleChange} >
            <option value="Don Giovanni">ΝΤΟΝ ΤΖΙΟΒΑΝΝΙ</option>
            <option value="Madame Butterfly">ΜΑΝΤΑΜΑ ΜΠΑΤΤΕΡΦΛΑΙ</option>
            <option value="The Marriage of Figaro">ΟΙ ΓΑΜΟΙ ΤΟΥ ΦΙΓΚΑΡΟ</option>
        </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDate">
        <Form.Label>Ημερομηνία</Form.Label>
        <Form.Control as="select" id="date" defaultValue={this.getDate()}>
          
            {this.state.show_date.map(date=><option value={date}>{date}</option>)}
           
            
        </Form.Control>
        </Form.Group>
    </Form.Row>

    

    <Button variant="primary" type="button" className="epomeno" id="upovoli" href="Seat">
        Επόμενο
    </Button>
    <br/>
    <br/>
    </Form>
  </div>
</div>
    )
}
 }

export default Reservation