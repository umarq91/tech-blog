import React from "react";
import Link from 'next/link';
const Footer2 = () => {
  return (
    <div className="py-16 pl-6 lg:px-24 bg-[#1c1c1c] w-[100vw]">
      <div className=" max-w-[1400px] mx-auto">
        <div
          className="pb-[50px] border-b-[1px] solid border-[#ffffff33] relative 
        flex flex-col  lg:flex-row lg:justify-between   items-start
        justify-between"
        >
          <div className="left ">
            <a className="logo">
              <img
                src="/logo.png"
                alt="synck"
                className="transition-none h-10 w-10 animate-none hover:bg-transparent
                    hover:border-none hover:shadow-none"
              />
            </a>
            <p className="leading-[24px] text-[14px] text-[#fffc] text-left mt-6">
              We provide the expertise and support to <br /> propel your
              business forward.
            </p>
            <div className="space-x-2 mt-8 flex items-center justify-start flex-wrap gap-2 max-[200px]:flex-col ">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-[8px] px-[15px] rounded-md border-[1px] solid border-[#ffffff33] outline-none hover:outline-none text-inherit text-[12px] bg-transparent leading-none] w-[195px] h-[31px] text-white font-dmSans"
              />
              <button
                className="font-dmSans text-[#f9f9f9] text-[12px] bg-[#1351d8] py-[8px] px-[26px]
            rounded-md
              "
              >
                Get Started
              </button>
            </div>
            {/* <div className="flex gap-[30px] items-center box-border mt-12 ">
              <div>
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/youtube.svg"
                  className="w-[70px] box-border"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/webflow.svg"
                  className="w-[70px] box-border"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/upwork.svg"
                  className="w-[70px] box-border"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/shopify.svg"
                  className="w-[70px] box-border"
                  alt=""
                />
              </div>
            </div> */}
          </div>
          <div className="h-auto lg:h-[300px]  w-px bg-[#ffffff33] mx-4 z-20 "></div>
          <div className="right max-lg:mt-16">
            <p
              className="mb-[15px] text-[24px] text-[#ffffff] tracking-[-.5px] font-yantramanav box-border 
            font-medium  "
            >
              Let’s get started on something great
            </p>
            <p className="leading-[24px] text-[14px] text-[#ffffffcc] mb-[35px] box-border">
            Our cloud experts are ready to collaborate and offer <br/>
             tailored insights to elevate your busines
            </p>
            <Link href={"/contact-us"}>
            <button
              className="h-[31px] text-[12px] py-[13px] px-[26px] rounded-md leading-[1px]
              text-[#f9f9f9] bg-[#1351db]
              "
              >
              Get an appointment now
            </button>
              </Link>
            <div className="footer-experience d-flex align-items-center flex gap-[60px] mt-[38px]  ">
              <div className="footer-experience-item text-[#ffffff] space-y-2 ">
                <h2 className="text-[22px] leading-[1px] font-dmSans font-normal  text-inherit">
                  2 <span className="text-[12px] ">Mins</span>
                </h2>
                <p className="text-[12px] leading-[24px] text-[#ffffffcc]">
                  Response Time
                </p>
              </div>
              <div className="footer-experience-item text-[#ffffff] space-y-2 ">
                <h2 className="text-[22px] leading-[1px] font-dmSans font-normal  text-inherit">
                  99%
                </h2>
                <p className="text-[12px] leading-[24px] text-[#ffffffcc]">
                  Client Satisfaction
                </p>
              </div>
              <div className="footer-experience-item text-[#ffffff] space-y-2 ">
                <h2 className="text-[22px] leading-[1px] font-dmSans font-normal  text-inherit">
                  15+ <span className="text-[12px] ">Years</span>
                </h2>
                <p className="text-[12px] leading-[24px] text-[#ffffffcc]">
                  Field Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;