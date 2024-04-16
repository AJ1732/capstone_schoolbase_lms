import React from 'react'
import chat from '../../../assets/chat.svg'
import readChat from '../../../assets/read.svg'
import unreadChat from '../../../assets/unread.svg'

const chatData = [
  {
    id: 1,
    title: 'Daily Report for SARAH DANIELS',
    date: '03/18/2023',
    timeSent: '16:00:49',
    read: false
  },
  {
    id: 2,
    title: 'Daily Report for SARAH DANIELS',
    date: '02/11/2023',
    timeSent: '15:30:49',
    read: true
  },
  {
    id: 3,
    title: 'CBT Invite - General Studies, Mathematics, FIRST TERM',
    date: '17/10/2023',
    timeSent: '',
    read: false
  },
  {
    id: 4,
    title: 'Video Sharing - ENGLISH, PHONETICS',
    date: '',
    timeSent: '',
    read: true
  }
]

const Communication = () => {
  return (
    <section className='flex flex-col justify-start items-start gap-9 mb-10'>
      {/* CHAT HEADER */}
      <div className='md:col-span-3 | w-full bg-primary-50 p-5 md:px-12 rounded-md gap-5 | flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-semibold text-lg tracking-wide'>Chat</h1>
        <img src={chat} alt="" />
      </div>
    
      {/* CHATS */}
      <div className='w-full flex flex-col justify-start items-center gap-5'>
        {chatData.map( ({id, title, date, timeSent, read}) => (
          <div key={id} className='w-full bg-primary-50 p-3 rounded-md | flex justify-between items-center'>
            <h3 className='font-semibold text-text-black'>
              <span>{title}</span> 
              {date && <span> - {date}</span>}
              {timeSent && <span> - {timeSent}</span>}
            </h3>
            <figure>
              {read? <img src={readChat} />: <img src={unreadChat} />}
            </figure>
          </div>
        ))}
      </div>

      {/* CHAT BUTTONS */}
      <div className='mt-20 text-xs sm:self-end | flex flex-col sm:flex-row gap-5 sm:gap-10'>
        <button className='bg-primary-50 text-primary-00 py-3 px-12 rounded-md'>
          Send Message
        </button>
        <button  className='text-white bg-primary-00 py-3 px-12 rounded-md'>
          Schedule Call
        </button>
      </div>
    </section>
  )
}

export default Communication