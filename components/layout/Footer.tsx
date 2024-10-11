import React from "react";

function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 py-10 min-h-[200px] font-yantramanav">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-[#f3f6fd] p-5  rounded-lg  py-16 px-8">
            <div className="heading flex flex-col gap-4">
              <h5 className="text-[#1351d8] tracking-[6px] font-medium uppercase font-syne text-[10px] leading-[1.2px] ">
                Contact
              </h5>
              <h2 className="text-[40px] mb-6 leading-[1px] mt-4  lg:text-5xl tracking-[-1px] font-bold">
                Let's get in touch
              </h2>
              <h5 className="text-lg">
                You can reach us anytime via{" "}
                <span className="text-[#1351db]">bluebase@mail.com</span>
              </h5>
            </div>
            <hr className="border border-gray-300 mt-6" />
            {/* Form */}
            <form className="mt-6 space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <label
                  htmlFor=""
                  className=" text-[12px] text-[#1c1c1c] opacity-[.9px] "
                >
                  First Name
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 border border-gray-300 rounded-md w-full mb-[10px]"
                  />
                </label>
                <label
                  htmlFor=""
                  className=" text-[12px] text-[#1c1c1c] opacity-[.9px] "
                >
                  Last Name
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 border border-gray-300 rounded-md w-full  mb-[10px]"
                  />
                </label>
              </div>
              <label
                htmlFor=""
                className=" text-[12px] text-[#1c1c1c] opacity-[.9px] "
              >
                Email
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded-md w-full  mb-[10px]"
                />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <label
                  htmlFor=""
                  className=" text-[12px] text-[#1c1c1c] opacity-[.9px] "
                >
                  Phone Number
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="p-3 border border-gray-300 rounded-md w-full  mb-[10px]"
                  />
                </label>
                <label
                  htmlFor=""
                  className=" text-[12px] text-[#1c1c1c] opacity-[.9px] "
                >
                  Country
                  <input
                    type="text"
                    placeholder="Country"
                    className="p-3 border border-gray-300 rounded-md w-full  mb-[10px]"
                  />
                </label>
              </div>
              <label
                htmlFor=""
                className=" text-[12px] text-[#1c1c1c] opacity-[.9px] "
              >
                Message
              </label>
              <textarea
                placeholder="Message"
                className="p-3 border border-gray-300 rounded-md w-full"
                rows={4}
              ></textarea>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <label className="text-[#1c1c1ccc] text-[13px] leading-[1px]  font-dmSans ">
                  I agree to the{" "}
                  <span className="underline">terms and conditions</span>
                </label>
              </div>

              <div>
                <button className="bg-blue-500 text-white py-3 mt-3 px-6 rounded-md w-full hover:bg-blue-600 transition">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Second Column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="py-28 px-8 w-full bg-[#f3f6fd] col-span-1  flex flex-col gap-10 rounded-lg">
              <div className="flex flex-col justify-center gap-4">
                <div className="flex mb-3">
                  <h3 className="mb-[6px] leading-[1px] text-[36px] font-medium font-dmSans text-normal text-inherit ">
                    22+
                  </h3>
                  <p className="text-[18px] leading-[1px] font-dmSans text-inherit">
                    Years
                  </p>
                </div>
                <h4 className="text-[14px] text-[#1351d8]  leading-[1px] font-light">
                  Field Experience
                </h4>
              </div>
              <hr className="border border-gray-300" />
              <div className="flex items-center gap-2">
                <h3 className=" leading-[1px] text-[36px] font-medium font-dmSans text-normal text-inherit">
                  950+
                </h3>
                <p className="text-[18px] leading-[1px] font-dmSans  text-inherit">
                  Projects
                </p>
              </div>
              <h4 className="text-[14px] text-[#1351d8]  leading-[1px] font-light">
                Done around the world
              </h4>
              <hr className="border border-gray-300" />
              <div className="flex flex-col justify-center gap-4">
                <div className="flex mb-3">
                  <h3 className="mb-[6px] leading-[1px] text-[36px] font-medium font-dmSans text-normal text-inherit ">
                    99%
                  </h3>
                </div>
                <h4 className="text-[14px] text-[#1351d8]  leading-[1px] font-light">
                  Client Satisfaction
                </h4>
              </div>
              <hr className="border border-gray-300" />
              <div className="flex flex-col justify-center gap-4">
                <div className="flex mb-3">
                  <h3 className="mb-[6px] leading-[1px] text-[36px] font-medium font-dmSans text-normal text-inherit ">
                    1995+
                  </h3>
                  <p className="text-[18px] leading-[1px] font-dmSans text-inherit">
                    Years
                  </p>
                </div>
                <h4 className="text-[14px] text-[#1351d8]  leading-[1px] font-light">
                  Established On
                </h4>
              </div>
              <hr className="border border-gray-300" />
              <div className="flex flex-col justify-center gap-4">
                <div className="flex mb-3">
                  <h3 className="mb-[6px] leading-[1px] text-[36px] font-medium font-dmSans text-normal text-inherit ">
                    2
                  </h3>
                  <p className="text-[18px] leading-[1px] font-dmSans text-inherit">
                    Mins
                  </p>
                </div>
                <h4 className="text-[14px] text-[#1351d8]  leading-[1px] font-light">
                  Response Time
                </h4>
              </div>
            </div>

            {/* Third Column */}
            <div className="bg-[#f3f6fd] px-7 col-span-1 rounded-xl  py-16">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-4">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/support-icon.svg"
                    className="h-8 w-[40px] block mb-5 "
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="mb-[15px] text-[18px] font-yantramanav leading-[1px] font-medium">
                      Contact Info
                    </h3>
                    <p className="text-[12px] text-[#1c1c1ccc] leading-[24px]  ">
                      +1 455 1482 236
                    </p>
                    <p className="text-[12px] text-[#1c1c1ccc] leading-[24px] ">
                      Bluebase@mail.com
                    </p>
                  </div>
                </div>
                <hr className="border w-full border-gray-300" />
                <div className="flex flex-col items-start gap-5 py-9">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map-icon.svg"
                    className="h-8 w-10"
                  />
                  <div>
                    <h3 className="mb-[15px] text-[18px] font-yantramanav leading-[1px] font-medium">
                      Visit our office
                    </h3>
                    <p className="text-[12px] text-[#1c1c1ccc] leading-[24px]">
                      16/9, Down Street
                    </p>
                    <p className="text-[12px] text-[#1c1c1ccc] leading-[24px]">
                      Edinburgh, Scotland
                    </p>
                    <p className="text-[12px] text-[#1c1c1ccc] leading-[24px]">
                      United Kingdom
                    </p>
                  </div>
                </div>
                <hr className="border w-full border-gray-300" />
                <ul className="py-8 text-[#1c1c1ccc] space-y-4">
                    <li>Dribbble</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>linkedin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer