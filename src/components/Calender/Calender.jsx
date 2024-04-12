import React, { useState } from 'react'
import './Calender.css'
import { cn } from '../../utils/cn';
import { days, months, currentDate, currentMonthIndex, currentYear, generateDate, generateWeekDate } from '../../utils/calenderData';
import dayjs from 'dayjs';

export const MonthCalender = () => {
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className='flex flex-col justify-center items-start gap-5 md:flex-row md:items-center'>
      <div className='bg-[#F8F8F8] size-fit p-5 text-black space-y-5 rounded-3xl'>
        {/* MONTH */}
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold text-[#1A1A1A] text-center'>{months[today.month()]}, {today.year()} </h3>

          <div className='flex justify-center items-center gap-2 cursor-pointer'>
            <button onClick={() => {setToday(today.month(today.month() - 1))}}> {`<`} </button>
            <h1 onClick={()=> setToday(currentDate)}>Today</h1>
            <button onClick={() => {setToday(today.month(today.month() + 1))}}> {`>`} </button>
          </div>
        </div>

        {/* DAYS */}
        <div className='w-full grid grid-cols-7 gap-3'>
          {days.map((day, index) => (
            <div key={index} className='calender_day_tiles'>
              <p className=''>{day}</p>
            </div>
          ))}
        </div>
        
        {/* DATES */}
        <div className='size-full grid grid-cols-7 grid-rows-6 gap-3'>
          {generateDate( today.month(), today.year()).arrayOfMonthDate.map(({ date, currentMonth, today }, index) => (
            <div key={index} className='calender_date_tiles' onClick={() => setSelectDate(date)}>
              <p className={`
                ${cn(
                  currentMonth? "text-black": "text-[#676767]", 
                  today? "bg-primary-00 text-white": "bg-white",
                  selectDate.toDate().toDateString() === date.toDate().toDateString() && 'bg-black text-black'
                )}
              `}>{date.date()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SCHEDULE */}
      <div className='space-y-1'>
        <h3 className='font-semibold text-black-800 text-xl'>Schedule for <span className='font-bold text-primary-900'>{selectDate.toDate().toDateString()}</span></h3>
        <p className='text-sm text-black-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, praesentium?</p>
      </div>
    </div>
  )
}

export const WeekCalender = () => {
  const [today] = useState(currentDate);

  return (
    <div className='bg-primary-50 size-fit py-4 px-2 text-black rounded-3xl'>
      {/* MONTH */}
      <div className='flex justify-between items-center px-3 mb-4'>
        <div className='size-2 rounded-full bg-[#1A1A1A]'></div>
        <h3 className='font-semibold text-[#1A1A1A] text-center'>{months[currentMonthIndex]}, {currentYear}</h3>
        <div className='size-2 rounded-full bg-[#1A1A1A]'></div>
      </div>

      {/* DAYS */}
      <div className='w-full grid grid-cols-7 gap-1.5'>
        {days.map((day, index) => (
          <div key={index} className={`calender_day_tiles ${cn(dayjs().day() === index && "bg-primary-00 rounded-b-none")}`}>
            <p className={`${cn(dayjs().day() === index? "text-white": "text-[#676767]")}`}>{day}</p>
          </div>
        ))}
      </div>

      {/* DATES */}
      <div className='size-full grid grid-cols-7 gap-1.5'>
        {generateWeekDate()
          .arrayOfWeekDate.map(({ date, today }, index) => (
            <div key={index} className={`calender_date_tiles ${cn(today && "bg-primary-00 rounded-t-none" )}`}>
              <p className={`
                bg-white | ${cn(today? "text-black": 'text-[#676767]')}
              `}>{date}</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}