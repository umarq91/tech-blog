"use client";
import CoreValuesSection from '@/components/CoreValues';
import { IconCloudComponent } from '@/components/magicui/IconCloud';
import TechStack from '@/components/TechStack';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function AboutPage() {
  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24 font-poppins max-w-6xl mx-auto">
      <motion.div
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
       viewport={{ once: true, amount: 0.5 }} // Adjust when the animation should start (50% in view)
       transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Introducing Section */}
        <div className="grid items-center grid-cols-1 gap-12 text-center mb-16">
          <div>
            <p className="text-sm font-montserrat tracking-wider text-black uppercase">
              • Introducing
            </p>
            <h1 className="text-4xl mt-4 font-semibold font-montserrat text-black xl:text-5xl">
              About Our Company
            </h1>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid items-center grid-cols-1  gap-12">
          <div>
            <Image
              className="w-full rounded-lg shadow-lg"
              src="https://cyberdom.qodeinteractive.com/wp-content/uploads/2021/08/p1-img-1-1536x609.jpg"
              alt="Tech Solutions"
              width={800}
              height={600}
            />
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <hr className="my-12 border-gray-300" />

      {/* Vision and Mission Section */}
      <motion.div
        className="w-full flex flex-col gap-12 space-y-12 text-left mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
        viewport={{ once: true, amount: 0.5 }} // Adjust when the animation should start (50% in view)
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Vision */}
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            To empower businesses globally by delivering cutting-edge IT solutions that drive efficiency, scalability, and innovation.
          </p>
        </div>

        {/* Divider Line Between Vision and Mission */}
        <hr className="w-1/3 mx-auto border-gray-400 my-2" />

        {/* Mission */}
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            To provide innovative, high-quality, and efficient IT solutions that enhance business performance, drive growth, and promote global success.
          </p>
        </div>
      </motion.div>
      <hr className='my-10'/>
    <CoreValuesSection/>
    </section>
  );
}

export default AboutPage;
