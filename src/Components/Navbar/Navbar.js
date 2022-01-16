import React from 'react'
import './Navbar.css'
import { useCookies } from "react-cookie";
import {
    Navbar,
    Container,
    Nav,
    Button
} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavbarComp = () => {

    const [cookies, setCookie] = useCookies(['user']);

    const handleLogout = () => {
        setCookie('user', {});
        toast.success('Logout successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
        setTimeout(() => { window.location.href = "/login"; }, 3000);
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
            />
            <Navbar collapseOnSelect expand="lg" sticky="top" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">MeetLo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/explore">Explore</Nav.Link>
                            <Nav.Link href="/">Profile</Nav.Link>
                            <Nav.Link href="/">Create Event</Nav.Link>
                            <Nav.Link href="/team">Devs</Nav.Link>
                            <Nav.Link href="/test">Test</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className="navbar_loginbuttons">
                                {cookies.user && cookies.user.token ?
                                    <Nav.Link><Button onClick={handleLogout}>Logout</Button></Nav.Link> :
                                    <>
                                        <Nav.Link href="/login"><Button>Login</Button></Nav.Link>
                                        <Nav.Link href="/signup">
                                            Signup
                                        </Nav.Link>
                                    </>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp;
