import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";

function SideBar() {
  return (
    <div className='h-screen w-80 p-4 bg-[#0F1035]'>
      <div className='relative flex justify-center'>
        <FaUserTie className='text-8xl rounded-full mt-4 text-white'/>
      </div>
      <div className='my-8'>
        <ul className='m-0 p-0 list-none'>
          <li className='my-4'>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `${isActive ? "bg-[#11009E] text-white block p-2 rounded-md " : "hover:bg-[#11009E] text-white block p-2 rounded-md"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className='my-4'>
            <NavLink
              to="/dashboard/dashabout"
              className={({ isActive }) =>
                `${isActive ? "bg-[#11009E] text-white block p-2 rounded-md " : "hover:bg-[#11009E] text-white block p-2 rounded-md"}`
              }
            >
              About
            </NavLink>
          </li>
          <li className='my-4'>
            <NavLink
              to="/dashboard/dashblog"
              className={({ isActive }) =>
                `${isActive ? "bg-[#11009E] text-white block p-2 rounded-md " : "hover:bg-[#11009E] text-white block p-2 rounded-md"}`
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
