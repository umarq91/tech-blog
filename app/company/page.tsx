'use client'
import MarqueeLogo from '@/components/Marquee'
import OurServices from '@/components/Ourservices'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import {motion} from "framer-motion"
import Team from './(components)/Team';
import ServicesSection from '@/components/ServicesSection';
import StandOutSection from '@/components/StandOutSection';
function Comapny() {
  const services = [
    {
      title: 'Cloud Consulting',
      description: 'We optimize your cloud strategy for seamless scalability.',
      logo: 'https://example.com/cloud-consulting-logo.svg', // Replace with relevant logo URL
    },
    {
      title: 'Cybersecurity Services',
      description: 'We safeguard your data with robust security measures.',
      logo: 'https://example.com/cybersecurity-logo.svg', // Replace with relevant logo URL
    },
    {
      title: 'Data Engineering',
      description: 'We transform raw data into actionable insights.',
      logo: 'https://example.com/data-engineering-logo.svg', // Replace with relevant logo URL
    },
    {
      title: 'AI Solutions',
      description: 'We integrate intelligent systems to enhance efficiency.',
      logo: 'https://example.com/ai-solutions-logo.svg', // Replace with relevant logo URL
    },
    {
      title: 'Blockchain Development',
      description: 'We create secure and transparent blockchain applications.',
      logo: 'https://example.com/blockchain-development-logo.svg', // Replace with relevant logo URL
    },
    {
      title: 'Mobile App Development',
      description: 'We design user-friendly mobile apps that engage users.',
      logo: 'https://example.com/mobile-app-development-logo.svg', // Replace with relevant logo URL
    },
    {
      title: 'DevOps Integration',
      description: 'We streamline processes for faster, reliable software delivery.',
      logo: 'https://example.com/devops-integration-logo.svg', // Replace with relevant logo URL
    },
    {
      title: 'IT Infrastructure Management',
      description: 'We ensure optimal performance and security of your IT systems.',
      logo: 'https://example.com/it-infrastructure-management-logo.svg', // Replace with relevant logo URL
    },
  ];
  



  return (
    <div>
      {/* Section 1 */}
      <div className='max-w-6xl mx-auto font-yantramanav'>
      <div className='flex flex-col justify-center items-center min-h-screen gap-5 text-center'>
          <button className='text-blue-700 bg-blue-100 px-7 py-2 rounded-full text-sm hover:bg-blue-200 transition'>
            Company
          </button>
          <h1 className='text-3xl md:text-5xl  lg:text-7xl max-w-[900px] font-yantramanav font-bold text-[#212529] leading-snug'>
          Empowering Your Business for a Digital-First World
          </h1>
          <h5 className='text-gray-700 text-base md:text-lg  max-w-3xl leading-relaxed'>
          At H-Dot, we deliver cutting-edge technology solutions that evolve with you. Our commitment extends beyond project delivery; we drive transformation that lasts.
          </h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10  place-items-center">
  <div className="flex flex-col items-center justify-center text-center gap-2">
    <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">500++</h1>
    <h5 className="text-lg sm:text-xl font-medium">Projects</h5>
    <p className="text-gray-500 max-w-xs">successfully completed, spanning across industries and continents.</p>
  </div>

  <div className="flex flex-col items-center justify-center text-center gap-2">
    <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">99%%</h1>
    <h5 className="text-lg sm:text-xl font-medium">Client satisfaction</h5>
    <p className="text-gray-500 max-w-xs"></p>
  </div>

  <div className="flex flex-col items-center justify-center text-center gap-2">
    <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">15k+</h1>
    <h5 className="text-lg sm:text-xl font-medium">Legal Customers</h5>
    <p className="text-gray-500 max-w-xs"> who trust H-Dot for their technology needs and digital transformations.</p>
  </div>

  <div className="flex flex-col items-center justify-center text-center gap-2">
    <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">Since 2019</h1>
    <h5 className="text-lg sm:text-xl font-medium">Established as a pioneer</h5>
    <p className="text-gray-500 max-w-xs">in tech innovation, we continue to lead with vision and expertise.</p>
  </div>
</div>


      </div>

<hr className="my-40"/>
      {/* section 2 */}

      <MarqueeLogo/>


      <hr className="my-40"/>

      {/* section 3 */}

      <div className='bg-[#1C1C1C] min-h-screen text-white flex justify-center items-center'>
        <div className="max-w-7xl mx-auto p-6 md:p-12 font-montserrat ">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 p-4">
              <p className="text-blue-600 text-[9px]  leading-3 mb-5 tracking-[3px] font-semibold font-syne captialize">WHAT WE'RE OFFERING</p>
              <h1 className="text-4xl font-bold mb-4">Dealing in All Professional IT Services</h1>
            </div>

            <div className="flex-1 flex justify-center items-center md:px-10">
              <p className="text-white text-xs text-center md:text-left">
                One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {services.map((item, index) => (
              <ServicesSection item={item} index={index} />
            ))}

          </div>
        </div>

        {/* section 4 */}

      </div>

      <hr className='my-24' />
      {/* section 4 */}
      <div className="max-w-7xl  mx-auto  p-6 md:p-12 font-montserrat ">
        <div className='bg-blue-50 py-10'>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 p-4">
              <p className="text-blue-600 text-[9px]  leading-3 mb-5 tracking-[3px] font-semibold font-syne captialize">WHAT WE'RE OFFERING</p>
              <h1 className="text-4xl font-bold mb-4">Dealing in All Professional IT Services</h1>
            </div>

            <div className="flex-1 flex justify-end items-end md:px-10">
              <button className='w-[70%] bg-blue-700 text-white py-3 px-6  rounded-xl' > Book an appointment with experts </button>
            </div>
          </div>
        </div>
        {/* Team */}
        <Team />

      </div>
      <hr className="my-20" />
      {/* section 5 */}
      <StandOutSection />

    </div>
  )
}

export default Comapny
