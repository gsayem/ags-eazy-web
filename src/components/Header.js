import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


export default class Header extends Component {
    render() {
        return (
            <div className="topnav header">
                <div className="menu">
                    <Navbar expand="lg" variant="light" bg="light" fixed="top">
                        <Container>
                            <Navbar.Brand className="logo" href="/home">
                                <span className="first-part">sayem</span>
                                <span className="second-part">.xyz</span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#">Categories</Nav.Link>
                                    <Nav.Link href="#">Notification</Nav.Link>
                                    <Nav.Link href="#">Login /SignUp</Nav.Link>
                                    <Nav.Link href="#">Help</Nav.Link>
                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        )
    }
}