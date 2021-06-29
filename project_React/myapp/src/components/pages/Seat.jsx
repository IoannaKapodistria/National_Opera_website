import React from "react";
import { Form, Button} from "react-bootstrap";
import { shows } from "../../shows";



class Button1 extends React.Component {
  constructor(props) {
      super(props)
      this.state = { klasi: 'unselected_seat_button' }
      this.clickButton = this.clickButton.bind(this)

  }
  clickButton(event) {
    this.props.clickSeat(event.target.id)
      this.setState((prevState) => {
        
          //console.log(event.target.id)
          if (prevState.klasi == 'unselected_seat_button') {
              return { klasi: 'selected_seat_button' }
          } else {
              return { klasi: 'unselected_seat_button' }
          }
      })
  }
    render(){
    return (
<div className={this.state.klasi} id={this.props.id} onClick={this.clickButton} ></div>
    )
}
}


function seatsFunction (){
  var seats = []
  for (let i = 1; i < 751; i++) {
      seats.push(i)
  }
  return seats
}

class Seat extends React.Component {
  constructor(){
    super()
    this.state = { selectedSeats : [], seats : seatsFunction()}
    this.clickSeat=this.clickSeat.bind(this)
    
  }


  clickSeat(id){
    this.setState((prevState) => {
      if (!prevState.selectedSeats.includes(id)){
        //console.log(prevState.selectedSeats)
        var newSeatsArray= prevState.selectedSeats.slice()
       newSeatsArray.push(id, ", ")
        return {selectedSeats: newSeatsArray}
      } else{
        var newSeatsArray= prevState.selectedSeats.slice()
        newSeatsArray.splice(prevState.selectedSeats.indexOf(id), 2)
        return {selectedSeats: newSeatsArray}
      }

    })
    
  }
   render(){

   
  return (

  <div className="seat_page">

      <h5 className="text-left pt-4 pl-2"><b>Επιλέξτε θέση</b></h5>
      <h6 className="text-left pt-0 pl-2 pb-0"><i> &nbsp;{/*Οι θέσεις της Πλατείας απεικονίζονται με μωβ χρώμα, ενώ του Εξώστη με μπλε*/}</i></h6>
            
    <Form className="seat_form">
      <Form.Group controlId="formSeats">
        <Form.Label>Θέση/εις:</Form.Label>
        {/*<Form.Control type="text"  />*/}
        <div className="theseis">&nbsp; {this.state.selectedSeats}</div>
        <Form.Text className="text-muted">
        Μπορείτε να επιλέξετε πάνω από μια θέση.
        </Form.Text>
      </Form.Group>

      <div className="pt-3">
          {this.state.seats.map(value => <Button1 id={value}  clickSeat={this.clickSeat} ></Button1>)}
      </div>
      <Button type='button' variant="primary" type="submit" id="upovoli" >
        Υποβολή
      </Button>
    </Form>
</div>

      
  )
}
}


export default Seat