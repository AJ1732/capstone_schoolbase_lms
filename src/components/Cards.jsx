/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import data from '../database/data.json'
import testimonial_icon from '../assets/testimonial_icon.png'
// import image from '../assets/feature.png'

export const FeatureCard = ({heading, title, content, className}) => {
  const [dropDownopen, setDropDownopen] = useState(false)
  
  return (
    <article className={`max-w-[610px] w-full text-left flex justify-start items-center gap-7 ${className}`}>
      
      <div className='flex flex-col justify-start items-start gap-3'>
        <h3 className='font-bold'>{heading}</h3>
        <p className='text-sm'>
          <span className='font-semibold'>{title}</span> {content}
        </p>
      </div>
    </article>
  )
}

export const TestimonialCard = ({ img, author, content, className }) => {
  return (
    <article className='max-w-[428px] bg-white font-generalSans text-black text-left text-sm p-5 space-y-5'>
      <figure className='size-6 py-[6px] px-[4px]'>
        <img src={testimonial_icon} />
      </figure>

      <p>{content}</p>

      <div className='flex justify-start items-center gap-5'>
        <figure className='w-[61px] h-[58px]'>
          <img src={img} alt="author image" />
        </figure>
        <div>
          <h4 className='font-medium text-base'>{author.name}</h4>
          <p>{author.title}</p>
        </div>
      </div>
    </article>
  )
}

export const TeamCard = ({ img, author, className }) => {
  return (
    <article className='w-[354px] font-generalSans text-black text-left text-sm pb-5 space-y-4'>
      <figure className='w-full h-[237px]'>
        <img src={img} alt="author image" />
      </figure>

      <div className='space-y-2'>
        <h4 className='font-semibold text-xl'>{author.name}</h4>
        <p className='text-xl'>{author.title}</p>
      </div>
    </article>
  )
}

export const ChooseCard = ({ img, heading, content, className}) => {
  return (
    <article className={`w-[600px] h-[130px] font-generalSans text-start grid grid-cols-2 items-center ${className}`}>
      <div>
        <figure className='w-[215px] h-full'>
        <img src={img} alt="choose image" className="w-12 mb-10" />
      </figure>
      </div>
      
      <div className='w-[390px] grid grid-cols-1 gap-3 -ml-52'>
        <h3 className='font-semibold'>{heading}</h3>
        <p className='text-xs'>
          {content}
        </p>
      </div>
    </article>
  )
}

