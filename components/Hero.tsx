import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24 font-poppins">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid items-center grid-cols-1 gap-12 ">
        <div>
          <p className="text-base font-montserrat  tracking-wider text-black uppercase">
          • Leading Innovation in Tech
          </p>
          <h1 className="mt-4  text-4xl font-semibold font-montserrat text-black lg:mt-8 sm:text-5xl xl:text-7xl">
            Accelerating Digital Transformation
          </h1>
          <p className="mt-4 text-base text-black lg:mt-4 sm:text-xl">
            Building scalable solutions for modern businesses.
          </p>

          <a
            href="#"
            title="Learn More"
            className="inline-flex font-montserrat items-center px-6 py-4 mt-2  text-white transition-all duration-200 bg-black rounded-full lg:mt-10 focus:bg-yellow-400"
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
          </a>
        </div>

        <div>
          <Image
            className="w-full"
            src="https://cyberdom.qodeinteractive.com/wp-content/uploads/2021/08/h5-img-1-1536x825.jpg"
            alt="Tech Solutions"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection
