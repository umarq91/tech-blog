import React from 'react'



function ContactForm(){
  return (
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
  )
}

export default ContactForm