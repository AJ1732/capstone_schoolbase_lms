import React from 'react'
import { ProfileAvatar } from '../../../Components/Avatar'
import avatarImg from '../../../assets/avatarImg.png'

const User = () => {
  return (
    <div className='
       grid grid-cols-4 grid-rows-[repeat(3,_12rem)] gap-8
    '>
      {/* USER AVATAR  */}
      <div className='col-start-1 col-span-1 size-full flex justify-center items-center'>
        <ProfileAvatar src={avatarImg} name={'Sarah Daniels'} title={'Student'} />
      </div>

      <div className='col-start-2 col-span-3 size-full bg-[#F0F0F0] text-[#1A1A1A] py-4 px-6 rounded-lg'>
      
      </div>

      <div className='col-start-1 col-span-4  min-h-48 size-full bg-[#F0F0F0] text-[#1A1A1A] py-4 px-6 rounded-lg'>
        <h4 className='font-bold'>Achievements</h4>
      </div>
      <div className='col-start-1 col-span-4  min-h-48 size-full bg-[#F0F0F0] text-[#1A1A1A] py-4 px-6 rounded-lg'>
        <h4 className='font-bold'>Payment History</h4>
      </div>
    </div>
  )
}

export default User