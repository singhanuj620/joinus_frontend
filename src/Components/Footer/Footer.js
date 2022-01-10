import React from 'react'
import './Footer.css'
import { Button } from 'react-bootstrap'
const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_topSection">
                <div className="footer_top_title">Create Group</div>
                <div className="footer_top_button"><Button variant="outline-info">Get Started</Button></div>
            </div>
            <hr className="footer_hr"></hr>
            <div className="footer_bottomSection">
                <div className="footer_user">
                    <div className="footer_user_title">Your Account</div>
                    <div className="footer_user_actions">
                        <div><a className="link" href="/">Login</a></div>
                        <div> <a className="link" href="/">Signup</a></div>
                    </div>
                </div>
                <div className="footer_discover">
                    <div className="footer_discover_title">Discover</div>
                    <div className="footer_discover_actions">
                        <div><a className="link" href="/">Groups</a></div>
                        <div> <a className="link" href="/">Topics</a></div>
                        <div> <a className="link" href="/">Online Events</a></div>
                    </div>
                </div>
                <div className="footer_contact">
                    <div className="footer_contact_title">Contact</div>
                    <div className="footer_contact_actions">
                        <div><a className="link" href="/team">Team</a></div>
                    </div>
                </div>
            </div>
            <div className="footer_note">This project belongs to Infosys Ltd. internal purpose hackathon event.</div>
        </div>
    )
}

export default Footer
