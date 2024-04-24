import React from 'react'
import { createPortal } from 'react-dom'

const ModalForm = ({ open, onClose }) => {
  if (!open) return null

  return createPortal(
    <div className='fixed inset-0 z-50 | bg-slate-50 bg-opacity-70 p-2 md:py-5 md:px-20 lg:px-32 flex justify-center items-center overflow-y-scroll'>
      <div className='size-full rounded shadow-lg '>
        <div className='relative'>
          <h2 className='bg-primary-10 font-bold py-5 px-2 rounded-t'>New User</h2>
          {/* CLOSE BUTTON */}
          <button onClick={onClose} className='absolute top-2 right-3 | font-bold | px-5 py-2.5 rounded-md'>x</button>
        </div>

        <form action="" className='min-h-40 bg-white'>
          <fieldset className='py-7 px-4 | grid grid-cols-2 gap-y-5 gap-x-8'> 
            {/* EMAIL INPUT */}
            <div className='field'>
              <label htmlFor="email" className='!font-medium'>Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='Email Address'
              />
            </div>
            
            {/* USERNAME INPUT */}
            <div className='field'>
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                placeholder='Enter Username'
              />
            </div>

            {/* FIRST NAME INPUT */}
            <div className='field'>
              <label htmlFor="firstname">First Name</label>
              <input 
                type="text" 
                name="firstname" 
                id="firstname" 
                placeholder='First Name'
              />
            </div>

             {/* SURNAME INPUT */}
             <div className='field'>
              <label htmlFor="surname">Surname</label>
              <input 
                type="text" 
                name="surname" 
                id="surname" 
                placeholder='Surname'
              />
            </div>
            
            {/* SCHOOL INPUT */}
            <div className='field'>
              <label htmlFor="school">School</label>
              <input 
                type="text" 
                name="school" 
                id="school" 
                placeholder='Enter School'
              />
            </div>

            {/* ADDRESS INPUT */}
            <div className='field'>
              <label htmlFor="address">Address</label>
              <input 
                type="text" 
                name="address" 
                id="address" 
                placeholder='Enter Address'
              />
            </div>

            {/* PASSWORD INPUT */}
            <div className='field'>
              <label htmlFor="email">Password</label>
              <input 
                type="text" 
                name="password" 
                id="password" 
                placeholder='Enter Password'
              />
            </div>
           
            {/* CONFIRM PASSWORD INPUT */}
            <div className='field'>
              <label htmlFor="confirmpassword">Confirm Pasword</label>
              <input 
                type="text" 
                name="confirmpassword" 
                id="confirmpassword" 
                placeholder='Confirm Pasword'
              />
            </div>

            {/* ROLE CHECKBOX */}
            <div className='col-span-2 space-y-3'>
              <label htmlFor="roles">Roles</label>
              <div className='flex justify-start items-center gap-2'>
                <input type="checkbox" />
                <p>Admin</p> 
              </div>
              <div className='flex justify-start items-center gap-2'>
                <input type="checkbox" />
                <p>Student</p> 
              </div>
              <div className='flex justify-start items-center gap-2'>
                <input type="checkbox" />
                <p>Teacher</p> 
              </div>
            </div>

            {/* SAVE BUTTON */}
            <button className='col-start-2 justify-self-end w-fit bg-primary-00 font-medium text-lg text-white uppercase | mr-8 py-2 px-4 rounded'>
              <span className=''>+</span> SAVE
            </button>
          </fieldset>
        </form>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default ModalForm