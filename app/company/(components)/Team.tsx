import React from 'react'
import TeamCard from './TeamCard'

function Team() {
  return (
    <div className='py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <TeamCard/>
        <TeamCard/>

        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>

        <TeamCard/>
        <TeamCard/>

    </div>
  )
}

export default Team
