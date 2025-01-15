import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-homePage h-screen w-100 bg-cover'>
      <Navbar/>
      <div className="container h-5/6 mx-auto p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
