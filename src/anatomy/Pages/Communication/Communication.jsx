import React, { useState } from 'react'
import cbt from '../../../assets/cbt.svg'
import './Communication.css'

const Communication = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className='grid grid-cols-1 gap-7'>
      <div className='min-h-56 bg-[#F0F0F0] | py-4 pl-9 pr-24 | flex justify-between items-center rounded-lg'>
        <h4 className='font-semibold text-xl text-[#1A1A1A] '>CBT Center</h4>
        <figure>
          <img src={cbt} alt="CBT image" />
        </figure>
      </div>

      {/* <div className={`quick-example`}>
        <div >
          <div>Hello</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quia obcaecati porro dicta, veritatis repellendus quasi sed, magni hic debitis numquam eos sunt ipsum odit, ducimus itaque soluta explicabo perferendis.</div>
        </div>
      </div> */}

      <div className='bg-[#F0F0F0] py-7 px-5 rounded-lg flex flex-col '>
        <div onClick={() => setOpen(!open)} className='w-full flex justify-between items-center'>
          <div className='font-semibold flex flex-col gap-5'>
            <span>Ongoing</span>
            <span className='text-xl'>1 Subject</span>
          </div>
          <span>+</span>
        </div>

        <div className={`
          grid overflow-hidden transition-all duration-300 ease-in-out 
          ${open? 'grid-rows-[1fr] opacity-100 pt-8': 'grid-rows-[0fr] opacity-0'}
        `}>
          <p className='overflow-hidden'>This is the answer</p>
        </div>
      </div>
    </section>
  )
}

export default Communication