import { CircleCheck } from 'lucide-react';
import React from 'react';

function OurFlow() {
  return (
    <div className="bg-white py-16 font-yantramanav   ">
      <div className="container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between px-4 max-w-6xl">
        {/* Left side text */}
        <div className="flex flex-col  items-start justify-between lg:max-w-[350px] mb-16 w-full">
          <p className="text-[#1351d8] text-[10px] uppercase font-syne font-medium  tracking-[7px] leading-[1.2px] box-border mb-[20px]">
            consulting excellence
          </p>

          <h2 className="text-[32px] lg:text-[50px] font-bold text-gray-800 mb-[25px] font-yantramanav leading-[40px] lg:leading-[56px] tracking-[-1px] text-inherit box-border text-left">
            Best pathway to our clients.
          </h2>
          <p className="text-gray-600 text-left text-[15px] leading-[21px] mb-[50px] box-border">
            Our consulting process begins with a thorough assessment of your
            current IT infrastructure, workflows, and pain points.
          </p>

          {/* List of benefits */}
          <ul className="space-y-4 text-gray-800 leading-[1.2px]">
            <li className="flex items-center gap-2">
              <CircleCheck strokeWidth={1.5} fill="#4287f5" stroke="white" />
              24/7 Full Service Support
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck strokeWidth={1.5} fill="#4287f5" stroke="white" />
              Immediate Response
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck strokeWidth={1.5} fill="#4287f5" stroke="white" />
              Easy to Approach us
            </li>
          </ul>
        </div>

        {/* Timeline Component */}
        <ol className="relative border-l border-dotted border-gray-300 dark:border-blue-400">
          {/* Timeline Item 1 */}
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -left-6 ring-8 ring-white bg-[#f3f6fd]">
              <span className="w-full h-full text-[18px] text-center text-[#1351db] font-bold leading-[48px]">
                01
              </span>
            </span>
            <div className="about-timeline-item py-[30px] px-[28px] bg-[#f3f6fd] rounded-[10px] shadow-md relative transition duration-300 ease-in-out transform hover:-translate-y-1 ml-[50px]">
              <div className="about-timeline-item-inner">
                <h4 className="text-[18px] leading-[21px] mb-[6px] font-yantramanav tracking-[-.5px] text-[#1c1c1c] font-bold">
                  Discovery and Analysis
                </h4>
                <p className="text-[13px] leading-[19.5px] text-[#1c1c1cb3]">
                  Perform an analysis of the client's existing IT systems.
                </p>
              </div>
            </div>
          </li>

          {/* Timeline Item 2 */}
          <li className="mb-10 ml-6 lg:flex lg:items-start lg:gap-6 lg:justify-end">
            <span className="absolute flex  items-center justify-center w-12 h-12 rounded-full -left-6 ring-8 ring-white bg-[#f3f6fd]">
              <span className="w-full h-full text-[18px] text-center text-[#1351db] font-bold leading-[48px]">
                02
              </span>
            </span>
            <div className="about-timeline-item w-auto md:w-full bg-[#f3f6fd] py-[30px] px-[28px]  rounded-[10px] shadow-md relative transition duration-300 ease-in-out transform hover:-translate-y-1 ml-[50px]">
              <div className="about-timeline-item-inner">
                <h4 className="text-[18px] leading-[21px] mb-[6px] font-yantramanav tracking-[-.5px] text-[#1c1c1c] font-bold">
                  Tailored Solutions
                </h4>
                <p className="text-[13px] leading-[19.5px] text-[#1c1c1cb3]">
                  Develop IT solutions based on the analysis phase.
                </p>
              </div>
            </div>
          </li>

          {/* Timeline Item 3 */}
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -left-6 ring-8 ring-white bg-[#f3f6fd]">
              <span className="w-full h-full text-[18px] text-center text-[#1351db] font-bold leading-[48px]">
                03
              </span>
            </span>
            <div className="about-timeline-item py-[30px] px-[28px] bg-[#f3f6fd] rounded-[10px] shadow-md relative transition duration-300 ease-in-out transform hover:-translate-y-1 ml-[50px]">
              <div className="about-timeline-item-inner">
                <h4 className="text-[18px] leading-[21px] mb-[6px] font-yantramanav tracking-[-.5px] text-[#1c1c1c] font-bold">
                  Deployment and Support
                </h4>
                <p className="text-[13px] leading-[19.5px] text-[#1c1c1cb3]">
                  Regularly communicate with our client to address any concerns.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default OurFlow;
