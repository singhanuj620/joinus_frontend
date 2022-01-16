import React, { useState } from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Test = () => {
    const [name, setName] = useState('anuj')

    const handleClick = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/test', {
                name: 'Ranjit'
            })
            console.log(res.data.data)
            setName(res.data.data.name)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            test --
            {name}
            <Button onClick={handleClick}>click</Button>
        </div>
    )
}

export default Test
