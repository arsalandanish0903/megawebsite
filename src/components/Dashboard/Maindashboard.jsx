import React from 'react'
import SideBar from './SideBar'
import TopNavbar from './TopNavbar'
import Dashboardcontent from './Dashboardcontent'

function Maindashboard() {
  return (
    <div className='flex h-screen'>
        <SideBar />
        <div className='flex-1 flex flex-col'>
        <TopNavbar />
        <Dashboardcontent />
        </div>
    </div>
  )
}

export default Maindashboard