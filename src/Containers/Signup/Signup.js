import React, { useState, useEffect } from 'react'
import './Signup.css'
import { useCookies } from "react-cookie";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signupsvg from './signup-bg.svg'
import authsvg from './auth-bg.svg'


const Signup = () => {

    const [isUserPresent, setIsUserPresent] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profession, setProfession] = useState("");
    const [currentCity, setCurrentCity] = useState("");
    const [country, setCountry] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [pinCode, setPinCode] = useState("");

    useEffect(() => {
        if (cookies.user && cookies.user.token) {
            setIsUserPresent(true);
        }
    }, [])

    const handleSubmit = async () => {
        console.log("Entered")
        if (email !== "" && password !== "" && firstName !== "" && lastName !== "" && profession !== "" && currentCity !== "" && country !== "" && pinCode !== "") {
            // const {data} = await axios.post("http://localhost:5000/signup", {
            //     email,
            //     password,
            //     firstName,
            //     lastName,
            //     profession,
            //     currentCity,
            //     country,
            //     profilePic,
            //     pinCode
            // });
            let data = {
                success: true,
                token: "abc123xyz"
            }
            if (data.success) {
                setCookie('user', { token: data.token });
                console.log("Signup Successful", cookies.user);
                toast.success('Signup successfull', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                setTimeout(() => { window.location.href = "/explore"; }, 3000);
                // window.location.href = "/";
            } else {
                toast.error('Signup Failed', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            }
        }
        else {
            toast.error('Fill every field', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
    }

    return (
        <div className="signup_container" style={{
            backgroundImage: `url(${signupsvg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
        }}>
            {isUserPresent ? <Navigate to="/" /> : <></>}
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
            <div className="signup_img_div">
                <img src={authsvg} alt="auth" className="signup_img" />
            </div>
            <div className="signup_form">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicFirstName" onChange={e => { e.preventDefault(); setFirstName(e.target.value) }}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required type="text" placeholder="Enter First Name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicLastName" onChange={e => { e.preventDefault(); setLastName(e.target.value) }}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail" onChange={e => { e.preventDefault(); setEmail(e.target.value) }}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword" onChange={e => { e.preventDefault(); setPassword(e.target.value) }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3" onChange={e => { e.preventDefault(); setProfilePic(e.target.files[0]) }}>
                        <Form.Label>Profile Pic</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCity" onChange={e => { e.preventDefault(); setCurrentCity(e.target.value) }}>
                                <Form.Label>City</Form.Label>
                                <Form.Control required type="text" placeholder="Enter City" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCountry" onChange={e => { e.preventDefault(); setCountry(e.target.value) }}>
                                <Form.Label>Country</Form.Label>
                                <Form.Control required type="text" placeholder="Enter Country" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicProfession" onChange={e => { e.preventDefault(); setProfession(e.target.value) }}>
                                <Form.Label>Profession</Form.Label>
                                <Form.Control required type="text" placeholder="Enter Profession" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPincode" onChange={e => { e.preventDefault(); setPinCode(e.target.value) }}>
                                <Form.Label>PinCode</Form.Label>
                                <Form.Control required type="text" placeholder="Enter pincode" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button onClick={handleSubmit} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Signup;