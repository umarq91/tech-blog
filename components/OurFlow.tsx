import { CircleCheck } from 'lucide-react';
import React from 'react';

function OurFlow() {
  return (
    <div className="bg-white py-16 font-yantramanav   ">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 max-w-6xl">
        {/* Left side text */}
        <div className="flex flex-col  items-start justify-between lg:max-w-[350px] mb-16 w-full">
          <p className="text-[#1351d8] text-[10px] uppercase font-syne font-medium  tracking-[7px] leading-[1.2px] box-border mb-[20px]">
          Strategic Pathway
          </p>

          <h2 className="text-[32px] lg:text-[50px] font-bold text-gray-800 mb-[25px] font-yantramanav leading-[40px] lg:leading-[56px] tracking-[-1px] text-inherit box-border text-left">
          Your Path to Optimal IT Transformation
          </h2>
          <p className="text-gray-600 text-left text-[15px] leading-[21px] mb-[50px] box-border">
          Our consulting process ensures a seamless transformation by understanding your business inside and out.
          </p>

          {/* List of benefits */}
          <ul className="space-y-4 text-gray-800 leading-[1.2px]">
            <li className="flex items-center gap-2">
              <CircleCheck strokeWidth={1.5} fill="#4287f5" stroke="white" />
              Round-the-Clock Support
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck strokeWidth={1.5} fill="#4287f5" stroke="white" />
              Swift Solutions
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck strokeWidth={1.5} fill="#4287f5" stroke="white" />
              Approachable Experts
            </li>
          </ul>
        </div>

        {/* Timeline Component */}
        <div>
        <ol className="relative border-l border-dotted border-gray-300 dark:border-blue-400">
          {/* Timeline Item 1 */}
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -left-6 ring-8 ring-white bg-[#f3f6fd]">
              <span className="w-full h-full text-[18px] text-center text-[#1351db] font-bold leading-[48px]">
                01
              </span>
            </span>
            <div className="about-timeline-item py-[30px] px-[28px] bg-[#f3f6fd] rounded-[10px] text-[#1c1c1c]  shadow-md relative transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white transform hover:-translate-y-1 ml-[50px]">
              <div className="about-timeline-item-inner">
                <h4 className="text-[18px] leading-[21px] mb-[6px] font-yantramanav tracking-[-.5px]   font-bold">
                  Discovery and Analysis
                </h4>
                <p className="text-[13px] leading-[19.5px] ">
                We evaluate your infrastructure, workflows, and goals to find your biggest opportunities
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
            <div className="about-timeline-item w-auto md:w-full bg-[#f3f6fd] py-[30px] px-[28px] hover:bg-gray-800 text-[#1c1c1c] hover:text-white  rounded-[10px] shadow-md relative transition duration-300 ease-in-out transform hover:-translate-y-1 ml-[50px]">
              <div className="about-timeline-item-inner">
                <h4 className="text-[18px] leading-[21px] mb-[6px] font-yantramanav tracking-[-.5px]  font-bold">
                  Tailored Solutions
                </h4>
                <p className="text-[13px] leading-[19.5px] ">
                Designing customized strategies that align with your specific business objectives.
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
            <div className="about-timeline-item py-[30px] px-[28px] bg-[#f3f6fd] rounded-[10px] shadow-md relative hover:bg-gray-800 text-[#1c1c1c] hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 ml-[50px]">
              <div className="about-timeline-item-inner">
                <h4 className="text-[18px] leading-[21px] mb-[6px] font-yantramanav tracking-[-.5px]  font-bold">
                  Deployment and Support
                </h4>
                <p className="text-[13px] leading-[19.5px]">
                Ensuring smooth implementation and providing ongoing support for sustained success
                </p>
              </div>
            </div>
          </li>
        </ol>
        </div>
      </div>
    </div>
  );
}

export default OurFlow;
