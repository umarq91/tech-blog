import React from 'react';
import { FaGlobe, FaTwitter, FaInstagram } from 'react-icons/fa';

interface TeamCardProps {
  image: string;
  position: string;
  name: string; // Added name prop
}

const TeamCard: React.FC<TeamCardProps> = ({ image, position, name }) => {
  return (
    <div className='min-h-[400px] text-center p-5 flex flex-col gap-2 justify-center items-center bg-blue-50 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105'>
      <img
        src={image}
        className='h-36 w-36 rounded-full object-cover border-4 border-blue-400'
        alt={`${name} - ${position}`}
      />
      <h5 className='text-blue-700 lg:text-2xl font-semibold'>{name}</h5>
      <p className='text-gray-500'>{position}</p>
         {/* Socials */}
      {/* <div className="bg-white flex gap-4 p-2 justify-center w-[200px] rounded-lg">
        <FaGlobe className="text-blue-500 h-4 w-4" />
        <FaTwitter className="text-blue-500 h-4 w-4" />
        <FaInstagram className="text-blue-500 h-4 w-4" />
      </div> */}
    </div>
  );
}

export default TeamCard;


   