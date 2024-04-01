import React, { useState } from 'react'

export const CommAccordion = ({ title, status, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-[#F0F0F0] text-[#1A1A1A] py-7 px-5 rounded-lg flex flex-col '>
      <div onClick={() => setOpen(!open)} className='w-full flex justify-between items-center'>
        <div className='font-semibold flex flex-col gap-5'>
          <span>{status}</span>
          <span className='text-xl'>{title}</span>
        </div>
        <span>+</span>
      </div>

      <div className={`
        grid overflow-hidden transition-all duration-300 ease-in-out 
        ${open? 'grid-rows-[1fr] opacity-100 pt-8': 'grid-rows-[0fr] opacity-0'}
      `}>
        <p className='overflow-hidden'>{content}</p>
      </div>
    </div>
  )
}