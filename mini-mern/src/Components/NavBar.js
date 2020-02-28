import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {


    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">MERN Sign Up
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}