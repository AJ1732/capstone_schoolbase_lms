import React from 'react'

const NotesSection = () => {
  return (
    <section className='
      col-span-1 | bg-[#F0F0F0] | max-w-[14rem] max-h-[17rem] size-full | p-8 
      text-center | flex flex-col justify-center items-center gap-4 rounded-lg
    '>
      <div>
        <h4 className='font-bold text-[#1A1A1A] mb-2'>Saved Notes</h4>
        <div className='size-32 bg-dark-gray rounded-md'></div>
      </div>
      <div>
        <p className='font-bold text-sm text-[#616161]'>Saved notes would be displayed here</p>
      </div>
    </section>
  )
}

export default NotesSection