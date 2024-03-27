import React from 'react'
import { Outlet } from 'react-router'
import { HomePageHeader } from '../../../components/Header.jsx/Headers'

const HomeLayout = () => {
  return (
    <div>
      <HomePageHeader />
      <Outlet />
    </div>
  )
}

export default HomeLayout