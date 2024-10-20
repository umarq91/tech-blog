import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Reusable ServiceCard Component with Animation
const ServiceCard = ({ title, description, imageUrl,intro, reverse = false }: any) => {
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
        <p className="text-sm font-montserrat tracking-wider text-black uppercase">•{intro}</p>
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
      intro={"Collaborative & Streamlined"}
        title="DevOps"
        description="H-Dot specializes in DevOps practices that enhance collaboration between development and operations teams. Our solutions streamline workflows, automate processes, and accelerate delivery times, ensuring faster and more reliable deployments."
        imageUrl="https://nickjanetakis.com/assets/blog/cards/what-is-devops.jpg"
      />
      <ServiceCard
      intro={"Flexible & Scalable"}
        title="Cloud Solutions"
        description="We provide comprehensive cloud consulting, migration, and management services to optimize your cloud infrastructure. Our solutions ensure scalability, security, and cost-effectiveness, enabling your business to thrive in a digital environment."
        imageUrl="https://cdn-icons-png.freepik.com/512/4215/4215831.png"
        reverse={true}
      />
      <ServiceCard
      intro={"Transformative & Intelligent"}
        title="AI Solutions"
        description="Leverage the potential of artificial intelligence with our tailored AI solutions. We help you integrate AI technologies to improve efficiency, automate tasks, and enhance customer experiences across your organization."
        imageUrl="https://potomac.edu/wp-content/uploads/2020/12/benefits-of-coding-e1606911064541.jpg"
      />
      <ServiceCard
      intro={"Insightful & Innovative"}
        title="Data Engineering"
        description="We harness the power of data to provide actionable insights. Our data engineering services include data extraction, transformation, and visualization, enabling your business to make informed decisions based on accurate information."
        imageUrl="https://www.theforage.com/blog/wp-content/uploads/2023/02/what-is-a-data-engineer.jpg"
        reverse={true}
      />
      <ServiceCard
      intro={"Secure & Decentralized"}
        title="Blockchain Technology"
        description="H-Dot offers blockchain consulting and implementation services to enhance security and transparency in transactions. Our expertise helps businesses explore decentralized solutions that align with their operational goals."
        imageUrl="https://i0.wp.com/swisscognitive.ch/wp-content/uploads/2023/11/The-Synergy-of-AI-Blockchain-What-are-the-Use-Cases.png?fit=960%2C540&ssl=1"
      />
           <ServiceCard
      intro={"Robust & Proactive"}
        title="Cybersecurity"
        reverse={true}
        description="Our cybersecurity services protect your organization from evolving threats. We assess vulnerabilities, implement robust security measures, and ensure compliance with industry standards, safeguarding your assets and data."
        imageUrl="https://focus.namirial.com/en/wp-content/uploads/sites/4/2023/06/ai-in-cybersecurity.jpeg"
      />
    </div>
  );
}

export default ServicesTech;
