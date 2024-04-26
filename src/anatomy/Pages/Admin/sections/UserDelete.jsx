import React from 'react'
import { createPortal } from 'react-dom'

const UserDelete = ({ open, onClose, id, user }) => {
  if (!open) return null;
  
  return createPortal(
    <div className='fixed z-50 top-0 left-0 m-auto | size-full bg-slate-50 bg-opacity-25 py-20 flex justify-center items-start'>
      <div className='min-w-80 w-[75svw] bg-greyshade p-5 '>
        {/* CLOSE MODAL BUTTON */}
        <div onClick={onClose} className='absolute top-5 right-5 | bg-black text-white px-10 rounded'>X</div>
        UserDelete {id}
      </div> 
    </div>,
    document.getElementById('portal')
  )
}

export default UserDelete