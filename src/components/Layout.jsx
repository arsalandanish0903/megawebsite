import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  const hideHeaderandFooter = location.pathname === '/login' || location.pathname === '/signup'
  || location.pathname === '/dashboard' || location.pathname === '/dashboard/dashabout' || location.pathname === '/dashboard/dashblog'
  
  return (
    <>
        {!hideHeaderandFooter && <Header />}
        <main>
          <Outlet />
        </main>
        {!hideHeaderandFooter && <Footer />}
    </>
  )
}

export default Layout