'use client';
import React from "react";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee"; // Ensure this path is correct

const logos = [
  { src: "/logos/1.png", alt: "Adidas" },
  { src: "/logos/2.png", alt: "Adidas" },
  { src: "/logos/3.png", alt: "Adidas" },
  { src: "/logos/4.png", alt: "Adidas" },
  { src: "/logos/5.png", alt: "Adidas" },
  { src: "/logos/6.png", alt: "Adidas" },
  { src: "/logos/7.png", alt: "Adidas" },
  { src: "/logos/8.png", alt: "Adidas" },
  { src: "/logos/9.png", alt: "Adidas" },
  { src: "/logos/10.png", alt: "Adidas" },
  { src: "/logos/11.png", alt: "Adidas" },
  { src: "/logos/12.png", alt: "Adidas" },
  { src: "/logos/13.png", alt: "Adidas" },
  { src: "/logos/14.png", alt: "Adidas" },
  { src: "/logos/15.png", alt: "Adidas" },
];

const MarqueeLogo = () => {
  return (
    <div className="relative  flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white w-[200px] flex justify-center items-center p-4 shadow-lg rounded-lg"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>

      {/* Gradient effects for visual enhancement */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeLogo;
