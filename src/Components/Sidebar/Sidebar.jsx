import React from 'react'
import { Link } from 'react-router-dom'
import { useValueContext } from '../../context/ContextProvider'

const SidebarItem = ({ children, to }) => {
  return (
    <Link to={to}>
      <li className='size-6 bg-dark-gray rounded-full'>{children}</li>
    </Link>
  )
}

const Sidebar = () => {
  const { expand, setExpand } = useValueContext();

  return (
    <aside className='
      z-10 w-fit max-h-[calc(100dvh_-_90px)] | overflow-y-scroll no-scrollbar | 
      bg-[#E8E8E8] py-12 px-9 | text-center flex justify-start items-start
    '>
      <nav>
        <ul className='flex flex-col gap-10'>
          {/* DASHBOARD LINK */}
          <SidebarItem to={`/software`}>1</SidebarItem>

          {/* USER LINK */}
          <SidebarItem to={`/software/user`}>2</SidebarItem>

          {/* LESSONS LINK */}
          <SidebarItem to={`/software/lessons`}>3</SidebarItem>

          {/* NOTES LINK */}
          <SidebarItem to={`/software/notes`}>4</SidebarItem>

          {/* ASSIGNMENT LINK */}
          <SidebarItem to={`/software/assignments`}>5</SidebarItem>

          {/* RESULTS LINK */}
          <SidebarItem to={`/software/results`}>6</SidebarItem>
          
          {/* CLASSROOM LINK */}
          <SidebarItem to={`/software/classroom`}>7</SidebarItem>
          
          {/* ATTENDANCE LINK */}
          <SidebarItem to={`/software/attendance`}>8</SidebarItem>
          
          {/* CALENDAR LINK */}
          <SidebarItem to={`/software/calendar`}>9</SidebarItem>
          
        
          <li className='mt-20'>
            <div className='size-6 bg-dark-gray rounded-full'>0</div>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar