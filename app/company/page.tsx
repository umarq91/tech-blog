'use client'
import MarqueeLogo from '@/components/Marquee'
import OurServices from '@/components/Ourservices'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import {motion} from "framer-motion"
import Team from './(components)/Team';
function Comapny() {
  const services = [
    {
      title: 'Development',
      description: 'Our development is pixel perfect in all ways.',
      logo: 'https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg',
    },
    {
      title: 'WooCommerce',
      description: 'We have the best team for your shopping websites.',
      logo: 'https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg',
    },
    {
      title: 'CRM Solutions',
      description: 'We enhance customer experiences for success.',
      logo: 'https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg',
    },
    {
      title: 'Web Design',
      description: 'We create vibrant, intuitive, and minimalist websites.',
      logo: 'https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg',
    },
    {
      title: 'IT Support',
      description: 'We offer expert assistance for your IT issues.',
      logo: 'https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 },   // End fully visible at original position
  };

  // Ref to check if the container is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once


  return (
    <div>
      {/* Section 1 */}
      <div className='max-w-6xl mx-auto font-yantramanav'>
      <div className='flex flex-col justify-center items-center min-h-screen gap-5 text-center'>
          <button className='text-blue-700 bg-blue-100 px-7 py-2 rounded-full text-sm hover:bg-blue-200 transition'>
            Company
          </button>
          <h1 className='text-3xl md:text-5xl  lg:text-7xl max-w-[900px] font-yantramanav font-bold text-[#212529] leading-snug'>
          Our company provide a best horizon tech solutions
          </h1>
          <h5 className='text-gray-700 text-base md:text-lg  max-w-3xl leading-relaxed'>
          Experience the transformative power of innovation and seamless solutions with dynamics. Our journey doesn't end with the delivery of a solution.          </h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10  place-items-center">
  <div className="flex flex-col items-center justify-center text-center gap-2">
    <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">300+</h1>
    <h5 className="text-lg sm:text-xl font-medium">Project</h5>
    <p className="text-gray-500 max-w-xs">We are spread around the world.</p>
  </div>

  <div className="flex flex-col items-center justify-center text-center gap-2">
    <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">100%</h1>
    <h5 className="text-lg sm:text-xl font-medium">Client satisfaction</h5>
    <p className="text-gray-500 max-w-xs">We are spread around the world.</p>
  </div>

  <div className="flex flex-col items-center justify-center text-center gap-2">
    <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">15k+</h1>
    <h5 className="text-lg sm:text-xl font-medium">Legal Customers</h5>
    <p className="text-gray-500 max-w-xs">We are spread around the world.</p>
  </div>

  <div className="flex flex-col items-center justify-center text-center gap-2">
    <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">1995</h1>
    <h5 className="text-lg sm:text-xl font-medium">We established on</h5>
    <p className="text-gray-500 max-w-xs">We are spread around the world.</p>
  </div>
</div>


      </div>

<hr className="my-40"/>
      {/* section 2 */}

      <MarqueeLogo/>


      <hr className="my-40"/>

      {/* section 3 */}

      <div className='bg-[#1C1C1C] min-h-screen text-white flex justify-center items-center'>
      <div className="max-w-7xl mx-auto p-6 md:p-12 font-montserrat " ref={ref}>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 p-4">
          <p className="text-blue-600 text-[9px]  leading-3 mb-5 tracking-[3px] font-semibold font-syne">What We're Offering</p>
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
          <motion.div
            key={index}
            className="flex bg-white text-black h-[250px] gap-3 justify-center flex-col items-left p-4 rounded-lg transition-shadow duration-300 ease-in-out"
            initial="hidden"   // Start from hidden
            animate={isInView ? "visible" : "hidden"} // Animate based on viewport
            variants={cardVariants} // Use defined variants
            transition={{ duration: 0.5, delay: index * 0.1 }} // Add stagger effect
          >
            <img src={item.logo} alt={item.title} className="h-10 w-10 mb-4 object-contain" />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-xs">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* section 4 */}
    
      </div>

      <hr className='my-24'/>
      {/* section 4 */}
      <div className="max-w-7xl  mx-auto  p-6 md:p-12 font-montserrat " ref={ref}>
        <div className='bg-blue-50 py-10'>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 p-4">
          <p className="text-blue-600 text-[9px]  leading-3 mb-5 tracking-[3px] font-semibold font-syne">What We're Offering</p>
          <h1 className="text-4xl font-bold mb-4">Dealing in All Professional IT Services</h1>
        </div>

        <div className="flex-1 flex justify-end items-end md:px-10">
          <button className='w-[70%] bg-blue-700 text-white py-3 px-6  rounded-xl' > Book an appointment with experts </button>
        </div>
      </div>
</div>
        {/* Team */}
        <Team/>
     
    </div>
<hr  className="my-20"/>
    {/* section 5 */}
    <div className="bg-[#1C1C1C] font-yantramanav lg:py-40 min-h-screen flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 px-6 lg:px-16 py-16">
  {/* Left - Image */}
  <div className="flex-1 flex justify-center  lg:justify-start">
    <img
      src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
      alt="Service"
      className="w-full  object-cover rounded-xl shadow-lg"
    />
  </div>

  {/* Right - Content */}
  <div className="flex-1 text-white space-y-8 max-w-xl lg:max-w-lg">
    {/* Heading */}
    <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
      Why Our Services Stand Out
    </h1>

    {/* Paragraphs */}
    <p className="text-base leading-relaxed">
      We don’t believe in a one-size-fits-all approach. Our services are
      carefully tailored to meet your unique needs, ensuring that you achieve
      your goals with precision and excellence.
    </p>
    <p className="text-base  leading-relaxed">
      Our commitment extends beyond the project itself. We are dedicated to
      delivering value that lasts, focusing on long-term benefits that will
      help you grow and succeed over time.
    </p>

    {/* Icon Section */}
    <div className="gap-3 flex  items-center">
      <div className="flex items-center gap-3">
        {/* Tick Icon */}
        <div className="text-blue-500 text-2xl">✔</div>
        <h5 className="text-md ">
          PPD Development
        </h5>
      </div>
      <div className="flex items-center gap-3">
        {/* Tick Icon */}
        <div className="text-blue-500 text-2xl">✔</div>
        <h5 className="text-md ">
          Quick Response
        </h5>
      </div>
    
    </div>
  </div>
</div>

    </div>
  )
}

export default Comapny
