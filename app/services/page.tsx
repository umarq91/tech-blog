"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from 'framer-motion'
import { IconCloudComponent } from "@/components/magicui/IconCloud";
import StickyScrollComponent from "@/components/StickyScroll";
import ServicesTech from "@/components/ServicesTech";
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export default function Services() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
  };
  
  return (
    <div className="px-10 font-montserrat  pt-10">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-8 font-poppins max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
          viewport={{ once: true, amount: 0.5 }} // Adjust when the animation should start (50% in view)
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Introducing Section */}
          <div className="grid  items-center grid-cols-1 gap-12 text-center mb-16">
            <div>
              <p className="text-sm font-montserrat tracking-wider text-black uppercase">
                • Introducing
              </p>
              <h1 className="text-4xl mt-4 font-semibold font-montserrat text-black lg:text-6xl">
                What We do
              </h1>
            </div>
          </div>
        </motion.div>
      </section>

{/* Section 2 */}
<motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          className="md:px-10"
        >

          <p className="text-sm font-montserrat tracking-wider text-black uppercase">
            • Hello THERE
          </p>
          <h1 className="text-4xl mt-3 font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            We offer a diverse range of cutting-edge technology services, covering every domain within the tech industry. Our expertise spans the latest innovations, ensuring that we deliver tailored solutions to meet your unique business needs.
          </p>
               </motion.div>

        <IconCloudComponent />
        </motion.div>

      <hr className="my-12 border-gray-300" />
      <ServicesTech/>
      <hr className="my-12 border-gray-300" />

    </div>
  );
}
