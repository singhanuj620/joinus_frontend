import React from 'react'
import './eventCard.css'
import { Button } from 'react-bootstrap'
import { IoIosPeople } from 'react-icons/io'
import { IconContext } from "react-icons";
import { BiRupee } from "react-icons/bi";

const eventCard = ({ id, title, type, date, time, creator, totalAttendes, price, cover }) => {
    return (
        <div className="eventcard_container">
            <div><img className="eventcard_img" src={cover} alt={title} /></div>
            <div className="eventcard_venue">
                <div>{time}</div>
                <div>{date}</div>
            </div>
            <div className="eventcard_title_div">
                <div className="eventcard_pill_div"><div className="eventcard_pill">{type}</div></div>
                <div className="eventcard_title">{title}</div>
            </div>
            <div className="eventcard_creator">Hosted by : {creator.name}</div>
            <div className="eventcard_extra">
                <div className="eventcard_attendes"><IconContext.Provider value={{ className: "eventcard_icon" }}>
                    <IoIosPeople />
                </IconContext.Provider>{totalAttendes}</div>
                <div className="eventcard_attendes"><IconContext.Provider value={{ className: "eventcard_icon" }}>
                    <BiRupee />
                </IconContext.Provider>{price}</div>
                <div><Button className="eventcard_btn" variant="info"><a className="link" href={`/${id}`}>Details</a></Button></div>
            </div>
        </div>
    )
}
export default eventCard
