import React from 'react'
import { NavButton } from '../../../../components/Button/Buttons'

const CBTSection = () => {
  return (
    <section className='
      col-start-2 col-span-2 | bg-[#F0F0F0] size-full rounded-lg | px-9 py-8
      flex justify-start items-center
    '>
      <div className='h-full flex flex-col justify-between items-start'>
        <h4 className='font-bold'>Your Last CBT score</h4>
        <p className='font-semibold text-4xl text-[#1A1A1A]'>76/100</p>
        <div className='space-x-12'>
          <NavButton>Retake Test</NavButton>
          <NavButton>New CBT Test</NavButton>
        </div>
      </div>
    </section>
  )
}

export default CBTSection