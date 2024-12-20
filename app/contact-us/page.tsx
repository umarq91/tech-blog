'use client';
import React, { useState } from 'react';

function Contact() {
  const [tooltip, setTooltip] = useState(0);

  // Updated pinPoints with your provided locations
  const pinPoints = [
    { id: 1, top: '30%', left: '45%', address: 'Vancouver, BC, Canada' },
    { id: 2, top: '60%', left: '70%', address: '3795 Plantation Centre, Corona, CA 92881' },
    { id: 3, top: '20%', left: '30%', address: 'Islamabad, 44000, Pakistan' },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto font-yantramanav mb-20 lg:p-20">
        <div className="flex flex-col justify-center items-center  gap-5 text-center">
          <button className="text-blue-700 bg-blue-100 px-7 py-2 rounded-full text-sm hover:bg-blue-200 transition">
            Contact us
          </button>
          <h1 className="text-3xl md:text-5xl lg:text-7xl max-w-[900px] font-yantramanav font-bold text-[#212529] leading-snug">
            We are always open to talk and connect
          </h1>
          <h5 className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            Our teams and offices are located across the globe to serve your needs.
          </h5>
        </div>
      </div>

      {/* Section 2: Map with Pinpoints */}
      <div className="relative max-w-6xl mx-auto">
        <button className="absolute top-0 right-0 bg-blue-100 font-semibold text-xs max-w-[140px] hover:bg-blue-800 hover:text-white text-blue-700 py-2 px-6 rounded-2xl mr-6 mt-6">
          Contact us
        </button>

        <div className="relative flex justify-center">
          {/* Map Image */}
          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map.svg"
            className="w-[70%]"
            alt="Map"
          />

          {/* Pinpoints */}
          {pinPoints.map((pin) => (
            <div
              key={pin.id}
              className="absolute cursor-pointer"
              style={{ top: pin.top, left: pin.left }}
              onMouseEnter={() => setTooltip(pin?.id)}
              onMouseLeave={() => setTooltip(0)}
            >
              {/* Outer Circle */}
              <div className="relative flex justify-center items-center">
                <div className="w-6 h-6 bg-blue-100 rounded-full opacity-40 absolute"></div>
                {/* Inner Circle */}
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              </div>

              {/* Tooltip */}
              {tooltip === pin.id && (
                <div className="absolute -top-10 left-0 w-32 p-2 bg-black text-white text-xs rounded shadow-lg">
                  {pin.address}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Contact Form */}

      <div className="bg-gray-100 max-w-7xl mx-auto py-12">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Support Card */}
          <div className="bg-white py-10 rounded-lg p-8 flex flex-col justify-center items-center text-center gap-4">
            {/* Microphone Icon */}
            <div className="relative flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-blue-300 rounded-full opacity-40 absolute"></div>
              <div className="text-[#0A7DD9] z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 1.5c-1.96 0-3.5 1.54-3.5 3.5v5.5c0 1.96 1.54 3.5 3.5 3.5s3.5-1.54 3.5-3.5V5c0-1.96-1.54-3.5-3.5-3.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5V13a7.5 7.5 0 01-15 0v-2.5"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">Support</h1>
            <p className="text-sm text-gray-600">Contact our fast support team</p>
            <h5 className="text-[#0A7DD9] font-medium">admin@h-dot.tech</h5>
            <h5 className="text-[#0A7DD9] font-medium">+1 (949) 247-9542</h5>
          </div>

          {/* Phone Card */}
          <div className="bg-white py-10 rounded-lg p-8 flex flex-col justify-center items-center text-center gap-4">
            <div className="relative flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full opacity-40 absolute"></div>
              <div className="text-blue-700 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25a.75.75 0 00-.75-.75H9A3.75 3.75 0 005.25 8.25v7.5A3.75 3.75 0 009 19.5h6.75a.75.75 0 00.75-.75V15"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.5 12.25l3.75 3.75m-3.75 0L21.25 12"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">Phone</h1>
            <p className="text-sm text-gray-600">Reach us via phone</p>
            <h5 className="text-[#0A7DD9] font-medium">+1 (949) 247-9542</h5>
          </div>
        </div>
      </div>

      {/* Section 4: Locations */}
      <div className="bg-[#1C1C1C] gap-10  flex flex-col md:flex-row text-white p-5 md:p-20">
        {/* Left Section */}
        <div className="flex-1 max-w-lg mx-auto justify-center flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-opacity-5 border-gray-600 mb-8 md:mb-0 md:pr-10">
          <div className="max-w-lg">
            <p className="text-blue-600 text-[10px] leading-3 mb-4 tracking-[3px] font-semibold font-syne uppercase">
              Location
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Global Presence, Local Expertise
            </h1>
            <p className="text-xs text-gray-400">
          Explore our key locations worldwide, strategically positioned to deliver cutting-edge cloud solutions and IT services to businesses across the globe. No matter where you are, H-Dot is here to support your growth with local insights and global reach.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 md:pl-10 text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="flex justify-center items-center w-1/4 h-14 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl">
                #1
              </div>
              <div className="flex gap-3 flex-col flex-1">
                <h2 className="text-lg">Vancouver, BC, Canada</h2>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="flex justify-center items-center w-1/4 h-14 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl">
                #2
              </div>
              <div className="flex gap-3 flex-col flex-1">
                <h2 className="text-lg">Islamabad, 44000, Pakistan</h2>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="flex justify-center items-center w-1/4 h-14 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl">
                #3
              </div>
              <div className="flex gap-3 flex-col flex-1">
                <h2 className="text-lg">California, USA</h2>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="flex justify-center items-center w-1/4 h-14 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl">
                #4
              </div>
              <div className="flex gap-3 flex-col flex-1">
                <h2 className="text-lg">New York, NY, USA</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
