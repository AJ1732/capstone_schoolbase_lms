import React from 'react'
import { Outlet } from 'react-router'
import { useValueContext } from '../../../context/ContextProvider'
import { SoftwareHeader } from '../../../components/Header/Headers'
import Sidebar from '../../../components/Sidebar/Sidebar'
import './Software.css'
import ErrorBoundary from '../../Pages/Error/ErrorBoundary'
import ErrorPage from '../../Pages/Error/ErrorPage'

const SoftwareLayout = () => {
  const { expand } = useValueContext();
  return (
    <div className='min-h-dvh | font-manrope grid grid-cols-[6rem_1fr]'>
      <SoftwareHeader />
      <Sidebar />
      <div className={`
        ${expand && ""} animate-view
        col-start-2 |  max-w-[72rem] max-h-[calc(100dvh_-_90px)] |
        p-4 pr-12 | overflow-y-scroll
      `}>
        <ErrorBoundary fallback={<ErrorPage />}>
          <Outlet />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default SoftwareLayout