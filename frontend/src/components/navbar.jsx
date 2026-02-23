import React from "react";
import "./navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";

export const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="navbarMain">
      <Container fluid>
        <Navbar.Brand href="#">
          <h3> MovieMosaic </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto mb-2 mb-lg-0">
            <Nav.Link className="navbarLink" as={NavLink} to='/' >
              Home
            </Nav.Link>
            <Nav.Link className="navbarLink" as={NavLink} to='/movies' >
              Movies
            </Nav.Link>
            <Nav.Link className="navbarLink" as={NavLink} to='/watchlist' >
              Watchlist
            </Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/register">
            <Button className="navbarBtn"> Register </Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <Button className="navbarBtn"> Login </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
