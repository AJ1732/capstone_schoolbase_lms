import React from 'react'
import { MonthCalender } from './../../../components/Calender/Calender';
import longlogo from "../../../assets/logo-full.svg"


const Calendar = () => {
  return (
    <>
    <div className='bg-[#F0F2FF] h-[220px] rounded-md'>
      <img src={longlogo} alt="logo" className='pt-5' />
    <h1 className='ml-16 font-semibold text-lg pt-14 tracking-wide'>Calendar</h1>
    </div>

    <div className='bg-white h-auto w-auto p-5 rounded-lg mt-7 mb-20 shadow'>
      <MonthCalender />
    </div>
    
    </>

    
  )
}

export default Calendar