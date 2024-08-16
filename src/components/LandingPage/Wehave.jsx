import React from 'react'

function Wehave({
    img,
    heading,
    description
}) {
  return (
    <div className='relative cursor-pointer'>
        
            <div className='border-4 rounded-xl border-black overflow-hidden'>
                <img src={img} alt="" className='w-full h-auto max-w-xs md:max-w-sm lg:max-w-md scale-100 hover:scale-110 duration-300' />
            </div>
            <div className='relative text-center my-3'>
                <p className='text-2xl font-bold'>{heading}</p>
                <span className='text-lg'>{description}</span>
            </div>
        
    </div>
  )
}

export default Wehave