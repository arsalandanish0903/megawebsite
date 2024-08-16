import React from 'react'
import { FaStarOfLife } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Buttons from '../LandingPage/Buttons';
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#0F1035] w-full p-16'>
      <div className='flex relative justify-between'>
        <div className='relative overflow-hidden w-2/3'>
          <span className="flex justify-center md:justify-start items-center text-4xl md:text-8xl font-bold text-[#fdfde1]">
            Our high-quality
            <FaStarOfLife className='text-[#11009E] ml-3' />
          </span>
          <p className="block text-lg md:text-8xl md:font-bold my-4 text-[#fdfde1]">working processes</p>
          <p className="w-full text-lg md:text-xl text-[#fdfde1] text-justify my-4">
            We're a creative design studio specializing in meeting the needs of the new generation. We offer innovative and  design solutions to help our clients stand out in today's fast-paced.
          </p>
          <div className='flex items-center'>
            <div className='relative my-4'>
              <p className='text-[#fdfde1] font-bold text-2xl'>Give us a call:</p>
              <span className='text-[#fdfde1]'>(123) 456-7890</span>
              <p className='text-[#fdfde1] text-2xl font-bold'>Send us an email:</p>
              <span className='text-[#fdfde1]'>info@mthemeus.com</span>
            </div>
            <div className='relative'>
              <ul className='flex m-0 p-0 ml-16 cursor-pointer'>
                <li className='list-none p-3 text-[#fdfde1] text-xl'>
                  <FaTwitter />
                </li>
                <li className='list-none p-3 text-[#fdfde1] text-xl'>
                  <FaFacebook />
                </li>
                <li className='list-none p-3 text-[#fdfde1] text-xl'>
                  <FaInstagramSquare />
                </li>
                <li className='list-none p-3 text-[#fdfde1] text-xl'>
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form action="" className='bg-[#11009E] p-16 rounded-lg'>
          <input type="text" className='w-80 p-2 rounded-xl focus:outline-none block mb-6'
          placeholder='Your Name'
          />
          <input type="text" className='w-80 p-2 rounded-xl focus:outline-none block mb-6'
          placeholder='Your Name'
          />
          <input type="text" className='w-80 p-2 rounded-xl focus:outline-none block mb-6'
          placeholder='+0888-234-6849'
          />
          <textarea rows={4} className='w-80 rounded-xl focus:outline-none p-2'
          placeholder='Your Message'
          ></textarea>
          
          <button className='text-center w-full rounded-xl mt-6 bg-[#0F1035] text-[white] text-lg font-bold px-4 py-2 flex items-center justify-center'>Send Message <span className='ml-2'><FaArrowRight /></span></button>
          
        </form>
      </div>
    </div>
  )
}

export default Footer