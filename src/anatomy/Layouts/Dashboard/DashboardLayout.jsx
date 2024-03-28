import React from 'react'
import { Outlet } from 'react-router'
import { DashboardHeader } from '../../../components/Header.jsx/Headers'
import Sidebar from '../../../components/Sidebar/Sidebar'
import './Dashboard.css'

const DashboardLayout = () => {
  return (
    <div className='min-h-dvh | font-manrope grid grid-cols-[6rem_1fr]'>
      <DashboardHeader />
      <Sidebar />
      <div className='max-w-[72rem] p-4 pr-12'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout