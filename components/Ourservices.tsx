'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '@/constants';

function OurServices() {

  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 },   // End fully visible at original position
  };

  // Ref to check if the container is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once

  return (
    <div className="max-w-6xl mx-auto p-6 font-montserrat" ref={ref}>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 p-4">
        <p className="text-blue-600 text-[9px] leading-3 mb-5 tracking-[3px] font-semibold font-syne captialize">WHAT WE'RE OFFERING</p>
          <h1 className="text-4xl font-bold mb-4">Dealing in All Professional IT Services</h1>
        </div>

        <div className="flex-1 flex justify-center items-center md:px-10">
          <p className="text-gray-500 text-xs text-center md:text-left">
            One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-left p-4 rounded-lg transition-shadow duration-300 ease-in-out"
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
  );
}

export default OurServices;
