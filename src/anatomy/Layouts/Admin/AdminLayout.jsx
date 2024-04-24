import React from 'react'
import ErrorPage from '../../Pages/Error/ErrorPage'
import ErrorBoundary from '../../Pages/Error/ErrorBoundary'
import { Outlet } from 'react-router-dom'
import { AdminHeader } from '../../../components/Header/Headers'

const AdminLayout = () => {
  return (
    <div className='content-grid | min-h-dvh'>
      <AdminHeader />
      <div className={`
        breakout animate-view | p-4
      `}>
        <ErrorBoundary fallback={<ErrorPage />}>
          <Outlet />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default AdminLayout