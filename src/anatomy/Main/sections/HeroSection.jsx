import React from 'react'
import { HeroForm } from '../../../components/Forms'
import { TransButton } from '../../../components/Buttons'

const HeroSection = () => {
  return (
    <section className="full-width content-grid | w-full min-h-[515px] text-white bg-black bg-opacity-80">
      <div className="content | size-full | flex justify-between items-center">
        <div className='flex flex-col justify-center items-start gap-5'>
          <h2 className='font-semibold text-2xl'>Transforming Education with our Versatile Learning Management System</h2>
          <p className='font-medium text-xl'>Empowering K-12 Education for the Digital Age</p>
          <div className='space-x-5 mt-2'>
            <TransButton>Download Now</TransButton>
            <TransButton>Learn More</TransButton>
          </div>
        </div>

        <HeroForm />
      </div>
    </section>
  )
}

export default HeroSection