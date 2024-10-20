"use client";
import CoreValuesSection from '@/components/CoreValues';
import OurTeam from '@/components/OurTeam';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function AboutPage() {
  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24 font-poppins max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        {/* About Us Section */}
        <section className="bg-[#FCF8F1] bg-opacity-30 py-8 font-poppins max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex flex-col justify-center items-center gap-5 text-center"
          >
            <button className="text-blue-700 bg-blue-100 px-7 py-2 rounded-full text-sm hover:bg-blue-200 transition">
              About Us
            </button>
            <h1 className="text-3xl md:text-5xl lg:text-7xl max-w-[900px] font-yantramanav font-bold text-[#212529] leading-snug">
              H-Dot: Crafting the Future of Technology
            </h1>
            <h5 className="text-gray-700 text-xs max-w-3xl leading-relaxed">
              At H-Dot, we redefine tech solutions, merging innovation with expertise to empower your business journey. Our commitment extends beyond delivering solutions; we cultivate partnerships that foster growth and success, ensuring you’re equipped for the future.
            </h5>
          </motion.div>
        </section>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="grid items-center grid-cols-1 gap-12"
        >
          <Image
            className="w-full rounded-lg shadow-lg"
            src="https://cyberdom.qodeinteractive.com/wp-content/uploads/2021/08/p1-img-1-1536x609.jpg"
            alt="Tech Solutions"
            width={800}
            height={600}
          />
        </motion.div>
      </motion.div>

      {/* Divider */}
      <hr className="my-12 border-gray-300" />

      {/* Story, Vision, and Mission Section */}
      <motion.div
        className="w-full flex flex-col gap-12 space-y-12 text-left mx-auto max-w-3xl"
      >
        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center"
        >
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
          At H-Dot, we are not just a tech company; we are a group of dreamers and innovators committed to transforming the way individuals and businesses engage with technology. Based in the heart of California, we recognize that the digital landscape can be daunting, filled with challenges and opportunities that can often feel out of reach.

We believe that technology should empower, not intimidate. Many talented individuals and businesses struggle to navigate the complexities of today’s digital world, often feeling overwhelmed by the rapid pace of change. This is where H-Dot makes a difference. Our mission is to demystify technology and provide accessible solutions that propel you forward.

H-Dot stands for hope and determination. We offer tailored services that encompass cloud optimization, data engineering, cybersecurity, and more—each designed to help you harness the power of technology to achieve your goals. Whether you’re an entrepreneur aiming to streamline your operations or a professional seeking to upskill, we’re here to support you every step of the way.

Our passion for technology is matched only by our dedication to our clients. We pride ourselves on providing comprehensive support, ensuring that your journey into the digital realm is not only successful but also fulfilling. We believe in fostering a collaborative environment where ideas flourish, and innovation thrives.

At H-Dot, we envision a future where technology serves as a bridge to your aspirations, turning challenges into opportunities and dreams into reality. Together, let’s navigate this exciting digital landscape and create a future where your potential is limitless. Join us in this journey, and let’s build something extraordinary together.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center"
        >
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            To empower businesses globally by delivering cutting-edge IT solutions that drive efficiency, scalability, and innovation.
          </p>
        </motion.div>

        {/* Divider Line Between Vision and Mission */}
        <hr className="w-1/3 mx-auto border-gray-400 my-2" />

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center"
        >
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            To provide innovative, high-quality, and efficient IT solutions that enhance business performance, drive growth, and promote global success.
          </p>
        </motion.div>
      </motion.div>

      <hr className="my-10" />
      
      {/* Core Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <CoreValuesSection />
      </motion.div>

      {/* Our Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <OurTeam />
      </motion.div>
    </section>
  );
}

export default AboutPage;
