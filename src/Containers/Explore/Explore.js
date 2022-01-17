import React, { useEffect, useState } from 'react'
import './Explore.css'
import ExploreCard from '../../Components/ExploreCard/ExploreCard'
import nocover from './nocover.svg'
import { Form, Row, Col } from 'react-bootstrap'

const Explore = () => {

    const trendingEventUrl = 'http://localhost:5000/api/trending';
    const [trendingEvent, setTrendingEvent] = useState([]);
    const [eventDay, setEventDay] = useState("all");
    const [eventMode, setEventMode] = useState("all");
    const [eventCategory, setEventCategory] = useState("all");

    useEffect(() => {
        setTrendingEvent([
            {
                id,
                title,
                type,
                date,
                time,
                creator,
                totalAttendes,
                price,
                cover
            },
            {
                title,
                type,
                date,
                time,
                creator,
                totalAttendes,
                price,
                cover
            },
            {
                title,
                type,
                date,
                time,
                creator,
                totalAttendes,
                price,
                cover
            },
            {
                title,
                type,
                date,
                time,
                creator,
                totalAttendes,
                price,
                cover
            }
        ])

        // (async () => {
        //     try{
        //         const {data} = await axios.post(trendingEventUrl,{
        //             eventDay,
        //             eventMode,
        //             eventCategory
        //          });
        //         setTrendingEvent(data.data);
        //     }
        //     catch(err) {
        //         console.log(err);
        //         window.location.href = "/"
        //     }
        // })()
    }, [eventDay, eventMode, eventCategory]);

    useEffect(() => { }, [])

    const id = 'abc123'
    const title = 'Event 1'
    const type = 'Offline'
    const date = 'Jan 10, 2022'
    const time = '10:00 AM'
    const creator = { id: 'abc123', name: 'Anuj Singh' }
    const totalAttendes = 200
    const price = 100
    const cover = nocover

    return (
        <div className="explore_container">
            <div className="explore_filter">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicDay">
                                <Form.Label>Day</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => setEventDay(e.target.value)}>
                                    <option value="all">Any Day</option>
                                    <option value="tomorrow">Tomorrow</option>
                                    <option value="week">This Week</option>
                                    <option value="weekend">This Weekend</option>
                                    <option value="month">This Month</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEventMode">
                                <Form.Label>Event Mode</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => setEventMode(e.target.value)}>
                                    <option value="all">Any</option>
                                    <option value="offline">Offline</option>
                                    <option value="online">Online</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => setEventCategory(e.target.value)}>
                                    <option value="all">Any</option>
                                    <option value="software">Software</option>
                                    <option value="art">Art</option>
                                    <option value="yoga">Yoga</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="explore_card_container">
                {
                    trendingEvent.map((item, index) => {
                        return <ExploreCard
                            key={index}
                            id={item.id}
                            title={item.title}
                            type={item.type}
                            date={item.date}
                            time={item.time}
                            creator={item.creator}
                            totalAttendes={item.totalAttendes}
                            price={item.price}
                            cover={item.cover}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Explore
