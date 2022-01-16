import React from 'react'
import './ExploreCard.css'
import { Button } from 'react-bootstrap'
import { IoIosPeople } from 'react-icons/io'
import { IconContext } from "react-icons";
import { BiRupee } from "react-icons/bi";

const ExploreCard = ({ id, title, type, date, time, creator, totalAttendes, price, cover }) => {
    return (
        <>
            <hr className="explorecard_hr"></hr>
            <div className="explorecard_container" onClick={() => window.location.href = `/event/${id}`}>
                <div className="explorecard_img_div"><img className="explorecard_img" src={cover} alt={title} /></div>
                <div className="explorecard_more_details">
                    <div className="explorecard_venue">
                        <div>{time}</div>
                        <div>{date}</div>
                    </div>
                    <div className="explorecard_title_div">
                        <div className="explorecard_pill_div"><div className="explorecard_pill">{type}</div></div>
                        <div className="explorecard_title">{title}</div>
                    </div>
                    <div className="explorecard_creator">Hosted by : {creator.name}</div>
                    <div className="explorecard_extra">
                        <div className="explorecard_attendes"><IconContext.Provider value={{ className: "explorecard_icon" }}>
                            <IoIosPeople />
                        </IconContext.Provider>{totalAttendes}</div>
                        <div className="explorecard_attendes"><IconContext.Provider value={{ className: "explorecard_icon" }}>
                            <BiRupee />
                        </IconContext.Provider>{price}</div>
                        <div><Button className="explorecard_btn" variant="info"><a className="link" href={`/event/${id}`}>Details</a></Button></div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default ExploreCard
