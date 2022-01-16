import React, { useEffect, useState } from 'react'
import './Explore.css'
import ExploreCard from '../../Components/ExploreCard/ExploreCard'
import nocover from './nocover.svg'
import { Form, Row, Col } from 'react-bootstrap'

const Explore = () => {

    const trendingEventUrl = 'http://localhost:5000/api/trending';
    const [trendingEvent, setTrendingEvent] = useState([]);
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
        //         const {data} = await axios.get(trendingEventUrl);
        //         setTrendingEvent(data.data);
        //     }
        //     catch(err) {
        //         console.log(err);
        //         window.location.href = "/"
        //     }
        // })()
    }, []);

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
                                <Form.Select aria-label="Default select example">
                                    <option value="0">Any Day</option>
                                    <option value="1">Tomorrow</option>
                                    <option value="2">This Week</option>
                                    <option value="3">This Weekend</option>
                                    <option value="4">This Month</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEventMode">
                                <Form.Label>Event Mode</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Offline</option>
                                    <option value="2">Online</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option value="0">Open filter</option>
                                    <option value="1">Software</option>
                                    <option value="2">Art</option>
                                    <option value="3">Yoga</option>
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
