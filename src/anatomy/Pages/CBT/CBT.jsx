import React from 'react'
import cbt from '../../../assets/cbt.png'
import { CommAccordion } from '../../../components/Accordion/Accordions'

const CBT = () => {
  return (
    <section className='grid grid-cols-1 gap-7'>
      <div className='min-h-56 bg-primary-10 | py-4 pl-9 pr-24 | flex justify-between items-center rounded-lg'>
        <h4 className='font-semibold text-xl text-[#1A1A1A] '>CBT Center</h4>
        <figure className='w-64'>
          <img src={cbt} alt="CBT image" />
        </figure>
      </div>

      <CommAccordion status={`Ongoing`} title={`1 Subject`} content={`This is Content`} />
      <CommAccordion status={`Open for Retake`} title={`12 Subject`} content={`This is Content`} />
      <CommAccordion status={`Completed`} title={`17 Subject`} content={`This is Content`} />
    </section>
  )
}

export default CBT