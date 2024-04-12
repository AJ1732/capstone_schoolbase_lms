import React from 'react'
import './Loaders.css'
import { twMerge } from 'tailwind-merge'

export const AuthLoader1 = () => {
  return (
    <div className='
      h-dvh bg-primary-50 
      flex justify-center items-center
    '>
      <p className='
      loader-1 | text-9xl bg-gradient-to-r
      '>Loading...</p>
    </div>
  )
}

export const AuthLoader2 = ({ divClassName, parentClassName }) => {
  return (
    <div className={twMerge('h-dvh bg-primary-50 | grid place-content-center', parentClassName)}>
      <div className="loader-2">
        {[ 1, 2, 3, 4, 5, 6, 7 ].map( item => (
          <div key={item} className={twMerge(`size-8 rounded-full m-2 scale-0 animate-bead inline-block`, divClassName)}></div>
        ))}
      </div>
    </div>
  )
}

// divClassName


