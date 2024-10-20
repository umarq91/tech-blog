'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const projects = [
  {
    id: 1,
    title: 'Lotus Notes Migration',
    subtitle: 'Migrated workflows to SharePoint for enhanced efficiency',
    description: "A state-of-the-art web application was built with Angular on the front end and a .NET Core API to power business logic, creating a smooth and adaptable experience across devices—whether desktop, tablet, or mobile. Integrated with SQL Server for data management, the solution employed RabbitMQ for efficient, asynchronous queue processing. The result was a highly responsive and scalable system, designed to handle high volumes of equipment requests efficiently, regardless of the device, while significantly improving performance and operational workflows.",
    imageUrl: '/pic1.png',
    modalImg: '/oneL.png',
    textColor: 'text-white',
    bgColor: 'bg-[#1C1C1C]',
  },
  {
    id: 2,
    title: 'Equipment Request Modernization',
    subtitle: 'Developed a responsive app for equipment requests.',
    description: 'A comprehensive brand marketing platform for an electric vehicle company, integrating social media, analytics, and e-commerce solutions.',
    imageUrl: '/twoT.png',
    modalImg: '/twoL.png', 
    textColor: 'text-black',
    bgColor: 'bg-gray-300',
  },
  {
    id: 3,
    title: 'Real Estate Bidding and Lifecycle',
    subtitle: 'Modernized real estate platform for cloud scalability',
    description: 'A powerful real estate bidding and lifecycle management platform was modernized and optimized for cloud deployment. By transitioning from a monolithic on-premise application to Microsoft Azure, the platform embraced a serverless architecture that leverages Azure App Services, Redis Cache, and SQL Server. This approach significantly reduced response times and maintenance overhead while incorporating disaster recovery solutions to ensure business continuity through multi-region deployment. The final product delivered high availability, scalability, and a future-proof infrastructure for real estate operations.',
    imageUrl: '/threeT.png',
    modalImg: '/threeL.png',
    textColor: 'text-black',
    bgColor: 'bg-gray-200',
  },
  {
    id: 4,
    title: 'Escrow and Loan Analysis Migration',
    subtitle: 'Built a pipeline for financial data analysis.',
    description: 'This project involved designing an end-to-end data pipeline for extracting, transforming, and analyzing data from diverse financial and real estate sources like LoanDepot, CoreLogic, MLS, and Zillow. Leveraging Power BI for visualization, the system provided stakeholders with on-demand, scheduled, and interactive reports to enable data-driven decision-making. This seamless integration enhanced the accuracy of financial and loan analysis, offering insights that boosted business intelligence and streamlined financial reporting.',
    imageUrl: '/fourT.png',
    modalImg: '/fourL.png', // Add the modal image URL
    textColor: 'text-white',
    bgColor: 'bg-[#1C1C1C]',
  },
  {
    id: 5,
    title: 'Modernize with EKS',
    subtitle: 'Implemented microservices for automated workflows',
    description: 'An event-driven microservices architecture was designed using AWS EKS to streamline the intake and processing of customer information, coupled with automated document generation for a variety of agreements. Infrastructure was deployed via Terraform, utilizing PostgreSQL for data management and S3 for document storage. The system integrated queuing to ensure smooth, reliable handling of customer data and tasks, delivering a scalable, efficient, and high-performance solution for managing customer workflows with minimal manual intervention.',
    imageUrl: '/five.png',
    modalImg: '/fiveL.png', // Add the modal image URL
    textColor: 'text-white',
    bgColor: 'bg-[#1C1C1C]',
  },
  {
    id: 6,
    title: 'Global expansion using AWS',
    subtitle: 'Scalable cloud solution for global operations.',
    description: 'A comprehensive cloud solution was implemented to support the global expansion of operations, specifically addressing data compliance challenges in regions like China. AWS services, including S3, Event Hub, ECS Fargate, and DynamoDB, were strategically deployed to ensure secure, scalable, and compliant infrastructure, with a focus on reliable content delivery through CloudFront. This architecture enabled the business to expand into new markets seamlessly, while adhering to complex regional regulations, particularly in data-sensitive areas like China.',
    imageUrl: '/sixT.png',
    modalImg: '/sixL.png', // Add the modal image URL
    textColor: 'text-black',
    bgColor: 'bg-white',
  },
  {
    id: 7,
    title: 'Farmland Analysis and Intelligent Irrigation',
    subtitle: 'Smart farming solution with machine learning.',
    description: "Harnessing the power of AWS services such as SageMaker, IoT, and Firehose, a smart farming solution was built to monitor crop health through real-time agricultural footage. Machine learning models analyzed this data, identifying areas that required additional water or pesticide application. The insights were directly communicated to IoT-enabled devices, such as automated spray drones and sprinklers, optimizing resource management. The system's precision improved crop yields and significantly reduced manual labor, revolutionizing modern farming practices through the intelligent use of cloud and AI technologies.",
    imageUrl: '/sixT.png',
    modalImg: '/sevenL.png', // Add the modal image URL
    textColor: 'text-black',
    bgColor: 'bg-white',
  },
  {
    id: 8,
    title: 'Resilience for Financial Services',
    subtitle: 'Multi-cloud architecture for high availability.',
    description: 'Developed and implemented a robust multi-region, multi-cloud architecture using both AWS and GCP to ensure high availability and disaster recovery. The solution featured auto-scaling and multi-zone availability to optimize performance during traffic spikes. A multi-region setup was established with a Recovery Point Objective (RPO) of 30 minutes and a Recovery Time Objective (RTO) of 5 minutes. AWS and GCP Backup services were integrated for comprehensive data protection. Additionally, a secure site-to-site VPN connection between AWS and GCP ensured reliable communication and data replication, providing a resilient, scalable infrastructure with seamless uptime and minimal service disruption.',
    imageUrl: '/eightT.png',
    modalImg: '/eightL.png', // Add the modal image URL
    textColor: 'text-white',
    bgColor: 'bg-[#1C1C1C]',
  },
];
function ProjectCard({ project, onClick }: any) {
  return (
    <div className="relative rounded-lg flex flex-col gap-10 cursor-pointer" onClick={() => onClick(project)}>
      <div className="relative group">
        <img
          src={project.imageUrl}
          className="w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-out group-hover:scale-110"
          alt={project.title}
        />
        <h3
          className={`absolute top-4 left-4 ${project.textColor} text-lg md:text-xl lg:text-2xl font-yantramanav font-bold bg-opacity-60 p-3 rounded transition-transform duration-300 ease-out group-hover:scale-110`}
        >
          {project.title}
        </h3>
      </div>
      <div className={`h-[140px] px-6 ${project.bgColor} rounded-lg flex flex-col justify-center`}>
        <h3 className={`text-md font-bold font-yantramanav ${project.textColor}`}>{project.subtitle}</h3>
        <p className={`text-sm line-clamp-2 ${project.textColor === 'text-white' ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>
      </div>
    </div>
  );
}



function Modal({ isOpen, onClose, project }: any) {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"
            variants={modalVariants}
          >
            <img
              src={project.modalImg}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-6">{project.description}</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Intro */}
        <div className="flex flex-col justify-center items-center min-h-screen gap-5 text-center">
          <button className="text-blue-700 bg-blue-100 px-7 py-2 rounded-full text-sm hover:bg-blue-200 transition">
            Portfolio
          </button>
          <h1 className="text-3xl md:text-5xl max-w-[1000px] font-yantramanav font-bold text-[#212529] leading-snug">
            Turning Challenges to Success through Proven Case Studies and Innovative Solutions
          </h1>
          <h5 className="text-gray-700 text-xs max-w-3xl leading-relaxed">
            At H-Dot, we don't just deliver technology solutions; we empower businesses to conquer challenges and seize opportunities. Our case studies illustrate our expertise in crafting tailored solutions that drive real results. Dive into our success stories and discover how we can elevate your business in the digital landscape.
          </h5>
        </div>

        <hr className="my-16" />

        {/* Portfolio Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>

        <Modal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}

export default Portfolio;