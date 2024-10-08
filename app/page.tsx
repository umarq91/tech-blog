import ExploreProjects from '@/components/ExploreProjects'
import HeroSection from '@/components/Hero'
import Introduction from '@/components/Introduction'
import { Testimonials } from '@/components/magicui/CustomTestimonials'
import MarqueeLogo from '@/components/Marquee'
import OurWork from '@/components/OurWork'
import Marquee from '@/components/ui/marquee'
import React from 'react'

function Home() {
  return (
    <div className=''>
      {/* <HeroSection/> */}
      <Introduction/>
      <hr className='my-10 border border-gray-200'/>
      {/* <OurWork/> */}
       <MarqueeLogo/>
       
      <hr className='my-10 border border-gray-200'/>
      <h1 className='text-3xl md:text-5xl text-gray-900 font-bold text-center'> What Clients Say </h1>
      <Testimonials/>
      <hr className='my-10 border border-gray-200'/>
      <ExploreProjects/>
   
    </div>
  )
}

export default Home
