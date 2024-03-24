import React from 'react'
import data from '../../../database/data.json'
import { TestimonialCard } from '../../../components/Cards'

const TestimonialSection = () => {
  const { testimonials } = data;

  return (
    <section id='testimonials' className="full-width content-grid | w-full min-h-[480px] | bg-black bg-opacity-80 | border border-black flex-center">
      <div className='breakout | py-8 space-y-10'>
        <h1 className="font-generalSans font-semibold text-2xl text-white">Testimonials</h1>

        <div className='grid grid-cols-3 gap-4'>
          {testimonials.map( testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              img={testimonial.img} 
              author={testimonial.author} 
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection