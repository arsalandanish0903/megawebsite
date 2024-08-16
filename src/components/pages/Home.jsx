import React from 'react'
import Creative from '../LandingPage/Creative'
import ProvideCards from '../ProvideCard/ProvideCards'
import { GiPencilBrush } from "react-icons/gi";
import { FaFigma } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { TiLightbulb } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa6";
import Buttons from '../LandingPage/Buttons';
import { FaPlayCircle } from "react-icons/fa";
import CardSlider from '../LandingPage/CardSlider/CardSlider';
import Ourquality from '../LandingPage/Ourquality';
import ClientsAreAlways from '../LandingPage/ClientsAreAlways';
import AutoTextSlider from '../LandingPage/AutoTextSlider';
import Wehave from '../LandingPage/Wehave';



function Home() {
  const teamOne = '../../../public/team1.png'
  const teamTwo = '../../../public/team2.png'
  const teamThree = '../../../public/team3.png'
  const teamFour = '../../../public/team4.png'
  const texts = [
    "Welcome to our website!",
    "We provide the best services.",
    "Contact us for more information.",
    "Thank you for visiting!"
  ]

  return (
    <div className='relative'>
      <Creative />
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
      <div className='py-16 px-16 bg-[#fffff5] md:grid gap-0 items-center' style={{ gridTemplateColumns: '3fr 2fr repeat(3, 0)', }}>
        <div>
          <span className="flex md:text-8xl font-bold text-2xl">
            A Creative
            <FaStarOfLife className='text-[#11009E] ml-4' />
          </span>
          <p className="block text-2xl md:text-8xl font-bold my-4">design studio</p>
        </div>
        <div>
          <p className="block text-lg md:text-2xl text-[#000000] text-justify mt-2">
            We're a creative design studio specializing in meeting the needs of the new generation. We offer innovative and cutting-edge design solutions to help our clients stand out in today's fast-paced.
          </p>
        </div>
      </div>
      <div className='p-16 bg-[#fffff5] grid grid-cols-1'>
        <div className='flex relative'>
          <div className="relative border-4 border-black rounded-xl">
            <img src="../../../public/vidieo.png" alt="" className="relative w-full" />
            <Buttons className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white
              flex items-center
              `}
              text={'Play'}
              icons={<FaPlayCircle className='ml-3' />}
            />
          </div>

          <div className="relative md:grid md:w-1/2 bg-[#0F1035] p-8 ml-8 rounded-xl border-4 border-black group hover:bg-white transition duration-300">
            <div className="relative flex flex-col items-center">
              <ul className="m-0 p-0 list-none">
                <li className="border-b-2 border-[#fdfde1] block mt-12 text-center py-2 group-hover:text-black">
                  <h3 className="text-4xl font-bold text-[#11009E] group-hover:text-black">
                    15+
                  </h3>
                  <span className="text-2xl text-[#fdfde1] font-bold group-hover:text-black">
                    Years of experience
                  </span>
                </li>
                <li className="border-b-2 border-[#fdfde1] block mt-12 text-center py-2 group-hover:text-black">
                  <h3 className="text-4xl font-bold text-[#11009E] group-hover:text-black">
                    120k
                  </h3>
                  <span className="text-2xl text-[#fdfde1] font-bold group-hover:text-black">
                    Successful projects
                  </span>
                </li>
                <li className="border-b-2 border-[#fdfde1] block my-12 text-center py-2 group-hover:text-black">
                  <h3 className="text-4xl font-bold text-[#11009E] group-hover:text-black">
                    100%
                  </h3>
                  <span className="text-2xl text-[#fdfde1] font-bold group-hover:text-black">
                    Client satisfaction rate
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className='relative bg-[#0F1035] p-16'>
        <div className='relative'>
          <p className="text-center text-white text-lg md:text-8xl md:font-bold my-4">Have a wide range of</p>
          <span className="flex justify-center text-white md:justify-center items-center text-4xl md:text-8xl font-bold">
            creative projects
            <FaStarOfLife className='text-[#11009E] ml-4' />
          </span>
        </div>
        <CardSlider />
      </div>
      <div className='relative p-16 bg-[#fffff5] border-b-2'>
        <Ourquality />
      </div>
      <div className='relative p-16 bg-[#fffff5]'>
        <p className="text-center text-black text-lg md:text-8xl md:font-bold my-4">Clients are always</p>
        <span className="flex justify-center text-black md:justify-center items-center text-4xl md:text-8xl font-bold">
          satisfied with us
          <FaStarOfLife className='text-[#11009E] ml-4' />
        </span>
        <div className='my-12'>
          <ClientsAreAlways />
        </div>
      </div>
      <div className='relative p-16 bg-[#fffff5]'>
        <AutoTextSlider texts={texts} interval={3000} />
      </div>
      <div className='relative p-16 bg-[#fffff5]'>
        <p className="text-center text-black text-lg md:text-8xl md:font-bold my-4">We have a team of</p>
        <span className="flex justify-center text-black md:justify-center items-center text-4xl md:text-8xl font-bold">
          Creative People
          <FaStarOfLife className='text-[#11009E] ml-4' />
        </span>
        <div className='my-12 md:flex gap-4'>
          <Wehave img={teamOne} heading={"Andrew Mark"} description={"Creative Designer"}/>
          <Wehave img={teamTwo} heading={"Jack Tylor"} description={"Senior Designer"}/>
          <Wehave img={teamThree} heading={"Martine Joe"} description={"Project Manaher"}/>
          <Wehave img={teamFour} heading={"Adam Straw"} description={"Web Developer"}/>
        </div>
      </div>
    </div>
  )
}

export default Home


// https://html.favdevs.com/aximo/?storefront=envato-elements