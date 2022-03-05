import React from "react";
import "./NavbarCompo.css"

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  
} from "react-bootstrap";

import {Link} from "react-router-dom"

const NavbarCompo = () => {
  return (
    <>
      <Navbar lo expand="lg">
        <Container fluid>
          <Navbar.Brand > <Link className="logo" to="/" >VIDGYAN</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navbar"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
             
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary"> Search </Button>
            </Form> */}
             <Nav.Link className="nav-link" href="/">Home</Nav.Link>
              <Nav.Link className="nav-link" href="/about">About us</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCompo;
