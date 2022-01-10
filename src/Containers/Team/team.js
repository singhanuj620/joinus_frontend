import React from 'react'
import './team.css'
import teambg from './team-bg.svg'
import TeamCard from '../../Components/TeamCard/teamCard'
import face from "./dp/face.png"
import anuj from "./dp/anuj.JPG"

const team = () => {

    const teamMembers = [
        {
            name: 'Prakhar Newatia',
            email: 'prakh.new@infosys.com',
            role: 'Specialist Programmer',
            dp: face
        },
        {
            name: 'Anuj Singh',
            email: 'anuj.singh18@infosys.com',
            role: 'Specialist Programmer',
            dp: anuj
        },
        {
            name: 'Prakhar Gupta',
            email: 'prakh.gupta@infosys.com',
            role: 'Specialist Programmer',
            dp: face
        },
        {
            name: 'Ranjit Pal',
            email: 'ranjit@infosys.com',
            role: 'Specialist Programmer',
            dp: face
        }
    ]

    return (

        <div className="team_container" style={{
            backgroundImage: `url(${teambg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
        }}>
            <div className="team_maintitle">Meet the team <span role="img" aria-label="information">😎</span></div>
            <div className="team_card_container">
                {
                    teamMembers.map((member, index) => {
                        console.log(member.name)
                        return (<TeamCard key={index} member={member} />)
                    })
                }
            </div>
        </div>

    )
}

export default team
