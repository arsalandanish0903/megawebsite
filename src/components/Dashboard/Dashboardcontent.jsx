import React from 'react'
import { Outlet } from 'react-router-dom'
function Dashboardcontent() {
  return (
    <div className='flex-1 p-6 bg-gray-400'>
        <Outlet />
    </div>
  )
}

export default Dashboardcontent