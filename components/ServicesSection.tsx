'use client'
import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';

function ServicesSection({ item, index }: any) {
  // Ref to check if the container is in view
  console.log(item);
  
  const ref = useRef(null);
  
  // Use useInView hook to detect when the section is visible
  const isInView = useInView(ref, { once: true }); // Trigger only once when in view

  // Define the animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 }, // End fully visible at original position
  };

  return (
    <motion.div
      ref={ref} // Apply ref to the motion.div for in-view detection
      key={index}
      className="flex bg-white text-black h-[250px] gap-3 justify-center flex-col items-left p-4 rounded-lg transition-shadow duration-300 ease-in-out"
      initial="hidden" // Start from hidden
      animate={isInView ? 'visible' : 'hidden'} // Animate based on in-view status
      variants={cardVariants} // Use the defined variants
      transition={{ duration: 0.5, delay: index * 0.1 }} // Add stagger effect
    >
      <img src={item?.logo} alt={item?.title} className="h-10 w-10 mb-4 object-contain" />
      <h3 className="text-lg font-semibold mb-2">{item?.title}</h3>
      <p className="text-gray-600 text-xs">{item?.description}</p>
    </motion.div>
  );
}

export default ServicesSection;
