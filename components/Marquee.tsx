'use client'
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/Adidas.png", alt: "Adidas" },
  { src: "https://diginsights.com/wp-content/uploads/2024/03/starbsloh.png.jpeg", alt: "Starbucks" },
  { src: "https://www.designrush.com/uploads/users/customer-12/image_1532370530_PUupRl8PHyZvMCs2KRMuskJdYeyqW3IeacT72WYE.png", alt: "Google" },
  { src: "https://cdn.mos.cms.futurecdn.net/LBqfDL2QXnvGZGYq3V6r5C-320-80.jpg", alt: "Nike" },
  { src: "https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609375996518-DZU53FYNB3FMBYB1JHG6/HP-logo+2021.jpg", alt: "HP" },
];

const MarqueeLogo = () => {
  const animation = {
    animate: {
      x: ["100%", "-100%"], // Move from right (100%) to left (-100%)
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          repeatType: "loop", // Loop the animation
          duration: 20, // Adjust this for smoothness and speed (set to a larger value for continuous motion)
          ease: "linear", // Linear ease for constant speed
        },
      },
    },
  };

  return (
    <div className="overflow-hidden bg-gray-50 py-8"> {/* Container with padding */}
      <motion.div
        className="flex space-x-12 items-center"
        {...animation}
      >
        {/* Repeat logos to create continuous scrolling effect */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-24 w-auto" 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeLogo;
