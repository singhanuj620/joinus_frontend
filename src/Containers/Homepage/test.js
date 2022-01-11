import React from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

const test = () => {

    const handleClick = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/test')
            console.log(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            test
            <Button onClick={handleClick}>click</Button>
        </div>
    )
}

export default test
