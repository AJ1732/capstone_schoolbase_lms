import React, { useState } from 'react'
import cbt from '../../../assets/cbt.svg'
import { CommAccordion } from '../../../components/Accordion/Accordions'

const Communication = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className='grid grid-cols-1 gap-7'>
      <div className='min-h-56 bg-[#F0F0F0] | py-4 pl-9 pr-24 | flex justify-between items-center rounded-lg'>
        <h4 className='font-semibold text-xl text-[#1A1A1A] '>CBT Center</h4>
        <figure>
          <img src={cbt} alt="CBT image" />
        </figure>
      </div>

      <CommAccordion status={`Ongoing`} title={`1 Subject`} content={`This is Content`} />
    </section>
  )
}

export default Communication