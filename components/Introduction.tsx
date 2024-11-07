'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Introduction() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='min-h-screen bg-[#e4e4e4] bg-opacity-30 py-10 px-4 sm:py-16 lg:p-24 font-yantramanav'>
      <div className='flex flex-col lg:flex-row'>
        {/* left */}
        <motion.div
          className='flex-1'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          {/* content */}
          <div className='flex flex-col gap-2 '>
            <h5 className='text-[10px] text-blue-800  font-[500] font-syne tracking-[6px] uppercase'>Digital Transformation</h5>
            <div className='flex flex-col gap-8  items-start'>
              <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 font-[500]'>
              Seamless & Innovative IT Solutions for Business Growth and Resilience
              </h1>
              <p className='text-[#212529] leading-7 text-base md:text-lg md:pr-10 tracking-wild font-montserrat'>
              From cloud to Cybersecurity, H-Dot delivers comprehensive IT services that power growth and innovation.
              </p>
            </div>
            {/* buttons */}
            <div className='flex gap-4 mt-8'>
              <Link href={"/about"}>
              <button className='bg-[#1351d8] rounded-full hover:opacity-90 text-white px-8 text-xs py-2'>
                Learn More
              </button>
              </Link >
              <Link href={"/contact-us"}>
              <button className='bg-gray-300 rounded-full hover:opacity-90 text-blue-800 px-8 text-xs py-2'>
                Let's Talk
              </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          className='flex-1 w-full mt-10 lg:mt-0'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.2 }} // Slight delay for the right section
        >
          <div className='h-[60vh] lg:h-[80%] relative'>
            <Image
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg1-1-1.png"
              layout='fill'
              alt='hero image'
              style={{ objectFit: 'contain' }}
              className='relative'
            />
            <div className='absolute left-0 w-[40%]   lg:w-[50%] sm:bottom-4 lg:left-3  xl:left-10 bottom-16 lg:bottom-0 lg:h-24 md:bottom-0 sm:left-10 bg-gray-100 p-3 sm:p-5 z-10 flex  sm:h-28 md:left-28 md:w-[30%] md:gap-4 items-center'>
        
              <div className='flex items-center gap-3 '>
                <h1 className='text-xl sm:text-3xl md:text-4xl text-black'>+15</h1>
                <div>
                  <p className='text-xs sm:text-base text-blue-500'>Years</p>
                  <p className='text-xs sm:text-sm text-gray-500'>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Introduction;
