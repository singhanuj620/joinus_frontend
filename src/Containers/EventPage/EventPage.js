import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Navigate } from 'react-router-dom'
import "./EventPage.css"

const EventPage = () => {
    let { eventId } = useParams();
    const [eventData, setEventData] = useState({});
    let eventUrl = "http://localhost:5000/api/event/" + eventId;
    useEffect(() => {
        console.log("EventPage", eventUrl);
        (async () => {
            // let {data} = await axios.get(eventUrl)
            let data = {
                success: true,
                data: {
                    id: "5e9f9b9b8d9c8a0f8c8d9c8",
                    title: "Event 1",
                    description: "Event 1 Description",
                    time: "18:00",
                    date: "18-03-2022",
                    location: "Event 1 Location",
                    cover: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    creator: {
                        id: "5e9f9b9b8d9c8a0f8c8d9c8",
                        name: "User 1",
                        email: "user@gmail.com",
                        profession: "User 1 Profession",
                        currentCity: "User 1 Current City",
                        country: "User 1 Country",
                        profilePic: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        pinCode: "123456"
                    },
                    totalAttendes: 278,
                    price: 1000,
                    mode: "online",
                    category: "Technology",
                }
            }
            if (data.success) {
                setEventData(data.data);
            }
            else {
                window.location.href = "/";
            }
        })();
    }, [])

    return (
        <div>
            abhi
        </div>
    )
}

export default EventPage
