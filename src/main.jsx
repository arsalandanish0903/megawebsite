import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Layout from './components/Layout.jsx';
import Blog from './components/pages/Blog.jsx';
import LoginPage from './components/Loginpage.jsx';
import Signup from './components/Signup.jsx';
import Maindashboard from './components/Dashboard/Maindashboard.jsx';
import DashHome from './components/Dashboard/DashHome.jsx';
import DashAbout from './components/Dashboard/DashAbout.jsx';
import Projects from './components/pages/Projects.jsx';
import DashBlog from './components/Dashboard/DashBlog.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='blog' element={<Blog />}/>
      <Route path='projects' element={<Projects />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<Signup />} />
      <Route path='dashboard' element={<Maindashboard />}>
        <Route index element={<DashHome />} />
        <Route path='dashabout' element={<DashAbout />} />
        <Route path='dashblog' element={<DashBlog />}/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
