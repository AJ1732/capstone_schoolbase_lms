import React from 'react'
import { NavButton } from '../../../../components/Button/Buttons'

const CBTSection = () => {
  return (
    <section className='
      md:col-start-2 md:col-span-2 | bg-white size-full rounded-lg | px-9 py-8 | drop-shadow-md
      flex justify-start items-center
    '>
      <div className='h-full flex flex-col justify-between items-start gap-5'>
        <h4 className='font-bold'>Your Last CBT score</h4>
        <p className='font-semibold text-4xl text-primary-900'>76/100</p>
        <div className='flex justify-center items-center gap-12'>
          <NavButton className={`text-primary-900 border border-primary-100`}>Retake Test</NavButton>
          <NavButton className={`!bg-primary-00 text-white`}>New CBT Test</NavButton>
        </div>
      </div>
    </section>
  )
}

export default CBTSection