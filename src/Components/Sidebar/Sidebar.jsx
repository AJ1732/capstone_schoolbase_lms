import React from 'react'
import { NavLink } from 'react-router-dom'
import { useValueContext } from '../../context/ContextProvider'
import playLessons from "../../assets/play_lesson.png"


const SidebarItem = ({ children, to, text, active, alert }) => {
  const { expand, setExpand } = useValueContext();
  console.log(expand);

  return (
    <NavLink to={to} className={({ isActive }) => isActive? 'text-black': 'hover:text-black'}>
      <li onClick={() => setExpand(prev => !prev)} className={`flex items-center justify-center gap-4`}>
        <span className='rounded-full size-6'>{children}</span>
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
      z-10 max-h-[calc(100dvh_-_90px)] | overflow-y-scroll | 
      bg-[#E8E8E8] py-12 px-9 | font-semibold text-[#616161] 
      flex flex-col justify-start items-start gap-40
    `}>
      <nav>
        <ul className='flex flex-col justify-center items-start gap-10'>
          {/* DASHBOARD LINK */}
          <SidebarItem to={`/software`} text={`Dashboard`} >

          </SidebarItem>

          {/* USER LINK */}
          <SidebarItem to={`/software/user`} text={`User`}>

          </SidebarItem>

          {/* LESSONS LINK */}
          <SidebarItem to={`/software/lessons`} text={`Lesson`}>
            <img src={playLessons} alt="" />
          </SidebarItem>

          {/* NOTES LINK */}
          <SidebarItem to={`/software/notes`} text={`Notes`}>

          </SidebarItem>

          {/* ASSIGNMENT LINK */}
          <SidebarItem to={`/software/assignments`} text={`Assignment`}>

          </SidebarItem>

          {/* RESULTS LINK */}
          <SidebarItem to={`/software/results`} text={`Results`}>

          </SidebarItem>
          
          {/* CLASSROOM LINK */}
          <SidebarItem to={`/software/classroom`} text={`Classroom`}>

          </SidebarItem>
          
          {/* ATTENDANCE LINK */}
          <SidebarItem to={`/software/attendance`} text={`Attendance`}>

          </SidebarItem>
          
          {/* CALENDAR LINK */}
          <SidebarItem to={`/software/calendar`} text={`Calendar`}>

          </SidebarItem>
        </ul>
      </nav>

      <div>
        <div onClick={() => setExpand(prev => !prev)} className={`
          relative | space-x-4 transition-colors cursor-pointer
        `}>
          <span className='bg-dark-gray p-2 rounded-full'>0
          </span>
          <span className={`overflow-hidden ${!expand && ' opacity-0'}`}>Logout</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar