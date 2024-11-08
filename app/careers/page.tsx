import ServicesSection from '@/components/ServicesSection';
import StandOutSection from '@/components/StandOutSection';
import React from 'react';
// Import FontAwesome for icons
import { FaClock, FaDollarSign } from 'react-icons/fa';
import Team from '../company/(components)/Team';
import Link from "next/link"
import { services } from '@/constants';

function Careers() {

    
    

  const careers = [
    {
      title: 'DevOps Engineer',
      subtitle: 'Engineering',
      experience: 'Minimum 3 years experience or above',
      type: 'Full Time',
      salary: '10-30k',
      location:'canada'
    },
    {
      title: 'Senior DevOps Engineer',
      subtitle: 'Engineering',
      experience: 'Minimum 3 years experience or above',
      type: 'Part Time',
      salary: '15-25k',
      location:'Karachi'
    },
    {
        title: 'Cloud Architect',
        subtitle: 'Development',
        experience: 'Minimum 5 years experience or above',
        type: 'Full Time',
        salary: '10-30k',
        location:'Lahore'
      },
      {
        title: 'Senior Cloud Architect',
        subtitle: 'Engineering',
        experience: 'Minimum 7 years experience or above',
        type: 'Part Time',
        location:'USA',
        salary: '15-25k',
      },
      {
        title: 'AWS Solutions Architect',
        subtitle: 'Engineering',
        experience: 'Minimum 4 years experience or above',
        type: 'Part Time',
        location:'USA',
        salary: '15-25k',
      },
  ];

  return (
    <div className="min-h-screen font-yantramanav bg-white">
      {/* Section 1 */}
      <div className="bg-[#1C1C1C] min-h-screen text-white">
        <div className="flex flex-col justify-center items-center min-h-screen gap-5 text-center">
          <button className="text-blue-700 bg-white px-7 py-2 rounded-full text-sm hover:bg-blue-200 transition">
            Careers
          </button>
          <h1 className="text-3xl md:text-5xl lg:text-7xl max-w-[900px] font-yantramanav font-bold leading-snug">
          Join H-Dot
          </h1>
          <h5 className="text-base md:text-lg max-w-3xl leading-relaxed">
          At H-Dot, we believe in empowering ambitious, talented individuals to make a lasting impact. If you're ready to take your career to the next level and thrive in an innovative environment, explore the opportunities we have to offer. Join us, and let's shape the future together.
          </h5>
          <Link href={"/contact-us"}>
          <button className="bg-blue-700 text-white py-3 px-6 rounded-2xl">
            Book an appointment now
          </button>
          </Link>
        </div>
      </div>

<hr className='my-24'/>
      {/* Section 2 */}
      <div className="bg-[#1C1C1C] min-h-screen text-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto p-6 md:p-12 font-montserrat">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 p-4">
              <p className="text-blue-600 text-[9px] leading-3 mb-5 tracking-[3px] font-semibold font-syne captialize">WHAT WE'RE OFFERING</p>
              <h1 className="text-4xl font-bold mb-4">Comprehensive IT Solutions Tailored for Your Success</h1>
            </div>
            <div className="flex-1 flex justify-center items-center md:px-10">
              <p className="text-white text-xs text-center md:text-left">
              In the ever-evolving landscape of technology, infrastructure management is essential. This includes designing, implementing, and maintaining hardware, software, networks, and servers to ensure optimal performance and security.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {services.map((item, index) => (
              <ServicesSection key={index} item={item} />
            ))}
          </div>
        </div>
      </div>

<hr className=''/>
      {/* Section 3 - Careers Section */}

<div className="my-20 bg-blue-50">


            <div className="flex justify-center ">
        <button className="text-center text-black my-10 text-lg font-poppins">Apply now at <span className='text-blue-700'>  admin@h-dot.tech </span></button>
        </div>
                    <div className='flex flex-col md:flex-row md:p-20'>

                {/* Left Section - Fixed at the top */}
                <div className="flex-1 max-w-lg mx-auto justify-start flex flex-col mb-8 md:mb-0 md:pr-10 md:sticky md:top-0">
                <div className="max-w-lg">
                    <p className="text-blue-600 text-[10px] leading-3 mb-4 tracking-[3px] font-semibold font-syne uppercase">OPENING IN OUR COMPANY</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Exciting Career Opportunities at H-Dot</h1>
                    <p className="text-sm text-gray-400">
                    Join our innovative team at H-Dot, where we are at the forefront of technology solutions. Our California office is a vibrant hub for talented individuals ready to make a significant impact in the IT landscape.
                    </p>
                </div>
                </div>

                {/* Right Section - Scrollable career cards */}
                <div className="flex-1 md:pl-10 text-black">
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    {careers.map((career, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                        {/* Top Section */}
                        <div className="flex justify-between items-start w-full mb-6">
                        <div className="flex flex-col gap-2 flex-1">
                            <h2 className="text-lg font-semibold">
                            {career.title} <span className="text-blue-700">{career.subtitle}</span>
                            </h2>
                            <p className="text-xs text-gray-600">{career.experience}</p>
                        </div>
                        {/* <button className="text-blue-700 bg-blue-100 px-7 py-2 rounded-full text-sm hover:bg-blue-200 transition">{career.location}</button> */}
                        </div>

                        {/* Bottom Section with icons for future */}
                        {/* <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center text-gray-700 text-sm">
                            <FaClock className="w-4 h-4 mr-1 text-blue-500" />
                            {career.type}
                        </div>
                        <div className="flex  items-center justify-center text-gray-700 text-md tracking-widest">
                            <FaDollarSign className="w-4 h-4 mr-1 text-blue-500" />
                            {career.salary}
                        </div>
                        </div> */}
                    </div>
                    ))}
                </div>
                </div>
                
                </div>
                </div>
    <StandOutSection
    title='Why Working With Us is Exceptional'
    paragraphsTrigger={
      <>
          <p className="text-base leading-relaxed">
          We don’t believe in a one-size-fits-all workplace. 
          Our team culture is carefully crafted to recognize and nurture each individual's strengths,
           ensuring that you find purpose and growth in your role.

      </p>
      <p className="text-base  leading-relaxed">
      Our dedication goes beyond day-to-day tasks. We focus on building lasting connections and
       fostering an environment where your ideas and ambitions are supported, allowing you to thrive and make a long-term impact.
      </p>
      </>
    }
    iconSectionTrigger={
      <>
        <div className="gap-3 flex  items-center">
        <div className="flex items-center gap-3">
          {/* Tick Icon */}
          <div className="text-blue-500 text-2xl">✔</div>
          <h5 className="text-md ">
          Empowering Growth Opportunities
          </h5>
        </div>
        <div className="flex items-center gap-3">
          {/* Tick Icon */}
          <div className="text-blue-500 text-2xl">✔</div>
          <h5 className="text-md ">
          Collaborative and Supportive Environment
          </h5>
        </div>
      
      </div>
      </>
    }
    />

<hr className='my-24'/>
{/* next section */}
    <div className='bg-[#1C1C1C] text-white'> 
    <div className="max-w-7xl  mx-auto  p-6 md:p-12 font-montserrat ">
        <div className=' py-10'>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 p-4">
              <p className="text-blue-600 text-[9px]  leading-3 mb-5 tracking-[3px] font-semibold font-syne">Mentorship Excellence</p>
              <h1 className="text-4xl font-bold mb-4">Our Leadership and Mentors</h1>
              <p>At H-Dot, our leadership team is a powerhouse of top talents, industry experts, and visionary thinkers from various fields. Together, they guide our mission, foster innovation, and inspire our teams to achieve greatness.</p>
            </div>
            <hr/>

            <div className="flex-1 flex justify-end items-end md:px-10">
              <Link href="/contact-us">
              <button className='w-[70%] bg-blue-700 text-white py-3 px-6  rounded-xl' > Book an appointment with experts </button>
              </Link>
            </div>
          </div>
        </div>
        <hr className='my-24'/>
        {/* Team */}
      <Team/>

      </div>
    </div>
    </div>
  );
}

export default Careers;
