import React from 'react'
import badge from '../assets/badge.png'

export const HeaderAvatar = ({ src }) => {
  return (
    <figure className='size-12 rounded-full'>
      <img src={src} alt="" />
    </figure>
  )
}

export const ProfileAvatar = ({ src, name, title }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2.5'>
      <div>
        <figure className='size-[100px] rounded-full'>
          <img src={src} alt="" />
        </figure>
      </div>
        
      <div className='flex justify-center items-center gap-2.5'>
        <h4 className='text-lg'>{name}</h4>
        <figure className='w-3'>
          <img src={badge} alt="" />
        </figure>
      </div>

      <p className='text-sm'>{title}</p>
    </div>
  )
}
