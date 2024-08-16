import React from 'react'

function ProvideCards({
    icons,
    title,
    text,
    arrow,
    img,
    span,
    strong
}) {
  return (
    <div className='relative w-full'>
  <div className='bg-[#fdfde1] px-8 py-4 w-full rounded-xl shadow-lg hover:bg-[#11009E] hover:text-white transition-all duration-300 border-2  border-black'>
    <div className='my-4 flex gap-1'>
      {icons}
    </div>
    <div className='mt-8'>
      <h2 className='text-2xl font-bold'>{title}</h2>
    </div>
    <div className='mt-2'>
      <p className='text-lg'>{text}</p>
    </div>
    <div className='my-4'>
      <span className='text-4xl hover:cursor-pointer'>{arrow}</span>
    </div>
    <div className='my-4 flex items-center'>
      <img src={img} className='rounded-full' alt="" />

      <span className='font-bold mx-3 text-xl'>{strong}</span>
      <span className='text-xl'>{span}</span>
    </div>
  </div>
</div>

  )
}

export default ProvideCards