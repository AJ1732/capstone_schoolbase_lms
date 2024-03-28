import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='
      max-w-24 max-h-[calc(100dvh_-_90px)] | overflow-y-scroll no-scrollbar | bg-[#E8E8E8] py-12 
      text-center flex justify-center items-start
    '>
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
        
        <li>
          <div className='size-6 bg-dark-gray rounded-full'>3</div>
        </li>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'>4</div>
        </li>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'>5</div>
        </li>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'>6</div>
        </li>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'>7</div>
        </li>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'>8</div>
        </li>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'>9</div>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar