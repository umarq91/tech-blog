import ExploreProjects from '@/components/ExploreProjects'
import Introduction from '@/components/Introduction'
import { Testimonials } from '@/components/magicui/CustomTestimonials'
import MarqueeLogo from '@/components/Marquee'
import OurFlow from '@/components/OurFlow'
import Ourservices from '@/components/Ourservices'
import Marquee from '@/components/ui/marquee'
import React from 'react'

function Home() {
  return (
    <div className='flex flex-col  '>
      <Introduction />
      <MarqueeLogo />
      {/* <Testimonials/> */}
      <OurFlow />
      <Ourservices />
      <ExploreProjects />

    </div>
  )
}

export default Home
