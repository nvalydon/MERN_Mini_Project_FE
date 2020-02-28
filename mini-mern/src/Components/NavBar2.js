import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar2() {


    return (
        <Navbar bg="dark" variant ="dark" expand="lg">
            <Navbar.Brand href="/">MERN Sign Up
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/">Sign Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}