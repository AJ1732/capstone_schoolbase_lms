import React from 'react'
import { NavLink } from 'react-router-dom'
import { useValueContext } from '../../context/ContextProvider'
import playLessons from "../../assets/play_lesson.png"
import dashBoard from "../../assets/speed.png"
import user from "../../assets/person (1).png"
import notes from "../../assets/news.png"
import assignment1 from "../../assets/assignment_late.png"
import assignment2 from "../../assets/assignment_turned_in.png"
import video from "../../assets/video_chat.png"
import attendance from "../../assets/event_available.png"
import calender from "../../assets/calendar_month.png"
import logout from "../../assets/move_item.png"


const SidebarItem = ({ children, to, text }) => {
  const { expand, setExpand } = useValueContext();

  return (
    <NavLink to={to} className={({ isActive }) => isActive? 'text-black': 'hover:text-black'}>
      <li onClick={() => setExpand(prev => !prev)} className={`w-full flex items-center justify-center gap-4`}>
        <figure className='rounded-full size-6  text-xs text-[#616161]'>{children}</figure>
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
      w-24 transition-[width] duration-500 ease-in-out ${expand && 'w-64'}
      z-10 max-h-[calc(100dvh_-_90px)] | overflow-y-scroll overflow-x-hidden | 
      bg-[#E8E8E8] py-12 px-8 | font-semibold text-[#616161] 
      flex flex-col justify-start items-start gap-40
    `}>
      <nav>
        <ul className='w-64 flex flex-col justify-center items-start gap-10'>
          {/* DASHBOARD LINK */}
          <SidebarItem to={`/software`} text={`Dashboard`} >
            <img src={dashBoard} alt="speed" />
          </SidebarItem>

          {/* USER LINK */}
          <SidebarItem to={`/software/user`} text={`User`}>
           <img src={user} alt="person" />
          </SidebarItem>

          {/* LESSONS LINK */}
          <SidebarItem to={`/software/lessons`} text={`Lessons`}>
            <img src={playLessons} alt="" />
          </SidebarItem>

          {/* NOTES LINK */}
          <SidebarItem to={`/software/notes`} text={`Notes`}>
          <img src={notes} alt="notes" />
          </SidebarItem>

          {/* ASSIGNMENT LINK */}
          <SidebarItem to={`/software/assignments`} text={`Assignments`}>
            <img src={assignment1} alt="assignment_late" />
          </SidebarItem>

          {/* RESULTS LINK */}
          <SidebarItem to={`/software/results`} text={`Check Results`}>
          <img src={assignment2} alt="assignment_turned_in" />
          </SidebarItem>
          
          {/* CLASSROOM LINK */}
          <SidebarItem to={`/software/classroom`} text={`Virtual Classroom`}>
          <img src={video} alt="video_chat_for_classes" />
          </SidebarItem>
          
          {/* ATTENDANCE LINK */}
          <SidebarItem to={`/software/attendance`} text={`Attendance`}>
          <img src={attendance} alt="attendance_for_events" />
          </SidebarItem>
          
          {/* CALENDAR LINK */}
          <SidebarItem to={`/software/calendar`} text={`Calendar`}>
          <img src={calender} alt="calender_month" />
          </SidebarItem>
        </ul>
      </nav>

      <div>
        <div onClick={() => setExpand(prev => !prev)} className={`
          relative | transition-colors cursor-pointer flex items-center justify-center gap-4
        `}>
          
          <span className='rounded-full size-6'><img src={logout} alt="logout_your_account" />
          </span>
          <span className={`overflow-hidden ${!expand && ' opacity-0'}`}>Logout</span>
          </div>

      </div>
    </aside>
  )
}

export default Sidebar