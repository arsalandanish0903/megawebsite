import React from 'react'



function Buttons({text, icons, className}) {
  return (
    <button className={`bg-[#11009E] px-8 focus:outline-none text-xl font-semibold py-4  rounded-full flex items-center ${className}`}>{text} {icons}</button>
  )
}

export default Buttons