
import { Outlet } from 'react-router'
import { HomePageHeader } from '../../../components/Header.jsx/Headers'

const HomeLayout = () => {
  return (
    <div className='content-grid | min-h-dvh'>
      <HomePageHeader />
      <Outlet />
    </div>
  )
}

export default HomeLayout