import React from 'react'
import { createPortal } from 'react-dom'

const UserEdit = ({ open, onClose, id, userData }) => {
  if (!open) return null;
  
  return createPortal(
    <div className='fixed z-10 top-0 left-0 m-auto | size-full bg-slate-50 bg-opacity-25 py-20 flex justify-center items-start'>
      <div className='min-w-80 w-[75svw] bg-greyshade p-5 '>
        UserEdit
      </div> 
    </div>,
    document.getElementById('portal')
  )
}

export default UserEdit