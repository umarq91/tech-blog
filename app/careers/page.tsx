import ServicesSection from '@/components/ServicesSection';
import StandOutSection from '@/components/StandOutSection';
import React from 'react';
// Import FontAwesome for icons
import { FaClock, FaDollarSign } from 'react-icons/fa';
import Team from '../company/(components)/Team';

function Careers() {
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
    
    

  const careers = [
    {
      title: 'Front End Developer',
      subtitle: 'Development',
      experience: 'Minimum 5 years experience or above',
      type: 'Full Time',
      salary: '10-30k',
      location:'canada'
    },
    {
      title: 'Back End Developer',
      subtitle: 'Engineering',
      experience: 'Minimum 3 years experience or above',
      type: 'Part Time',
      salary: '15-25k',
      location:'Karachi'
    },
    {
        title: 'Front End Developer',
        subtitle: 'Development',
        experience: 'Minimum 5 years experience or above',
        type: 'Full Time',
        salary: '10-30k',
        location:'Lahore'
      },
      {
        title: 'Back End Developer',
        subtitle: 'Engineering',
        experience: 'Minimum 3 years experience or above',
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
            You have great opportunities
          </h1>
          <h5 className="text-base md:text-lg max-w-3xl leading-relaxed">
            If you are a talented and ambitious individual looking to make a mark in your career, we invite you to explore our career opportunities.
          </h5>
          <button className="bg-blue-700 text-white py-3 px-6 rounded-2xl">
            Book an appointment now
          </button>
        </div>
      </div>

<hr className='my-24'/>
      {/* Section 2 */}
      <div className="bg-[#1C1C1C] min-h-screen text-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto p-6 md:p-12 font-montserrat">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 p-4">
              <p className="text-blue-600 text-[9px] leading-3 mb-5 tracking-[3px] font-semibold font-syne">What We're Offering</p>
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
              <ServicesSection key={index} item={item} />
            ))}
          </div>
        </div>
      </div>

<hr className=''/>
      {/* Section 3 - Careers Section */}

<div className="my-20 bg-blue-50">


            <div className="flex justify-center ">
        <button className="text-center text-black my-10 text-lg font-poppins">Apply now at <span className='text-blue-700'>  xyz@gmail.com </span></button>
        </div>
                    <div className='flex flex-col md:flex-row md:p-20'>

                {/* Left Section - Fixed at the top */}
                <div className="flex-1 max-w-lg mx-auto justify-start flex flex-col mb-8 md:mb-0 md:pr-10 md:sticky md:top-0">
                <div className="max-w-lg">
                    <p className="text-blue-600 text-[10px] leading-3 mb-4 tracking-[3px] font-semibold font-syne uppercase">OPENING IN OUR COMPANY</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Job openings and career opportunities</h1>
                    <p className="text-sm text-gray-400">
                    Our location is strategically situated at the heart of City, making it an ideal destination for businesses and visitors alike.
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
                        <button className="text-blue-700 bg-blue-100 px-7 py-2 rounded-full text-sm hover:bg-blue-200 transition">{career.location}</button>
                        </div>

                        {/* Bottom Section with icons */}
                        <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center text-gray-700 text-sm">
                            <FaClock className="w-4 h-4 mr-1 text-blue-500" />
                            {career.type}
                        </div>
                        <div className="flex  items-center justify-center text-gray-700 text-md tracking-widest">
                            <FaDollarSign className="w-4 h-4 mr-1 text-blue-500" />
                            {career.salary}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
                
                </div>
                </div>
    <StandOutSection/>

<hr className='my-24'/>
{/* next section */}
    <div className='bg-[#1C1C1C] text-white'> 
    <div className="max-w-7xl  mx-auto  p-6 md:p-12 font-montserrat ">
        <div className=' py-10'>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 p-4">
              <p className="text-blue-600 text-[9px]  leading-3 mb-5 tracking-[3px] font-semibold font-syne">Mentor</p>
              <h1 className="text-4xl font-bold mb-4">Our leadership and mentors</h1>
              <p>Our team is a collective force of top talents, experts, and visionaries from diverse fields</p>
            </div>
            <hr/>

            <div className="flex-1 flex justify-end items-end md:px-10">
              <button className='w-[70%] bg-blue-700 text-white py-3 px-6  rounded-xl' > Book an appointment with experts </button>
            </div>
          </div>
        </div>
        <hr className='my-24'/>
        {/* Team */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>

                    {/* person 1 */}
                    <div className='min-h-[350px] py-10 flex flex-col gap-2 justify-center items-center '>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/29/03/35/girl-1867092_1280.jpg"
        className='h-24 w-24 rounded-full object-cover'
        alt="Team member"
      />
      <h2 className='text-xl font-bold'>Jennifer Linda</h2>
      <h5 className='text-blue-700'>Product Designer</h5>
</div>
<div className='min-h-[350px] py-10 flex flex-col gap-2 justify-center items-center '>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/29/03/35/girl-1867092_1280.jpg"
        className='h-24 w-24 rounded-full object-cover'
        alt="Team member"
      />
      <h2 className='text-xl font-bold'>Jennifer Linda</h2>
      <h5 className='text-blue-700'>Product Designer</h5>
</div>
<div className='min-h-[350px] py-10 flex flex-col gap-2 justify-center items-center '>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/29/03/35/girl-1867092_1280.jpg"
        className='h-24 w-24 rounded-full object-cover'
        alt="Team member"
      />
      <h2 className='text-xl font-bold'>Jennifer Linda</h2>
      <h5 className='text-blue-700'>Product Designer</h5>
</div>
<div className='min-h-[350px] py-10 flex flex-col gap-2 justify-center items-center '>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/29/03/35/girl-1867092_1280.jpg"
        className='h-24 w-24 rounded-full object-cover'
        alt="Team member"
      />
      <h2 className='text-xl font-bold'>Jennifer Linda</h2>
      <h5 className='text-blue-700'>Product Designer</h5>
</div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Careers;
