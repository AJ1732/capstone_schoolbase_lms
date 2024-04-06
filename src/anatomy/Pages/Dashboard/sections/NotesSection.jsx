import React from 'react'
import boxLarge from "../../../../assets/boxLarge.svg"

const NotesSection = () => {
  return (
    <section className='
      col-span-1 | bg-white | max-w-[14rem] max-h-[17rem] size-full | p-8 | drop-shadow-md
      text-center | flex flex-col justify-center items-center gap-4 rounded-lg
    '>
      <div className='flex flex-col justify-center items-center'>
        <h4 className='font-bold text-primary-900 mb-2'>Saved Notes</h4>
        <figure>
          <img src={boxLarge} alt="" />
        </figure>
      </div>
      <div>
        <p className='font-medium text-sm text-primary-900'>Saved notes would be displayed here</p>
      </div>
    </section>
  )
}

export default NotesSection