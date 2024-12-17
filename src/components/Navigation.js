// src/components/Navigation.js
// import React from "react";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/images/logo.svg';
import '../assets/styles/Navigation.css'

function Navigation() {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 fixed-top">
          <Container fluid>
            <Navbar.Brand href="#home">
            <img src={logo} className="logo" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle className="toggle" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className='close' closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#gallery">Gallery</Nav.Link>
                  <Nav.Link href="#programs">Program</Nav.Link>
                  <Nav.Link href="#contact">Contact Us</Nav.Link>
                  <hr/>
                        <p> +1 555-555-5556</p> 
                        <p> info@yourcompany.example.com </p>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;