import React from 'react'
import { createPortal } from 'react-dom'

const MessageModal = ({ open, children, onClose }) => {
  // if (!open) return null

  return createPortal(
    <div onDoubleClick={onClose} className={`
      flex justify-center items-center gap-2 ${open? 'top-0': 'top-full'}
      fixed inset-0 bg-slate-50 bg-opacity-70 | p-10 pt-96 pl-[7.5rem]
      transition-all duration-75 delay-300 overflow-y-scroll
    `}>
      <div className={`
        relative | max-w-[54rem] size-full bg-white shadow-md ${!open? 'h-0 opacity-0': 'h-[43rem] opacity-100'}
        flex flex-col justify-center items-center rounded-md | transition-all duration-500
      `}>
        {/* CLOSE BUTTON */}
        <button onClick={onClose} className='absolute top-5 right-5 | bg-primary-100 px-5 py-2 rounded-md'>Close Modal</button>

        <fieldset>
          Call Modal
        </fieldset>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default MessageModal