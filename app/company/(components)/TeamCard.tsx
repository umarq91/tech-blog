import React from 'react';
import { FaGlobe, FaTwitter, FaInstagram } from 'react-icons/fa';

function TeamCard() {
  return (
    <div className='min-h-[350px] py-10 flex flex-col gap-2 justify-center items-center bg-blue-50'>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/29/03/35/girl-1867092_1280.jpg"
        className='h-24 w-24 rounded-full object-cover'
        alt="Team member"
      />
      <h2 className='text-xl font-bold'>Jennifer Linda</h2>
      <h5 className='text-blue-700'>Product Designer</h5>

      <div className="bg-white flex gap-4 p-2 justify-center w-[200px] rounded-lg">
        {/* Icons */}
        <FaGlobe className="text-blue-500 h-4 w-4" />
        <FaTwitter className="text-blue-500 h-4 w-4" />
        <FaInstagram className="text-blue-500 h-4 w-4" />
      </div>
    </div>
  );
}

export default TeamCard;
