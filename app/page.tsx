import ExploreProjects from '@/components/ExploreProjects'
import HeroSection from '@/components/Hero'
import OurWork from '@/components/OurWork'
import React from 'react'

function Home() {
  return (
    <div>
      <HeroSection/>
      <hr className='my-10 border border-gray-200'/>
      <OurWork/>
      <hr className='my-10 border border-gray-200'/>
      <ExploreProjects/>
    </div>
  )
}

export default Home
