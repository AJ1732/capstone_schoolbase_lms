import React from 'react'
import { WhiteButton } from '../../../components/Buttons'

const CallToSection = () => {
  return (
    <section className="full-width content-grid | min-h-[150px] bg-black bg-opacity-80">
      <div className="content | font-generalSans py-10 text-white size-full flex justify-between items-center">
        <div className='flex flex-col items-start justify-center gap-2'>
          <h4 className='heading'>Subscribe to Our Newsletter</h4>
          <p className='text-sm'>Subscribe to our Newsletter to receive our blog post, offers, promotions, etc.</p>
          <WhiteButton className={`text-xs py-[10px] px-10 mt-2`}>Subscribe Now</WhiteButton>
        </div>

        <div className='w-[313px] h-[75px] bg-light-gray'></div>
      </div>
    </section>
  )
}

export default CallToSection