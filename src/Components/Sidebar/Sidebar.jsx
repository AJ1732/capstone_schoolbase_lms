import React from 'react'
import { NavLink } from 'react-router-dom'
import { useValueContext } from '../../context/ContextProvider'

const SidebarItem = ({ children, to, text, active, alert }) => {
  const { expand, setExpand } = useValueContext();
  console.log(expand);

  return (
    <NavLink to={to} className={({ isActive }) => isActive? 'text-black': 'hover:text-black'}>
      <li onClick={() => setExpand(prev => !prev)} className={`space-x-4`}>
        <span className='bg-dark-gray p-2 rounded-full'>{children}</span>
        <span className={`overflow-hidden ${!expand && ' opacity-0'}`}>{text}</span>
      </li>
    </NavLink>
  )
  
}

// ${!expand && 'absolute opacity-0'}

const Sidebar = () => {
  const { expand, setExpand } = useValueContext();

  return (
    <aside className={`
      w-24 transition-[width] duration-500 ease-in-out ${expand && 'w-52'}
      z-10 max-h-[calc(100dvh_-_90px)] | overflow-y-scroll no-scrollbar | 
      bg-[#E8E8E8] py-12 px-9 | font-semibold text-[#616161] 
      flex flex-col justify-start items-start gap-40
    `}>
      <nav>
        <ul className='flex flex-col justify-center items-start gap-10'>
          {/* DASHBOARD LINK */}
          <SidebarItem to={`/software`} text={`Dashboard`}>1</SidebarItem>

          {/* USER LINK */}
          <SidebarItem to={`/software/user`} text={`User`}>2</SidebarItem>

          {/* LESSONS LINK */}
          <SidebarItem to={`/software/lessons`} text={`Lesson`}>3</SidebarItem>

          {/* NOTES LINK */}
          <SidebarItem to={`/software/notes`} text={`Notes`}>4</SidebarItem>

          {/* ASSIGNMENT LINK */}
          <SidebarItem to={`/software/assignments`} text={`Assignment`}>5</SidebarItem>

          {/* RESULTS LINK */}
          <SidebarItem to={`/software/results`} text={`Results`}>6</SidebarItem>
          
          {/* CLASSROOM LINK */}
          <SidebarItem to={`/software/classroom`} text={`Classroom`}>7</SidebarItem>
          
          {/* ATTENDANCE LINK */}
          <SidebarItem to={`/software/attendance`} text={`Attendance`}>8</SidebarItem>
          
          {/* CALENDAR LINK */}
          <SidebarItem to={`/software/calendar`} text={`Calendar`}>9</SidebarItem>
        </ul>
      </nav>

      <div>
        <div onClick={() => setExpand(prev => !prev)} className={`
          relative | space-x-4 transition-colors cursor-pointer
        `}>
          <span className='bg-dark-gray p-2 rounded-full'>0</span>
          <span className={`overflow-hidden ${!expand && ' opacity-0'}`}>Logout</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar