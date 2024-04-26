import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useValueContext } from '../../../../context/ContextProvider'

const UserEdit = ({ open, onClose, id }) => {
  const { singleUser, setSingleUser } = useValueContext();
  // console.log(singleUser);

  const fetchSingleUser = async (id) => {
    try {
      // setLoadTable(true)
      const response = await fetch('https://capstone-schoolbase-server.onrender.com/api/users/' + id);
      const data = await response.json();
      setSingleUser(data)
      // if (response.ok) {
      //   dispatch({ type: 'SET_USERS', payload: data })
      // } else if (!response.ok)  {
      //   throw new Error('Request failed with status ' + response.status);
      // }
      // setLoadTable(false)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchSingleUser(id)
  }, [])

  if (!open) return null;
  
  return createPortal(
    <div className='fixed z-50 top-0 left-0 m-auto | size-full bg-slate-50 bg-opacity-25 py-20 flex justify-center items-start'>
      <div className='min-w-80 w-[75svw] bg-greyshade p-5 '>
        {/* CLOSE MODAL BUTTON */}
        <div onClick={onClose} className='absolute top-5 right-5 | bg-black text-white px-10 rounded'>X</div>
        
        <div className='w-[80%] min-h-80 m-auto bg-primary-10 flex justify-center items-center'>
          <p className='text-3xl'>UserEdit </p>
          {/* <p>{id}</p> */}
        </div>
      </div> 
    </div>,
    document.getElementById('portal')
  )
}

export default UserEdit