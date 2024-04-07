import React from 'react'
import { ProfileAvatar } from '../../../components/Avatar'
import avatarImg from '../../../assets/avatarImg.png'

const User = () => {
  return (
    <div className='
       grid md:grid-cols-4 md:grid-rows-[repeat(3,_12rem)] gap-8
    '>
      {/* USER AVATAR  */}
      <div className='md:col-start-1 md:col-span-1 size-full flex justify-center items-center'>
        <ProfileAvatar src={avatarImg} name={'Sarah Daniels'} title={'Student'} />
      </div>

      <div className='md:col-start-2 md:col-span-3 size-full bg-primary-50 text-[#1A1A1A] p-6 rounded-lg'>
        <div className='h-full font-bold grid md:grid-cols-2 md:place-content-center gap-5'>
          <ul className='space-y-5'>
            <li>Sarah Daniels</li>
            <li>Age: 15</li>
            <li>Grade: 9</li>
          </ul>

          <ul className='space-y-5'>
            <li>Parent/Guardian: Mr & Mrs Daniels</li>
            <li>Contact: 123 456 789</li>
            <li>Address:  Abuja, Nigeria</li>
          </ul>
        </div>
      </div>

      <div className='md:col-start-1 md:col-span-4  min-h-48 size-full bg-white text-[#1A1A1A] py-4 px-6 rounded-lg | shadow-md'>
        <h4 className='font-bold'>Achievements</h4>
      </div>
      <div className='md:col-start-1 md:col-span-4  min-h-48 size-full bg-white text-[#1A1A1A] py-4 px-6 rounded-lg | shadow-md'>
        <h4 className='font-bold'>Payment History</h4>
      </div>
    </div>
  )
}

export default User