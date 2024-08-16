import React from 'react'
import { FaStarOfLife } from "react-icons/fa6";
import ProjectsTabs from './ProjectsTabs';
function Ourquality() {
    return (
        <div className='w-full grid  grid-cols-1 md:grid-cols-3 items-center bg-[#fffff5] gap-4'>
        <div className="col-span-2 text-center md:text-left mb-8 md:mb-0 my-2 md:mr-16">
          <span className="flex justify-center md:justify-start items-center text-4xl md:text-8xl font-bold">
            Our high-quality
            <FaStarOfLife className='text-[#11009E] ml-3' />
          </span>
          <p className="block text-lg md:text-8xl md:font-bold my-4">working processes</p>
          <p className="block text-lg md:text-2xl text-[#000000] text-justify mt-2">
            We focus at every stage on effective communication and collaboration between the client and ensuring that the final design meets the client’s objectives and expectations.
          </p>
          <p className="block text-lg md:text-2xl text-[#000000] text-justify mt-2">
            It is important to note that these are simplified steps, and the actual work process may vary depending on the complexity of the project.
          </p>
        </div>
        <div className="relative col-span-1">
          <div className='w-full'>
            <ProjectsTabs />
          </div>
        </div>
      </div>
    )
}

export default Ourquality