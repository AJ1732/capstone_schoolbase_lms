import React, { useState } from 'react'

export const CommAccordion = ({ title, status, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-white text-[#1A1A1A] rounded-lg flex flex-col '>
      <div onClick={() => setOpen(!open)} className='w-full flex justify-between items-center py-7 px-5'>
        <div className='font-semibold flex flex-col gap-5'>
          <span>{status}</span>
          <span className='text-xl text-primary-00'>{title}</span>
        </div>
        <span className='font-bold text-2xl '>
          {open? '-': '+'} 
        </span>
      </div>

      <div className={`
        w-full bg-primary-50 text-text-black rounded-b-lg
        grid overflow-hidden transition-all duration-300 ease-in-out 
        ${open? 'grid-rows-[1fr] opacity-100 py-7 px-5': 'grid-rows-[0fr] opacity-0'}
      `}>
        <p className='overflow-hidden font-medium'>{content}</p>
      </div>
    </div>
  )
}