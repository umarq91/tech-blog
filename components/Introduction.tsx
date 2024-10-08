import Image from 'next/image';
import React from 'react';

function Introduction() {
  return (
    <div className='min-h-screen bg-[#e4e4e4] bg-opacity-30 py-10 px-4 sm:py-16 lg:p-24 font-montserrat'>
      <div className='flex flex-col lg:flex-row'>
        {/* left */}
        <div className='flex-1'>
          {/* content */}
          <div className='flex flex-col gap-4'>
            <h5 className='text-lg md:text-xl text-blue-800 font-light'>Empowernment</h5>
            <div className='flex flex-col gap-8'>
              <h1 className='text-2xl md:text-4xl lg:text-5xl text-gray-900 font-bold'>
                Seamless IT for your business, boosting your growth
              </h1>
              <p className='text-gray-400 text-base md:text-lg'>
                We provide the expertise and support to propel your business forward in the digital landscape.
              </p>
            </div>
            {/* buttons */}
            <div className='flex gap-4'>
              <button className='bg-blue-800 rounded-full text-white px-4 py-2'>
                Learn More
              </button>
              <button className='bg-gray-300 rounded-full text-blue-800 px-4 py-2'>
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='flex-1 w-full mt-10 lg:mt-0'>
          <div className='h-[60vh] lg:h-[80%] relative'>
            <Image
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg1-1-1.png"
              layout='fill'
              alt='hero image'
              style={{ objectFit: 'contain' }}
              className='relative'
            />
            <div className='absolute left-0    sm:left-8  max-w-[90%] lg:-left-3 xl:left-10 bottom-16 lg:bottom-10 md:bottom-0 bg-gray-100 p-3 sm:p-5 z-10 flex  sm:h-[25%]   md:gap-4 items-center'>
              <img
                src="/logo.png"
                style={{ filter: 'invert(1)' }}
                className="h-6 sm:h-8 w-6 sm:w-8 mt-1"
                alt="Logo"
              />
              <div className='flex items-center gap-3 '>
                <h1 className='text-xl sm:text-3xl md:text-4xl text-black'>+8</h1>
                <div>
                  <p className='text-xs sm:text-base text-blue-500'>Years</p>
                  <p className='text-xs sm:text-sm text-gray-500'>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
