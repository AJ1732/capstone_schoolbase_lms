import React from 'react'

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
      <div className='relative'>
        <svg className='absolute -left-4 size-[130px]' xmlns="http://www.w3.org/2000/svg" width="131" height="130" viewBox="0 0 131 130" fill="none">
          <path d="M6.13023 91.4619C2.50953 83.3385 0.594419 74.5585 0.503404 65.6652C0.412388 56.7719 2.14741 47.9545 5.60109 39.7587L9.37991 41.3511C6.14411 49.0299 4.51854 57.291 4.60382 65.6232C4.68909 73.9555 6.48339 82.1816 9.87567 89.7925L6.13023 91.4619Z" fill="#F0F2FF"/>
          <path d="M7.51194 35.6336C12.7274 25.3349 20.5916 16.6109 30.296 10.3586C40.0004 4.10634 51.1949 0.551346 62.7285 0.0591151L62.9033 4.15601C52.0973 4.61719 41.6091 7.94791 32.5169 13.8058C23.4248 19.6636 16.0567 27.8372 11.1702 37.4862L7.51194 35.6336Z" fill="#E3E8FF"/>
          <path d="M67.0622 0.0187767C77.9571 0.280706 88.6113 3.27776 98.0449 8.73431C107.479 14.1909 115.389 21.9317 121.048 31.2451L117.544 33.3746C112.241 24.6488 104.83 17.3962 95.9918 12.2839C87.1533 7.1716 77.1713 4.36363 66.9637 4.11822L67.0622 0.0187767Z" fill="#007BFF"/>
          <path d="M123.298 35.2618C127.91 44.2259 130.374 54.1399 130.495 64.2202C130.616 74.3004 128.391 84.2707 123.995 93.3428L120.305 91.5548C124.423 83.055 126.508 73.7137 126.395 64.2694C126.282 54.825 123.973 45.5365 119.652 37.1379L123.298 35.2618Z" fill="#00337C"/>
        </svg>
        <figure className='size-[100px] mt-4 rounded-full'>
          <img src={src} alt="" />
        </figure>
      </div>
        
      <div className='flex justify-center items-center gap-2.5'>
        <h4 className='text-lg'>{name}</h4>
        <svg className='ssize-3' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
         <path fillRule="evenodd" clipRule="evenodd" d="M2 4.62037C2 4.06052 2.32971 3.55318 2.8413 3.32581L7.79962 1.1221C8.16597 0.959299 8.58403 0.959299 8.95038 1.1221L13.9087 3.32581C14.4203 3.55318 14.75 4.06052 14.75 4.62037V9.36641C14.75 13.529 10.257 15.6947 8.81488 16.2826C8.53105 16.3983 8.21902 16.3983 7.93512 16.2826C6.49304 15.6947 2 13.529 2 9.36641V4.62037ZM11.5625 6.17888C11.77 6.38634 11.77 6.72272 11.5625 6.93018L8.0423 10.4504C7.83483 10.6578 7.49851 10.6578 7.29104 10.4504L5.54167 8.701C5.3342 8.49353 5.3342 8.15721 5.54167 7.94974C5.74913 7.74227 6.0855 7.74227 6.29297 7.94974L7.66667 9.32341L10.8112 6.17888C11.0186 5.97142 11.355 5.97142 11.5625 6.17888Z" fill="#2C928E"/>
        </svg>
      </div>

      <p className='text-sm'>{title}</p>
    </div>
  )
}
