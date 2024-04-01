import React from 'react'
import { Outlet } from 'react-router'
import { SoftwareHeader } from '../../../components/Header/Headers'
// import SoftwareHeader from '../../../components/Header/Headers'
import Sidebar from '../../../components/Sidebar/Sidebar'
import './Software.css'

const SoftwareLayout = () => {
  return (
    <div className='min-h-dvh | font-manrope grid grid-cols-[6rem_1fr]'>
      <SoftwareHeader />
      <Sidebar />
      <div className='max-w-[72rem] max-h-[calc(100dvh_-_90px)] | p-4 pr-12 | overflow-y-scroll no-scrollbar'>
        <Outlet />
      </div>
    </div>
  )
}

export default SoftwareLayout