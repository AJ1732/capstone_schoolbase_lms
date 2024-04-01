import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='
      max-w-24 max-h-[calc(100dvh_-_90px)] | overflow-y-scroll no-scrollbar | bg-[#E8E8E8] py-12 
      text-center flex justify-center items-start
    '>
      <nav>
        <ul className='flex flex-col gap-10'>
          {/* DASHBOARD LINK */}
          <Link to={`/software`}>
            <li>
              <div className='size-6 bg-dark-gray rounded-full'>1</div>
            </li>
          </Link>

          {/* USER LINK */}
          <Link to={`/software/user`}>
            <li>
              <div className='size-6 bg-dark-gray rounded-full'>2</div>
            </li>
          </Link>

          {/* LESSONS LINK */}
          <Link to={`/software/lessons`}>
            <li>
              <div className='size-6 bg-dark-gray rounded-full'>3</div>
            </li>
          </Link>

          {/* NOTES LINK */}
          <Link to={`/software/notes`}>
            <li>
              <div className='size-6 bg-dark-gray rounded-full'>4</div>
            </li>
          </Link>

          {/* ASSIGNMENT LINK */}
          <Link to={`/software/assignments`}>
            <li>
              <div className='size-6 bg-dark-gray rounded-full'>5</div>
            </li>
          </Link>

          {/* RESULTS LINK */}
          <Link to={`/software/results`}>
            <li>
              <div className='size-6 bg-dark-gray rounded-full'>6</div>
            </li>
          </Link>
          
          {/* CLASSROOM LINK */}
          <Link to={`/software/classroom`}>
            <li>
              <div className='size-6 bg-dark-gray rounded-full'>7</div>
            </li>
          </Link>
          
          {/* ATTENDANCE LINK */}
          <Link to={`/software/attendance`}>
            <li>
              <div className='size-6 bg-dark-gray rounded-full'>8</div>
            </li>
          </Link>
          
          {/* CALENDAR LINK */}
          <Link to={`/software/calendar`}>
            <li>
              <div className='size-6 bg-dark-gray rounded-full'>9</div>
            </li>
          </Link>
          
        
          <li className='mt-20'>
            <div className='size-6 bg-dark-gray rounded-full'>0</div>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar