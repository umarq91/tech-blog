import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ExploreProjects() {
  const projects = [
    {
      title: 'Seamless Lotus Notes Migration',
      description:
        'Transformed legacy workflows to SharePoint, enhancing efficiency. Achieved a 30% productivity boost with integrated .NET solutions.',
      imageUrl: '/1.png',
    },
    {
      title: 'Intelligent Equipment Request Modernization',
      description:
        'Developed a responsive web application for equipment requests. Improved operational workflows through Angular and .NET integration.',
      imageUrl: '/2.png',
    },
    {
      title: ' Robust Real Estate Lifecycle Management',
      description:
        "Modernized real estate bidding through cloud migration. Enabled high availability and scalability with Azure's serverless architecture.",
      imageUrl: '/3.png',
    },
    {
      title: ' Smart Farming with AI and IoT',
      description:
        'Implemented intelligent irrigation for optimized crop management. Enhanced yields and reduced labor through real-time data insights.',
      imageUrl: '/4.png',
    },
  ];

  return (
    <div className='min-h-screen font-yantramanav max-w-6xl mx-auto px-6 py-12'>
      <h1 className='text-center text-2xl text-gray-800 font-bold md:text-5xl mb-10'>
        Explore Some of Our Projects
      </h1>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 place-items-center'>
        {projects.map((project, index) => (
          <Link key={index} href="/portfolio">
          <div
            key={index}
            className='group relative  w-full h-[500px] bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer'
          >
            <div className='h-[65%] relative'>
              {/* Image with overlay */}
              <Image
                alt={project.title}
                src={project.imageUrl}
                layout='fill'
                className='rounded-t-lg'
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              {/* Dark overlay by default, disappears on hover */}
              <div className='absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-all duration-300'></div>
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300'>
                {project.title}
              </h3>
              <p className='text-gray-600 text-sm'>{project.description}</p>
            </div>
          </div>
            </Link>
        ))}
      </div>
    </div>
  );
}

export default ExploreProjects;
