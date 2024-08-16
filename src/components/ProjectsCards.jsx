import React from 'react'
import { Link } from 'react-router-dom'

function ProjectsCards({ project }) {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xl border-4 border-[#fdfde1]">
            <img className="w-full" src={project.img} alt={project.title} />
            
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-[#fdfde1]">{project.title}</div>
                    <p className="text-[#fdfde1] text-base">{project.description}</p>
                </div>
                <div className='px-6 pt-2 pb-4 md:h-14 text-[#fdfde1]'>
                    <span className='font-bold'>{project.techStack}</span>
                </div>
                <div className="px-6 pt-4 pb-4">
                    <Link to={project.link}
                        className='bg-[#11009E] text-[#fdfde1] px-4 py-2'
                    >View Project</Link>
                </div>
            
        </div>
    )
}

export default ProjectsCards