import React from 'react'
import { HeroForm } from '../../../components/Forms'
import { TransButton, WhiteButton2 } from '../../../components/Buttons'
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section className="full-width content-grid | w-full min-h-[515px] bg-image ">
      <div className="content | size-full | flex justify-between items-center">
        <div className='z-10 flex flex-col justify-center items-start gap-5 ml-16'>
          <h2 className='font-generalSans font-extrabold text-5xl text-white tracking-wider mt-5 ml-3'>Transforming Education </h2>
          <h2 className='font-generalSans font-extrabold text-5xl text-white tracking-wider ml-3'>with our <span className='text-[#007BFF]'>Versatile LMS</span> </h2>
          <p className='font-medium text-md text-[#ffffff] tracking-wider ml-1'>Empowering K-12 Education for the Digital Age</p>
          <div className='space-x-5 mt-2 ml-1'>
            <TransButton>Download Now</TransButton>
            <WhiteButton2>Learn More</WhiteButton2>
          </div>
        </div>

        <HeroForm />
      </div>
    </section>
  )
}

export default HeroSection