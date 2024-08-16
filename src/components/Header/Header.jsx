import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed top-0 left-0 w-full shadow-md bg-[#0F1035] px-6 py-4 sm:px-16 sm:py-6 z-50'>
      <div className='flex items-center justify-between'>
        <div>
          <Link to="/" className="text-4xl font-bold text-[#fdfde1]">
            <img src="../../../public/logo-white.svg" alt="Logo" />
          </Link>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex list-none p-0 m-0'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `${isActive ? "bg-[#11009E] px-6 py-2 rounded-md text-[#fdfde1] font-semibold" : "hover:bg-[#11009E] px-6 py-2 text-[#fdfde1] font-semibold rounded-md"} md:mx-4`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `${isActive ? "bg-[#11009E] px-6 py-2 rounded-md text-[#fdfde1] font-semibold" : "hover:bg-[#11009E] px-6 py-2 text-[#fdfde1] font-semibold rounded-md"} md:mx-4`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => `${isActive ? "bg-[#11009E] px-6 py-2 rounded-md text-[#fdfde1] font-semibold" : "hover:bg-[#11009E] px-6 py-2 text-[#fdfde1] font-semibold rounded-md"} md:mx-4`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => `${isActive ? "bg-[#11009E] px-6 py-2 rounded-md text-[#fdfde1] font-semibold" : "hover:bg-[#11009E] px-6 py-2 text-[#fdfde1] font-semibold rounded-md"} md:mx-4`}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex'>
          <NavLink to="/login"
            className="bg-[#11009E] md:mx-2 px-4 py-2 text-[#fdfde1] rounded-md focus:outline-none"
          >
            Login
          </NavLink>
          <NavLink to="/signup"
            className="bg-[#11009E] px-4 py-2 text-[#fdfde1] rounded-md focus:outline-none"
          >
            Sign Up
          </NavLink>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none text-[#fdfde1]'>
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden mt-4'>
          <ul className='list-none p-0 m-0 flex flex-col space-y-2'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `${isActive ? "bg-[#11009E] text-[#fdfde1] font-semibold" : "hover:bg-[#11009E] px-4 py-2 text-[#fdfde1] font-semibold rounded-md"} md:mx-4`}
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `${isActive ? "bg-[#11009E] text-[#fdfde1] font-semibold" : "hover:bg-[#11009E] px-4 py-2 text-[#fdfde1] font-semibold rounded-md"} md:mx-4`}
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => `${isActive ? "bg-[#11009E] text-[#fdfde1] font-semibold" : "hover:bg-[#11009E] px-4 py-2 text-[#fdfde1] font-semibold rounded-md"} md:mx-4`}
                onClick={toggleMenu}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => `${isActive ? "bg-[#11009E] text-[#fdfde1] font-semibold" : "text-[#fdfde1] font-semibold"} px-2`}
                onClick={toggleMenu}
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
          <div className='mt-4 flex flex-col space-y-2'>
            <NavLink to="/login"
              className="bg-[#11009E] px-4 py-2 text-[#fdfde1] rounded-md focus:outline-none"
            >
              Login
            </NavLink>
            <NavLink to="/signup"
              className="bg-[#11009E] px-4 py-2 text-[#fdfde1] rounded-md focus:outline-none"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
