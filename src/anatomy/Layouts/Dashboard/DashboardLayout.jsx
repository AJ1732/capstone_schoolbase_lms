import React from 'react'
import { Outlet } from 'react-router'
import { DashboardHeader } from '../../../components/Header.jsx/Headers'
import Sidebar from '../../../components/Sidebar/Sidebar'
import './Dashboard.css'

const DashboardLayout = () => {
  return (
    <div className='layout | min-h-dvh |  '>
      <DashboardHeader />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout