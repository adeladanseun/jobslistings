import React from 'react'
import '../assets/styles/mainlayout.css'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <div className='mainWrapper'>
        <div className='topWrapper'></div>{/* For the top banner image */}
        <div className='jobsWrapper'>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout