import React from 'react'

const Sidebar = () => {
  return (
    <aside className='max-w-24 h-[calc(100dvh_-_90px)] bg-[#E8E8E8] py-12 flex justify-center items-start'>
      <ul className='flex flex-col gap-10'>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'></div>
        </li>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'></div>
        </li>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'></div>
        </li>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'></div>
        </li>
        <li>
          <div className='size-6 bg-dark-gray rounded-full'></div>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar