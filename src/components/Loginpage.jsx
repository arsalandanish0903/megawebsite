import React, { useState } from 'react'
import { SiSimplelogin } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const validateForm = () => {
    let valid = true;
    let errors = {}
    if (!formData.email) {
      valid = false;
      errors.email = 'Email Is Required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false
      errors.email = 'Email Is Invalid'
    }
    if (!formData.password) {
      valid = false;
      errors.password = 'Password Is Required'
    }

    setErrors(errors)
    return valid
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      navigate('/dashboard')
    }
  }
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  return (
    <div className='w-full h-screen bg-[#0F1035] flex items-center justify-center'>
    <div className='bg-[#11009E] p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-md mx-4'>
      <div className='my-4 flex items-center justify-center'>
        <SiSimplelogin className='text-8xl text-white' />
      </div>
      <div className='flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='w-full'>
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
            Login
          </button>
          
        </form>
      </div>
    </div>
  </div>
  )
}

export default LoginPage