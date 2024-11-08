import React from 'react'

function StandOutSection() {
  return (
    <div className="bg-[#1C1C1C] font-yantramanav lg:py-40 min-h-screen flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 px-6 lg:px-16 py-16">
    {/* Left - Image */}
    <div className="flex-1 flex justify-center  lg:justify-start">
      <img
        src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
        alt="Service"
        className="w-full  object-cover rounded-xl shadow-lg"
      />
    </div>
  
    {/* Right - Content */}
    <div className="flex-1 text-white space-y-8 max-w-xl lg:max-w-lg">
      {/* Heading */}
      <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
        Why Our Services Stand Out
      </h1>
  
      {/* Paragraphs */}
      <p className="text-base leading-relaxed">
        We don’t believe in a one-size-fits-all approach. Our services are
        carefully tailored to meet your unique needs, ensuring that you achieve
        your goals with precision and excellence.
      </p>
      <p className="text-base  leading-relaxed">
        Our commitment extends beyond the project itself. We are dedicated to
        delivering value that lasts, focusing on long-term benefits that will
        help you grow and succeed over time.
      </p>
  
      {/* Icon Section */}
    
    </div>
  </div>
  )
}

export default StandOutSection
