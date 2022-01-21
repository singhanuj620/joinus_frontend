import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Navigate } from 'react-router-dom'
import "./EventPage.css"
import cover from './nocover.svg'
import { Button } from 'react-bootstrap'
import { IoIosPeople } from 'react-icons/io'
import { IconContext } from "react-icons";
import { BiRupee } from "react-icons/bi";

const EventPage = () => {
    let { eventId } = useParams();
    const [eventData, setEventData] = useState({});
    let eventUrl = "http://localhost:5000/events/event/" + eventId;
    useEffect(() => {
        (async () => {
            try {
                let { data } = await axios.get(eventUrl)
                if (data.success === true) {
                    let modData = { ...data.data, cover: cover }
                    setEventData(modData);
                }
                else {
                    window.location.href = "/";
                }
            }
            catch (err) {
                window.location.href = "/";
            }
            // let data = {
            //     success: true,
            //     data: {
            //         id: "5e9f9b9b8d9c8a0f8c8d9c8",
            //         eventName: "Event 1",
            //         eventDescription: "Event 1 Description",
            //         time: "18:00",
            //         date: "18-03-2022",
            //         venue: "Event 1 Location",
            //         hostedBy: {
            //             id: "5e9f9b9b8d9c8a0f8c8d9c8",
            //             firstName: "User 1",
            //             lastName: "123",
            //             email: "user@gmail.com"
            //         },
            //         totalAttendes: 278,
            //         price: 1000,
            //         mode: "online",
            //         category: "Technology"
            //     }
            // }

        })();
    }, [])

    return (
        <div className="eventpg_div">
            <div className="explorecard_container eventpg_height">
                <div className="explorecard_img_div"><img className="explorecard_img" src={cover} alt={eventData.eventName} /></div>
                <div className="explorecard_more_details">
                    <div className="explorecard_venue">
                        <div>{eventData.time} IST</div>
                        <div>{eventData.date}</div>
                    </div>
                    <div className="explorecard_title_div">
                        <div className="explorecard_pill_div"><div className="explorecard_pill">{eventData.mode}</div></div>
                        <div className="explorecard_title">{eventData.eventName}</div>
                        <div className="explorecard_desc">{eventData.eventDescription}</div>
                    </div>
                    <div className="explorecard_creator">Hosted by : {eventData.hostedBy?.firstName} {eventData.hostedBy?.lastName}</div>
                    <div className="explorecard_extra">
                        <div className="explorecard_attendes"><IconContext.Provider value={{ className: "explorecard_icon" }}>
                            <IoIosPeople />
                        </IconContext.Provider>{eventData.totalAttendes}</div>
                        <div className="explorecard_attendes"><IconContext.Provider value={{ className: "explorecard_icon" }}>
                            <BiRupee />
                        </IconContext.Provider>{eventData.price}</div>
                        <div><Button className="explorecard_btn" variant="info"><a className="link" href="#">Join</a></Button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage
