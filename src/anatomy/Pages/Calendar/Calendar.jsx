import React from 'react'
import { MonthCalender } from './../../../components/Calender/Calender';
import longlogo from "../../../assets/logo-full.svg"


const Calendar = () => {
  return (
    <section className='flex flex-col'>
      <div className='bg-primary-50 py-4 px-12 h-[220px] rounded-md | flex justify-start items-center'>
        <h1 className='font-semibold text-lg tracking-wide'>Calendar</h1>
      </div>

      <div className='h-auto w-auto rounded-lg mt-7 mb-20 self-start'>
        <MonthCalender />
      </div>
    </section>
  )
}

export default Calendar