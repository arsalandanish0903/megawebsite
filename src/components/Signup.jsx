import React, { useState } from 'react';
import { SiSimplelogin } from "react-icons/si";
import { Link } from 'react-router-dom';

function SignupPage({ onSignup }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validateForm = () => {
    let valid = true;
    let errors = {};
    if (!formData.name) {
      valid = false;
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false;
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      valid = false;
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSignup(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='w-full h-screen bg-[#0F1035] flex items-center justify-center'>
      <div className='bg-[#11009E] p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-md mx-4'>
        <div className='my-4 flex items-center justify-center'>
          <SiSimplelogin className='text-8xl text-white' />
        </div>
        <div className='flex items-center justify-center'>
          <form onSubmit={handleSubmit} className='w-full'>
            <div className='my-4'>
              <label className='block text-white mb-2 text-lg'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none'
              />
              {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
            </div>
            <div className='my-4'>
              <label className='block text-white mb-2 text-lg'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none'
              />
              {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
            </div>
            <div className='my-4'>
              <label className='block text-white mb-2 text-lg'>Password</label>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none'
              />
              {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
            </div>
            <button
              className='w-full px-6 py-2 text-lg text-white mt-4 bg-[#0F1035] rounded-md  focus:outline-none'
              type='submit'
            >
              Sign Up
            </button>
            <div className='mt-4 text-center'>
              <span className='text-white'>Already have an account? </span>
              <Link to='/login' className='text-white underline'>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
