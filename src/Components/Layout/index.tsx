import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-homePage h-screen bg-cover sm:flex sm:justify-center'>
      <Navbar/>
      <div className="container overflow-auto max-h-screen sm:pt-32 max-sm:pt-24 max-sm:px-3 relative">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
