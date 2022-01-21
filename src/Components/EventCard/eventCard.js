import React from 'react'
import './eventCard.css'
import { Button } from 'react-bootstrap'
import { IoIosPeople } from 'react-icons/io'
import { IconContext } from "react-icons";
import { BiRupee } from "react-icons/bi";
import cover from './nocover.svg'

const eventCard = ({ id, eventName, mode, date, time, hostedBy, totalAttendes, price }) => {
    return (
        <div className="eventcard_container">
            <div><img className="eventcard_img" src={cover} alt={eventName} /></div>
            <div className="eventcard_venue">
                <div>{time} IST</div>
                <div>{date}</div>
            </div>
            <div className="eventcard_title_div">
                <div className="eventcard_pill_div"><div className="eventcard_pill">{mode}</div></div>
                <div className="eventcard_title">{eventName}</div>
            </div>
            <div className="eventcard_creator">Hosted by : {hostedBy.firstName} {hostedBy.lastName}</div>
            <div className="eventcard_extra">
                <div className="eventcard_attendes"><IconContext.Provider value={{ className: "eventcard_icon" }}>
                    <IoIosPeople />
                </IconContext.Provider>{totalAttendes}</div>
                <div className="eventcard_attendes"><IconContext.Provider value={{ className: "eventcard_icon" }}>
                    <BiRupee />
                </IconContext.Provider>{price}</div>
                <div><Button className="eventcard_btn" variant="info"><a className="link" href={`/event/${id}`}>Details</a></Button></div>
            </div>
        </div>
    )
}
export default eventCard
