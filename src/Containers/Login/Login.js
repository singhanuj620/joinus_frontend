import React, { useState, useEffect } from 'react'
import './Login.css'
import { useCookies } from "react-cookie";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginsvg from './login-bg.svg'
import authsvg from './auth-bg.svg'


const Login = () => {

    const [isUserPresent, setIsUserPresent] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (cookies.user && cookies.user.token) {
            setIsUserPresent(true);
        }
    }, [])

    const handleSubmit = async () => {
        console.log("Entered")
        if (email !== "" && password !== "") {
            // const {data} = await axios.post("http://localhost:5000/login", {
            //     email,
            //     password
            // });
            let data = {
                success: true,
                token: "abc123xyz"
            }
            if (data.success) {
                setCookie('user', { token: data.token });
                console.log("Login Successful", cookies.user);
                toast.success('Login successfull', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                // setTimeout(() => { window.location.href = "/explore"; }, 3000);
                // window.location.href = "/";
            } else {
                toast.error('Login Failed', {
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
        <div className="login_container" style={{
            backgroundImage: `url(${loginsvg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
        }}>
            {isUserPresent ? <Navigate to="/explore" /> : <></>}
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
            <div className="login_img_div">
                <img src={authsvg} alt="auth" className="login_img" />
            </div>
            <div className="login_form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" onChange={e => { e.preventDefault(); setEmail(e.target.value) }}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword" onChange={e => { e.preventDefault(); setPassword(e.target.value) }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={handleSubmit} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;