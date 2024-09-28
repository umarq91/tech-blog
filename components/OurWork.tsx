import React from 'react';
import OrbitingCircles from './ui/orbiting-circles';
import { OrbitingCirclesDemo } from './magicui/OrbitingCircles';
import Link from 'next/link';
import { ScrollBasedVelocity } from './magicui/ScrollBased';
import { div } from 'framer-motion/m';
function OurWork() {
  return (
    <div>
        <ScrollBasedVelocity/>

    <div className='flex flex-col md:flex-row p-10'>
      <div className='md:w-1/2 md:pr-10 p-10'>
        <h1 className='text-3xl font-bold mb-4'>Our Service</h1>
        <p className='text-lg mb-6'>
          At [Your Company Name], we take pride in delivering exceptional projects that 
          transform ideas into reality. Our dedicated team works tirelessly to ensure 
          that each project reflects our commitment to quality and innovation.
        </p>
        <Link
            href="#"
            title="Learn More"
            className="inline-flex hover:opacity-85  font-montserrat items-center px-6 py-4 mt-2  text-white transition-all duration-200 bg-black rounded-full lg:mt-10 focus:bg-yellow-400"
            role="button"
          >
            Learn More
            <svg
              className="w-6 h-6 ml-8 -mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
      </div>
      <div className='md:w-1/2 flex justify-center items-center mt-6 md:mt-0'>
        <OrbitingCirclesDemo />
      </div>
    </div>
            </div>
  );
}

export default OurWork;
