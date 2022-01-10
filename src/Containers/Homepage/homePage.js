import React from "react";
import './homePage.css';
import homebg from './images/home-bg.svg'
import headerimg from './images/header.svg'
import handsup from './images/handsUp.svg'
import ticket from './images/ticket.svg'
import joingroup from './images/joinGroup.svg'
import { Button } from 'react-bootstrap';

const Homepage = () => {
    return (
        <>
            <div className="homepage_container" style={{
                backgroundImage: `url(${homebg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
            }}>
                <div className="homepage_header">
                    <div className="homepage_header_text">
                        <div className="homepage_header_title">Experience real connections on MillLo</div>
                        <div className="homepage_header_subtitle">Whatever you are looking to do this year, MillLo can help. People have turned to MillLo to meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening , join the fun.</div>
                    </div>
                    <div><img className="header_img" src={headerimg} alt="header image" /></div>
                </div>
            </div>
            <div className="homepage_works_container">
                <div className="homepage_works_title">How MillLo Works</div>
                <div className="homepage_works_subtitle">Meet new people who share your interests through online and in-person events. It is free to create an account.</div>
                <div className="homepage_work_card_conatiner">
                    <div className="homepage_work_card">
                        <div className="homepage_work_card_img_div"><img className="homepage_work_card_img" src={handsup} alt="join" /></div>
                        <div className="homepage_work_card_title">Join a group</div>
                        <div className="homepage_work_card_desc">Do what you love, meet others who love it, find your community. The rest is history!</div>
                    </div>
                    <div className="homepage_work_card">
                        <div className="homepage_work_card_img_div"><img className="homepage_work_card_img" src={ticket} alt="ticket" /></div>
                        <div className="homepage_work_card_title">Find an event</div>
                        <div className="homepage_work_card_desc">Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.</div>
                    </div>
                    <div className="homepage_work_card">
                        <div className="homepage_work_card_img_div"><img className="homepage_work_card_img" src={joingroup} alt="group" /></div>
                        <div className="homepage_work_card_title">Start a group</div>
                        <div className="homepage_work_card_desc">You do not have to be an expert to gather people together and explore shared interests.</div>
                    </div>
                </div>
                <Button variant="info"><a href="#" className="link"></a>Get Started</Button>
            </div>
        </>
    )
}

export default Homepage;