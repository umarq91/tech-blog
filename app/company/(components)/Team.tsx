import React from 'react'
import TeamCard from './TeamCard'


function Team() {
const team = [
  {src:"/team/person1.jpeg",position:"Chief Technical Officer and Co-Founder",name:"Farjad Habib"},
  {src:"/team/person2.jpeg",position:"Chief Strategist & Co-Founder",name:"Sarmad Habib"},
  {src:"/team/person3.jpeg",position:"Director Growth and Business Development",name:"Anum Asif"},
  {src:"/team/person4.png",position:"Director Business Operations",name:"Javeria Zafar"},
  {src:"/team/person5.png",position:"Head of Technology Innovation",name:"Ahsan Tariq"},

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
