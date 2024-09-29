import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Reusable ServiceCard Component with Animation
const ServiceCard = ({ title, description, imageUrl, reverse = false }: any) => {
  // Ref and inView for triggering animation on scroll
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animates only once when it first comes into view

  return (
    <motion.div
      ref={ref}
      className={`flex ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col items-start md:items-center justify-between gap-8`}
      initial={{ opacity: 0, y: 50 }} // Start invisible and from below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and normal position
      transition={{ duration: 0.6, ease: 'easeOut' }} // Animation timing
    >
      <div className="md:px-10 flex-1">
        <p className="text-sm font-montserrat tracking-wider text-black uppercase">• Hello THERE</p>
        <h1 className="text-4xl mt-3 font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div className="w-full relative flex-1">
        <Image src={imageUrl} alt={`${title} image`} width={600} height={600} className="rounded-lg object-cover" />
      </div>
    </motion.div>
  );
}

function ServicesTech() {
  return (
    <div className="flex flex-col gap-10">
      <ServiceCard
        title="DevOps"
        description="We offer a diverse range of cutting-edge technology services, covering every domain within the tech industry. Our expertise spans the latest innovations, ensuring that we deliver tailored solutions to meet your unique business needs."
        imageUrl="https://nickjanetakis.com/assets/blog/cards/what-is-devops.jpg"
      />
      <ServiceCard
        title="Certified Cloud Experts"
        description="Our cloud experts deliver scalable, secure cloud solutions to power your business. From cloud migration to multi-cloud management, we ensure a seamless transition and optimal performance."
        imageUrl="https://cdn-icons-png.freepik.com/512/4215/4215831.png"
        reverse={true}
      />
      <ServiceCard
        title="Full Stack Development"
        description="We build end-to-end web and mobile applications using the latest technologies. Our full stack development services ensure robust, scalable, and secure solutions tailored to your needs."
        imageUrl="https://potomac.edu/wp-content/uploads/2020/12/benefits-of-coding-e1606911064541.jpg"
      />
      <ServiceCard
        title="Data Engineering & Analytics"
        description="Leverage the power of data to gain valuable insights and drive business growth. We provide data engineering and analytics services to help you store, process, and analyze data effectively."
        imageUrl="https://www.theforage.com/blog/wp-content/uploads/2023/02/what-is-a-data-engineer.jpg"
        reverse={true}
      />
      <ServiceCard
        title="AI Solutions & Blockchain Development"
        description="Unlock the potential of AI and blockchain technologies. From AI-driven automation to decentralized solutions, we offer cutting-edge expertise in developing transformative business solutions."
        imageUrl="https://i0.wp.com/swisscognitive.ch/wp-content/uploads/2023/11/The-Synergy-of-AI-Blockchain-What-are-the-Use-Cases.png?fit=960%2C540&ssl=1"
      />
    </div>
  );
}

export default ServicesTech;
