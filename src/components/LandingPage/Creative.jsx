import React from 'react';
import Buttons from './Buttons';
import { FaPhone } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa6";
import { PiArrowBendDownLeftBold } from "react-icons/pi";

function Creative() {
  return (
    <div className="bg-[#0F1035] mt-16">
      <div className="px-4 md:px-16 flex flex-col md:flex-row py-16 md:items-center justify-between">
        <div className="text-[#fdfde1] text-center md:text-left mb-8 md:mb-0 my-2 w-2/3 md:mr-16">
          <span className="flex justify-center md:justify-start items-center text-4xl md:text-8xl font-bold">
            A Creative
            <FaStarOfLife className='text-[#11009E] ml-4'/>
          </span>
          <p className="block text-lg md:text-8xl md:font-bold my-4">design studio</p>
          <p className="block text-lg md:text-2xl text-[#fdfde1] text-justify mt-2">
            We're a creative design studio specializing in meeting the needs of the new generation. We offer innovative and cutting-edge design solutions to help our clients stand out in today's fast-paced.
          </p>
          <div className='flex my-8 items-center'>
            <img src="../../../public/user1.png" className='rounded-full mr-2' alt="" />
            <img src="../../../public/user2.png" className='rounded-full mr-2' alt="" />
            <img src="../../../public/user3.png" className='rounded-full mr-2' alt="" />
            <span className='ml-4 text-lg font-bold'>Believed by more than a thousand people</span>
          </div>
          <div className='flex items-center relative'>
            <Buttons text={'Book A Free Consultation'} 
            icons={<FaPhone className='ml-3'/>}
            />
            <PiArrowBendDownLeftBold className='absolute right-10 text-8xl animate-left-right text-[#11009E]' />
          </div>
        </div>
        <div className="relative">
          <div className='border-4 rounded-xl overflow-hidden'>
          <img
            className="w-full max-w-xs md:max-w-xl scale-110 transition-all duration-300 hover:scale-100"
            src="/creativeImg.png"
            alt="Creative Design"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creative;
