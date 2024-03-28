import React from 'react'
import { Outlet } from 'react-router'
import { DashboardHeader } from '../../../Components/Header/Headers'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import './Dashboard.css'

const DashboardLayout = () => {
  return (
    <div className='min-h-dvh | font-manrope grid grid-cols-[6rem_1fr]'>
      <DashboardHeader />
      <Sidebar />
      <div className='max-w-[72rem] max-h-[calc(100dvh_-_90px)] | p-4 pr-12 | overflow-y-scroll no-scrollbar'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout