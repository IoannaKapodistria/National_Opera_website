import React from "react";
//import logo from "/public/logo.png"
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navbar1() {
  return (

<Navbar className="nav_bar p-0" expand="lg">
<Navbar.Brand className="title1 p-0" href="\">
  <img src="/logo.png" height="61px" /> <h4 className="d-inline" > &nbsp; Εθνική Λυρική Σκηνή</h4>
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">
    <NavDropdown
      className="nav_items"
      title="Παραστάσεις"
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item className='drop_item' href="Play?Don Giovanni">
        Ντον Τζοβάννι
      </NavDropdown.Item>
      <NavDropdown.Item className='drop_item' href="Play?Madame Butterfly">
        Μαντάμα Μπατερφλάι
      </NavDropdown.Item>
      <NavDropdown.Item className='drop_item' href="Play?The Marriage of Figaro">
        Οι Γάμοι του Φίγκαρο
      </NavDropdown.Item>

      <NavDropdown.Item className='drop_item' href="#action/3.4">
        Δον Κιχώτης
      </NavDropdown.Item>
      <NavDropdown.Item className='drop_item' href="#action/3.5">
        Αντρέα Σενιέ
      </NavDropdown.Item>
    </NavDropdown>

    <Nav.Link className="nav_items" href="program">
      Πρόγραμμα
    </Nav.Link>

    <Nav.Link className="nav_items" href="Reservation">
      Κρατήσεις
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

);
}

export default Navbar1;