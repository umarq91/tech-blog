import Image from 'next/image';
import React from 'react';

function ExploreProjects() {
  const projects = [
    {
      title: 'Empowering Agency Project',
      description:
        'XQUIC revolutionized the hospitality industry with AI-driven reconciliation and seamless integration, saving hotels time and money while automating 95% of revenue management processes.',
      imageUrl: 'https://cdn.prod.website-files.com/650311fc2ebc7fe34237a592/651daebda70cd59365ad95a3_2-components.webp',
    },
    {
      title: 'Innovative E-Commerce Platform',
      description:
        'Revolutionizing online shopping with an AI-powered recommendation engine and personalized shopping experience, improving conversion rates by 25% and customer retention by 40%.',
      imageUrl: 'https://simpauldesign.com/wp-content/uploads/2019/02/sky.garden.jpg',
    },
    {
      title: 'Healthcare System Modernization',
      description:
        'Transforming healthcare systems with cutting-edge cloud technology and telemedicine solutions that improved patient engagement and reduced operational costs by 30%.',
      imageUrl: 'https://www.wordstream.com/wp-content/uploads/2022/12/healthcare-website-design-examples-brightside.png',
    },
    {
      title: 'Sustainable Energy Dashboard',
      description:
        'Providing a user-friendly dashboard for monitoring renewable energy sources, helping users track energy consumption, savings, and reduce carbon footprint by 15%.',
      imageUrl: 'https://cdn-ilaekap.nitrocdn.com/PHtGhqpMISHQletWXvpNyCuhTmLlyfvs/assets/images/optimized/rev-c51971d/acuvate.com/wp-content/uploads/2023/12/Green-Energy-10-1024x531.jpg',
    },
  ];

  return (
    <div className='min-h-screen font-poppins max-w-6xl mx-auto px-6 py-12'>
      <h1 className='text-center text-2xl text-gray-800 font-bold md:text-5xl mb-10'>
        Explore Some of Our Projects
      </h1>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 place-items-center'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='group relative  w-full h-[500px] bg-white hover:shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer'
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
        ))}
      </div>
    </div>
  );
}

export default ExploreProjects;
