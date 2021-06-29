import React from "react";
import { Carousel } from "react-bootstrap";

//mport slide1 from "/repertoire.jpg";
//import slide2 from "./../public/ballet";
//import slide3 from "/figaro11.jpg";


function Carousel1() {
    return (

<Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src="repertoire.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3><b>Μαντάμα Μπαττερφλάι</b></h3>
            <p>Τζάκομο Πουτσίνι</p>
            <a class="btn btn-primary" href="/Reservation?Madame%20Butterfly" role="button">
              Κάντε Κράτηση
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="ballet.jpg" alt="Second slide" />

          <Carousel.Caption>
            <h3><b>Δον Κιχώτης</b></h3>
            <p>Τιάγκο Μπορντίν, Μαριύς Πετιπά / Λούντβιχ Μίνκους / Τζων Λόνγκσταφ</p>
            <a class="btn btn-primary" href="#" role="button">
              Κάντε Κράτηση
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="figaro11.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h3><b>Οι Γάμοι του Φίγκαρο</b>
            </h3>
            <p>
            Βόλφγκανγκ Αμαντέους Μότσαρτ
            </p>
            <a class="btn btn-primary" href="/Reservation?The Marriage of Figaro" role="button">
              Κάντε Κράτηση
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="ντον11.jpg" alt="Fourth slide" />

          <Carousel.Caption>
            <h3><b>Ντον Τζοβάννι</b>
            </h3>
            <p>
            Βόλφγκανγκ Αμαντέους Μότσαρτ
            </p>
            <a class="btn btn-primary" href="/Reservation?Don Giovanni" role="button">
              Κάντε Κράτηση
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="adrea_senie11.jpg" alt="Fifth slide" />

          <Carousel.Caption>
            <h3><b>Αντρέα Σενιέ</b>
            </h3>
            <p>
            Ουμπέρτο Τζορντάνο
            </p>
            <a class="btn btn-primary" href="#" role="button">
              Κάντε Κράτηση
            </a>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>

);
}

export default Carousel1;