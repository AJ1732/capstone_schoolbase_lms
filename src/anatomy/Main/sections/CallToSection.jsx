import React from 'react'
import { WhiteButton3 } from '../../../components/Buttons'
import logo from "../../../assets/school-B-logo.png"

const CallToSection = () => {
  return (
    <section className="full-width content-grid | min-h-[150px] bg-[#D9E0FF] bg-opacity-80">
      <div className="content | font-generalSans py-10 text-[#0B1A3A] size-full flex justify-between items-center">
        <div className='flex flex-col items-start justify-center gap-2 ml-10'>
          <h4 className='heading'>Subscribe to Our Newsletter</h4>
          <p className='text-sm'>Subscribe to our Newsletter to receive our blog post, offers, promotions, etc.</p>

          <WhiteButton3 className={`text-xs py-[10px] px-10 mt-2`}>Subscribe Now</WhiteButton3>
        </div>

        <div className='w-[313px] h-[75px] mr-10'>
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  )
}

export default CallToSection 

