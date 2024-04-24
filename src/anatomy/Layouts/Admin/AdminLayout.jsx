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
        full-width animate-view
        col-start-2 | max-h-[calc(100dvh_-_90px)] | p-4 pr-12 | overflow-y-scroll
      `}>
        <ErrorBoundary fallback={<ErrorPage />}>
          <Outlet />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default AdminLayout