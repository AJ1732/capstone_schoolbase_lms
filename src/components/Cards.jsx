import React from 'react'
import data from '../database/data.json'
import testimonial_icon from '../assets/testimonial_icon.png'
// import image from '../assets/feature.png'

export const FeatureCard = ({ img, heading, title, content, className}) => {
  return (
    <article className={`max-w-[610px] w-full flex justify-start items-center gap-8 ${className}`}>
      <figure className='min-w-[300px] h-[225px] bg-dark-gray'>
        <img src={img} alt="feature image" />
      </figure>
      <div className='flex flex-col justify-start items-start gap-3'>
        <h3 className='font-bold'>{heading}</h3>
        <p className='text-sm'>
          <span className='font-semibold'>{title}</span>: {content}
        </p>
      </div>
    </article>
  )
}

export const TestimonialCard = ({ img, author, content, className }) => {
  return (
    <article className='max-w-[428px] bg-white font-generalSans text-black text-sm p-5 space-y-5'>
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