import React from 'react'
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import CardSlider from '../LandingPage/CardSlider/CardSlider';

function About() {
  return (
    <>
      <div className='relative w-full  bg-[#0F1035] p-16'>
      <div className='flex items-center w-full h-80 justify-center relative'>
        <h1 className='text-8xl text-[#fdfde1] font-bold'>About</h1>
      </div>
      <div className='flex items-center justify-center'>
      <Link to="/" className='text-[#fdfde1] flex items-center text-2xl font-bold'>Home <IoIosArrowForward className='ml-4'/> </Link>
      <Link className='text-[#11009E] font-bold text-2xl'>About</Link>
      </div>
    </div>
    <div className='bg-[#0F1035] p-16'>
    <CardSlider />
    </div>
    
    </>
    
  )
}

export default About