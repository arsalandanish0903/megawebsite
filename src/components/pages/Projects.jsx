import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import ProjectsCards from '../ProjectsCards';
function Projects() {


  const projects = [
    {
      title: 'Dashboard',
      description: 'It typically aggregates data from various sources into visualizations such as charts, graphs, and tables, allowing users to monitor performance, track progress, and make informed decisions quickly.',
      img: '../../../public/dashboard.jpeg',
      link: 'https://mydashboradpanel.netlify.app/',
      techStack: 'HTML, CSS, javaScript, Bootstrap'
    },
    {
      title: 'Resturant',
      description: 'A foods website is a digital platform showcasing a variety of recipes, cooking tips, and culinary inspirations. It offers users access to delicious recipes, from appetizers to desserts',
      img: '../../../public/foodsImg.jpeg',
      link: 'https://resturantfoodswebsite.netlify.app/',
      techStack: 'HTML, CSS, JavaScript, Tailwind, React Js'
    },
    {
      title: 'Todos with Context Api',
      description: 'It allows users to add, update, and delete tasks while ensuring that the state is accessible globally, making the app more scalable and easier to maintain.',
      img: '../../../public/todos.jpeg',
      link: 'http://todoswithcontextapi.netlify.app/',
      techStack: 'HTML, CSS, JavaScript, Tailwind, React Js'
    },
    {
      title: 'Currency Convertor',
      description: 'A currency converter is an online tool that allows users to quickly and accurately convert amounts between different currencies. It provides real-time exchange rates, helping travelers, businesses.',
      img: '../../../public/currency.jpeg',
      link: 'https://currencyconvertorwithreact.netlify.app/',
      techStack: 'HTML, CSS, JavaScript, Tailwind, React Js'
    },
    {
      title: 'Password Genrator',
      description: 'A password generator is a tool that creates strong, random passwords to enhance security. It helps users generate unique passwords that are difficult to guess, combining letters, numbers, and special characters to protect accounts and sensitive information',
      img: '../../../public/password.jpeg',
      link: 'http://passwordgenratorwithreact.netlify.app/',
      techStack: 'HTML, CSS, JavaScript, Tailwind, React Js'
    },
    {
      title: 'Weather App',
      description: 'A weather app provides real-time weather updates, forecasts, and alerts for your location and other cities worldwide. It helps users stay informed about current conditions, upcoming weather patterns, and severe weather warnings, making it easy to plan daily activities and travel.',
      img: '../../../public/weather.jpeg',
      link: 'https://myweatherappupdate.netlify.app/',
      techStack: 'HTML, CSS, JavaScript, Tailwind, React Js'
    },
  ]
  return (
    <>
    <div className='relative w-full  bg-[#0F1035] p-16'>
      <div className='flex items-center w-full h-80 justify-center relative'>
        <h1 className='text-8xl text-[#fdfde1] font-bold'>Projects</h1>
      </div>
      <div className='flex items-center justify-center'>
      <Link to="/" className='text-[#fdfde1] flex items-center text-2xl font-bold'>Home <IoIosArrowForward className='ml-4'/> </Link>
      <Link className='text-[#11009E] font-bold text-2xl'>Projects</Link>
      </div>
    </div>

    <div className="container mx-auto p-16 bg-[#0F1035]">
      <h2 className="md:text-8xl text-[#fdfde1] font-bold text-center mb-16">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectsCards key={index} project={project} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Projects