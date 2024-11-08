"use client";
import MarqueeLogo from "@/components/Marquee";
import OurServices from "@/components/Ourservices";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Team from "./(components)/Team";
import ServicesSection from "@/components/ServicesSection";
import StandOutSection from "@/components/StandOutSection";
import { services } from "@/constants";
function Comapny() {
  return (
    <div>
      {/* Section 1 */}
      <div className="max-w-6xl mx-auto font-yantramanav">
        <div className="flex flex-col justify-center items-center min-h-screen gap-5 text-center">
          <button className="text-blue-700 bg-blue-100 px-7 py-2 rounded-full text-sm hover:bg-blue-200 transition">
            Company
          </button>
          <h1 className="text-3xl md:text-5xl  lg:text-7xl max-w-[900px] font-yantramanav font-bold text-[#212529] leading-snug">
            Empowering Your Business for a Digital-First World
          </h1>
          <h5 className="text-gray-700 text-base md:text-lg  max-w-3xl leading-relaxed">
            At H-Dot, we deliver cutting-edge technology solutions that evolve
            with you. Our commitment extends beyond project delivery; we drive
            transformation that lasts.
          </h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10  place-items-center">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">
              500+
            </h1>
            <h5 className="text-lg sm:text-xl font-medium">Projects</h5>
            <p className="text-gray-500 max-w-xs">
              successfully completed, spanning across industries and continents.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">
              99%
            </h1>
            <h5 className="text-lg sm:text-xl font-medium">
              Client satisfaction
            </h5>
            <p className="text-gray-500 max-w-xs">
              rate which reflects our commitment to excellence
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">
              15k+
            </h1>
            <h5 className="text-lg sm:text-xl font-medium">Legal Customers</h5>
            <p className="text-gray-500 max-w-xs">
              {" "}
              who trust H-Dot for their technology needs and digital
              transformations.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h1 className="text-[#1351D8] font-semibold font-poppins text-4xl sm:text-5xl">
              Since 2019
            </h1>
            <h5 className="text-lg sm:text-xl font-medium">
              Established as a pioneer
            </h5>
            <p className="text-gray-500 max-w-xs">
              in tech innovation, we continue to lead with vision and expertise.
            </p>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <MarqueeLogo />
      {/* Extra section  */}

    <StandOutSection 
    title="Crafted for Impact"
    paragraphsTrigger={ 
      <>
         <p className="text-base leading-relaxed">
            Our approach isn’t about quick fixes. It’s about precision,
            innovation, and delivering real results that make a lasting
            difference. With H-Dot, you don’t just get a service—you get a
            solution that grows with you, setting you up for long-term success.
          </p>
          <p className="text-base leading-relaxed">
            We’re passionate about exceeding expectations, with a relentless
            focus on bringing you value that endures beyond the project at hand.
            When you work with us, you’re not just a client—you’re a partner,
            and we’re dedicated to helping you thrive.
          </p>
      </>
    }
    iconSectionTrigger={
      <>
       <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-blue-500 text-2xl">✔</div>
              <h5 className="text-md">
                {" "}
                <span className="font-bold">Bespoke Solutions </span>: Unique,
                purpose-built services to match your exact needs.
              </h5>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-blue-500 text-2xl">✔</div>
              <h5 className="text-md">
                {" "}
                <span className="font-bold">Rapid Response: </span> Ready to
                assist when you need us most, anytime, anywhere.
              </h5>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-blue-500 text-2xl">✔</div>
              <h5 className="text-md">
                {" "}
                <span className="font-bold">Lasting Results: </span> Solutions
                designed to adapt and sustain your growth over time.
              </h5>
            </div>
          </div>

      </>
    }
    />

  

      {/* section 3 */}
      <div className="bg-[#1C1C1C] mt-3 min-h-screen text-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto p-6 md:p-12 font-montserrat ">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 p-4">
              <p className="text-blue-600 text-[9px]  leading-3 mb-5 tracking-[3px] font-semibold font-syne captialize">
                WHAT WE'RE OFFERING
              </p>
              <h1 className="text-4xl font-bold mb-4">
                Dealing in All Professional IT Services
              </h1>
            </div>

            <div className="flex-1 flex justify-center items-center md:px-10">
              <p className="text-white text-xs text-center md:text-left">
                One fundamental aspect of IT services is infrastructure
                management. This involves the design, implementation, and
                maintenance of the hardware, software, networks, and servers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {services.map((item, index) => (
              <ServicesSection item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="max-w-7xl  mx-auto  p-6 md:p-12 font-montserrat ">
        <div className="bg-blue-50 py-10">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 p-4">
              <p className="text-blue-600 text-[9px]  leading-3 mb-5 tracking-[3px] font-semibold font-syne captialize">
                WHAT WE'RE OFFERING
              </p>
              <h1 className="text-4xl font-bold mb-4">
                Dealing in All Professional IT Services
              </h1>
            </div>

            <div className="flex-1 flex justify-end items-end md:px-10">
              <button className="w-[70%] bg-blue-700 text-white py-3 px-6  rounded-xl">
                {" "}
                Book an appointment with experts{" "}
              </button>
            </div>
          </div>
        </div>
        {/* Team */}
        <Team />
      </div>
      <hr className="my-20" />
      {/* section 5 */}
    </div>
  );
}

export default Comapny;
