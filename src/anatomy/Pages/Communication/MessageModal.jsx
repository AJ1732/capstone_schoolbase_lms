import React from 'react'
import { createPortal } from 'react-dom'

const MessageModal = ({ open, children, onClose }) => {
  // if (!open) return null

  return createPortal(
    <div className={`
      flex justify-center items-center gap-2 ${open? 'top-0': 'top-full'}
      fixed inset-0 bg-slate-50 bg-opacity-70 | p-10  pt-28 pl-[7.5rem]
      transition-all duration-500
    `}>
      <div className='relative | bg-primary-200 size-full flex flex-col justify-center items-center rounded-md'>
        {children}
        <button onClick={onClose} className='absolute top-5 right-5 | bg-primary-100 px-5 py-2 rounded-md'>Close Modal</button>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default MessageModal