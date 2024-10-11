import React from 'react'

function Portfolio() {
  return (
    <div className='min-h-screen bg-gray-50 font-poppins'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Intro */}
        <div className='flex flex-col justify-center items-center min-h-screen gap-5 text-center'>
          <button className='text-blue-700 bg-blue-100 px-7 py-2 rounded-full text-sm hover:bg-blue-200 transition'>
            Our Projects
          </button>
          <h1 className='text-3xl md:text-5xl  lg:text-7xl max-w-[1000px] font-yantramanav font-bold text-[#212529] leading-snug'>
            We are doing world-class projects in your way
          </h1>
          <h5 className='text-gray-700 text-base md:text-lg  max-w-3xl leading-relaxed'>
            Our projects are born from a passion for innovation that knows no bounds. We see challenges as opportunities to push the envelope and explore new frontiers.
          </h5>
        </div>

        <hr className='my-16' />

        {/* Portfolio Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
  {/* Column 1 */}
  <div className='relative rounded-lg flex flex-col gap-10'>
    <div className='relative group'>
      <img
        src='https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png'
        className='w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-out group-hover:scale-110'
        alt='E-commerce project image'
      />
      <h3 className='absolute top-4 left-4 text-white text-lg md:text-xl lg:text-2xl font-yantramanav font-bold bg-opacity-60 p-3 rounded transition-transform duration-300 ease-out group-hover:scale-110'>
        E-Commerce Platform Development
      </h3>
    </div>
    <div className='h-[140px] px-6 bg-[#1C1C1C] rounded-lg text-white flex flex-col justify-center'>
      <h3 className='text-lg md:text-xl font-bold font-yantramanav'>
        Woo Commerce
      </h3>
      <p className='text-sm text-gray-400'>
        An E-commerce site for a London-based company
      </p>
    </div>
  </div>

  {/* Column 2 */}
  <div className='relative rounded-lg flex flex-col gap-10'>
    <div className='relative group'>
      <img
        src='https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-2.png'
        className='w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-out group-hover:scale-110'
        alt='Electric brand marketing'
      />
      <h3 className='absolute top-4 left-4 text-black text-lg md:text-xl lg:text-2xl font-yantramanav font-bold bg-opacity-60 p-3 rounded transition-transform duration-300 ease-out group-hover:scale-110'>
        Electric Brand Marketing
      </h3>
    </div>
    <div className='h-[140px] px-6 bg-gray-300 rounded-lg flex flex-col justify-center'>
      <h3 className='text-lg md:text-xl font-bold text-black font-yantramanav'>
        Brand for Studio
      </h3>
      <p className='text-sm text-gray-600'>
        An E-commerce site for a London-based company
      </p>
    </div>
  </div>

  {/* Column 3 */}
  <div className='relative rounded-lg flex flex-col gap-10'>
    <div className='relative group'>
      <img
        src='https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-3.jpg'
        className='w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-out group-hover:scale-110'
        alt='Mobile app development in iOS'
      />
      <h3 className='absolute top-4 left-4 text-black text-lg md:text-xl lg:text-2xl font-yantramanav font-bold bg-opacity-60 p-3 rounded transition-transform duration-300 ease-out group-hover:scale-110'>
        Mobile App Development in iOS
      </h3>
    </div>
    <div className='h-[140px] px-6 bg-gray-200 rounded-lg flex flex-col justify-center'>
      <h3 className='text-lg md:text-xl font-bold text-black font-yantramanav'>
        Swift App Development
      </h3>
      <p className='text-sm text-gray-600'>
        An E-commerce site for a London-based company
      </p>
    </div>
  </div>

  {/* Column 4 */}
  <div className='relative rounded-lg flex flex-col gap-10'>
    <div className='relative group'>
      <img
        src='https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-4.png'
        className='w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-out group-hover:scale-110'
        alt='Get into virtual reality'
      />
      <h3 className='absolute top-4 left-4 text-white text-lg md:text-xl lg:text-2xl font-yantramanav font-bold bg-opacity-60 p-3 rounded transition-transform duration-300 ease-out group-hover:scale-110'>
        Get into Virtual Reality
      </h3>
    </div>
    <div className='h-[140px] px-6 bg-[#1C1C1C] rounded-lg text-white flex flex-col justify-center'>
      <h3 className='text-lg md:text-xl font-bold font-yantramanav'>
        VR Development
      </h3>
      <p className='text-sm text-gray-400'>
        An E-commerce site for a London-based company
      </p>
    </div>
  </div>
</div>



        <hr className='my-20 w-full' />
        {/* Portfolio Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
  {/* Column 1 */}
  <div className='relative rounded-lg flex flex-col gap-10'>
    <div className='relative group'>
      <img
        src='https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png'
        className='w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-out group-hover:scale-110'
        alt='E-commerce project image'
      />
      <h3 className='absolute top-4 left-4 text-white text-lg md:text-xl lg:text-2xl font-yantramanav font-bold bg-opacity-60 p-3 rounded transition-transform duration-300 ease-out group-hover:scale-110'>
        E-Commerce Platform Development
      </h3>
    </div>
    <div className='h-[140px] px-6 bg-[#1C1C1C] rounded-lg text-white flex flex-col justify-center'>
      <h3 className='text-lg md:text-xl font-bold font-yantramanav'>
        Woo Commerce
      </h3>
      <p className='text-sm text-gray-400'>
        An E-commerce site for a London-based company
      </p>
    </div>
  </div>

  {/* Column 2 */}
  <div className='relative rounded-lg flex flex-col gap-10'>
    <div className='relative group'>
      <img
        src='https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-2.png'
        className='w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-out group-hover:scale-110'
        alt='Electric brand marketing'
      />
      <h3 className='absolute top-4 left-4 text-black text-lg md:text-xl lg:text-2xl font-yantramanav font-bold bg-opacity-60 p-3 rounded transition-transform duration-300 ease-out group-hover:scale-110'>
        Electric Brand Marketing
      </h3>
    </div>
    <div className='h-[140px] px-6 bg-gray-300 rounded-lg flex flex-col justify-center'>
      <h3 className='text-lg md:text-xl font-bold text-black font-yantramanav'>
        Brand for Studio
      </h3>
      <p className='text-sm text-gray-600'>
        An E-commerce site for a London-based company
      </p>
    </div>
  </div>

  {/* Column 3 */}
  <div className='relative rounded-lg flex flex-col gap-10'>
    <div className='relative group'>
      <img
        src='https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-3.jpg'
        className='w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-out group-hover:scale-110'
        alt='Mobile app development in iOS'
      />
      <h3 className='absolute top-4 left-4 text-black text-lg md:text-xl lg:text-2xl font-yantramanav font-bold bg-opacity-60 p-3 rounded transition-transform duration-300 ease-out group-hover:scale-110'>
        Mobile App Development in iOS
      </h3>
    </div>
    <div className='h-[140px] px-6 bg-gray-200 rounded-lg flex flex-col justify-center'>
      <h3 className='text-lg md:text-xl font-bold text-black font-yantramanav'>
        Swift App Development
      </h3>
      <p className='text-sm text-gray-600'>
        An E-commerce site for a London-based company
      </p>
    </div>
  </div>

  {/* Column 4 */}
  <div className='relative rounded-lg flex flex-col gap-10'>
    <div className='relative group'>
      <img
        src='https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-4.png'
        className='w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-out group-hover:scale-110'
        alt='Get into virtual reality'
      />
      <h3 className='absolute top-4 left-4 text-white text-lg md:text-xl lg:text-2xl font-yantramanav font-bold bg-opacity-60 p-3 rounded transition-transform duration-300 ease-out group-hover:scale-110'>
        Get into Virtual Reality
      </h3>
    </div>
    <div className='h-[140px] px-6 bg-[#1C1C1C] rounded-lg text-white flex flex-col justify-center'>
      <h3 className='text-lg md:text-xl font-bold font-yantramanav'>
        VR Development
      </h3>
      <p className='text-sm text-gray-400'>
        An E-commerce site for a London-based company
      </p>
    </div>
  </div>
</div>

     
      </div>
    </div>
  )
}

export default Portfolio
