import React from "react";

function StandOutSection({
  iconSectionTrigger,
  title,
  paragraphsTrigger,
}: {
  iconSectionTrigger: any;
  title: string;
  paragraphsTrigger: any;
}) {
  return (
    <div className="bg-[#1C1C1C] font-yantramanav lg:py-20 min-h-screen flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 px-6 lg:px-16 py-16">
      {/* Left - Image */}
      <div className="flex-1 flex justify-center  lg:justify-start">
        <img
          src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
          alt="Service"
          className="w-full  object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Right - Content */}
      <div className="flex-1 text-white space-y-4 max-w-xl lg:max-w-lg">
        {/* Heading */}
        <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
       {title}
        </h1>

        {/* Paragraphs */}
      {paragraphsTrigger}

        {/* Icon Section */}
      {iconSectionTrigger}
      </div>
    </div>
  );
}

export default StandOutSection;
