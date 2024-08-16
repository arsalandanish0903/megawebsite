import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import CardSlider from '../LandingPage/CardSlider/CardSlider';
import { FaArrowRight } from "react-icons/fa6";
import { GiPencilBrush } from "react-icons/gi";
import ProvideCards from '../ProvideCard/ProvideCards';
import { FaFigma } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { TiLightbulb } from "react-icons/ti";
function Blog() {
  return (
    <>
    <div className='relative w-full  bg-[#0F1035] p-16'>
      <div className='flex items-center w-full h-80 justify-center relative'>
        <h1 className='text-8xl text-[#fdfde1] font-bold'>Blog</h1>
      </div>
      <div className='flex items-center justify-center'>
      <Link to="/" className='text-[#fdfde1] flex items-center text-2xl font-bold'>Home <IoIosArrowForward className='ml-4'/> </Link>
      <Link className='text-[#11009E] font-bold text-2xl'>Blog</Link>
      </div>
    </div>
    <div className='bg-[#0F1035] p-16'>
    <CardSlider />
    </div>
    <div className='grid md:grid-cols-2  w-full px-16 gap-6 py-16 bg-[#fffff5] border-b-2 '>
        <div className='duration-300'>
          <ProvideCards icons={<GiPencilBrush className='text-6xl' />}
            title={'UI/UX Design'}
            text={'Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.'}
            arrow={<FaArrowRight />}
          />
        </div>
        <div className='duration-300'>
          <ProvideCards icons={<FaFigma className='text-6xl' />}
            title={'Graphic Design'}
            text={'Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.'}
            arrow={<FaArrowRight />}
          />
        </div>
        <div className='duration-300'>
          <ProvideCards icons={<CgWebsite className='text-6xl' />}
            title={'Web Design'}
            text={'Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.'}
            arrow={<FaArrowRight />}
          />
        </div>
        <div className='duration-300'>
          <ProvideCards icons={<TiLightbulb className='text-6xl' />}
            title={'Motion Graphics'}
            text={'Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.'}
            arrow={<FaArrowRight />}
          />
        </div>
      </div>
    </>
  )
}

export default Blog