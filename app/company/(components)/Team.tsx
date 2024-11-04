import React from 'react'
import TeamCard from './TeamCard'


function Team() {
const team = [
  {src:"/team/person1.jpeg",position:"Chief Technical Officer and Co-Founder",name:"John Doe"},
  {src:"/team/person2.jpeg",position:"Chief Strategist & Co-Founder",name:"John Doe"},
  {src:"/team/person3.jpeg",position:"Director Growth and Business Development",name:"John Doe"},
  {src:"/team/person4.png",position:"Director Business Operations",name:"John Doe"},
  {src:"/team/person5.png",position:"Head of Technology Innovation",name:"John Doe"},

]

  return (
    <div className='py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {team.map((person)=>{
       return <TeamCard image={person.src} position={person.position} name={person.name}/>
      })}
      

    </div>
  )
}

export default Team
