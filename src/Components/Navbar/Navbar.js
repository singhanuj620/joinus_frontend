import React from 'react'
import './Navbar.css'
import {
    Navbar,
    Container,
    Nav,
    Button
} from 'react-bootstrap';

const NavbarComp = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">MeetLo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Explore</Nav.Link>
                            <Nav.Link href="/">Profile</Nav.Link>
                            <Nav.Link href="/">Create Event</Nav.Link>
                            <Nav.Link href="/team">Devs</Nav.Link>
                            <Nav.Link href="/test">Test</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className="navbar_loginbuttons">
                                <Nav.Link href="/"><Button>Login</Button></Nav.Link>
                                <Nav.Link href="/">
                                    Signup
                                </Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp
