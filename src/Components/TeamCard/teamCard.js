import React from 'react'
import './teamCard.css'
const teamCard = ({ member }) => {
    const { name, email, role, dp } = member
    return (
        <div className="teamcard_container">
            <img className="teamCard_img" src={dp} alt={name}>
            </img>
            <div className="teamCard_details">
                <div className="teamCard_name">{name}</div>
                <div className="teamCard_email">{email}</div>
                <div className="teamCard_role">{role}</div>
            </div>
        </div>
    )
}

export default teamCard
