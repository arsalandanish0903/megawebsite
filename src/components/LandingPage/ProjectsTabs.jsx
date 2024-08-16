import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ProjectsTabs = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 w-full">
      <button
        className="w-full text-left px-12 py-8 rounded-xl my-2 bg-[#11009E] text-white hover:bg-[#0F1035] hover:text-[#fff] focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex justify-between items-center w-full">
          <span className='text-xl font-bold'>{title}</span>
          <span>{isOpen ? <IoIosArrowUp className='text-xl font-bold' /> : <IoIosArrowDown className='text-2xl font-bold' />}</span>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-2 w-full">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <ProjectsTabs
        title="01/ Project Idea"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        The process starts with a detailed discussion with the client to understand their idea & goals.

      </ProjectsTabs>
      <ProjectsTabs
        title="02/ Brainstorming"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        rainstorming is a group creativity technique in which members attempt to find a conclusion.

      </ProjectsTabs>
      <ProjectsTabs
        title="03/ Launch"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        The completed design assets or final product are delivered with necessary documentation.

      </ProjectsTabs>
    </div>
  );
};

export default Accordion;
