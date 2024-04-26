import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { validateSchoolEmail, validateUsername, validateInput, validatePassword } from '../../../../utils/validate';
import { ErrorMessage } from '../../Error/ErrorInputMessage';
import { useAuthContext } from '../../../../context/AuthProvider';

const ModalForm = ({ open, onClose }) => {
  const roles = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Student', label: 'Student' }

  ]

  const [ newUser, setNewUser ] = useState({
    email: "",
    username: "",
    firstname: "",
    surname: "",
    school: "",
    address: "",
    password: "",
    confirmpassword: "",
    role: ""
  })
  
  const [ inputTouch, setInputTouch ] = useState({
    email: false,
    username: false,
    firstname: false,
    surname: false,
    school: false,
    address: false,
    password: false,
    confirmpassword: false,
    role: false,
  })

  const [ passwordShow, setPasswordShow ] = useState(false);
  const [ confirmPasswordShow, setConfirmPasswordShow ] = useState(false);
  const { setLoading, createUser } = useAuthContext();

  // HANDLE FORM INPUT CHANGE
  const clearForm = () => {
    setNewUser({
      email: "",
      username: "",
      firstname: "",
      surname: "",
      school: "",
      address: "",
      password: "",
      confirmpassword: "",
      role: ""
    })
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };
  
  // const handleShow = (e) => {
  //   const { name, type } = e.target;
  //   setPasswordShow(prev => ({ ...prev, [name]: value }));
  // };
 
  const handleTouch = (e) => {
    const { name } = e.target;
    setInputTouch(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const user = {};      

    try {
      setLoading(true);
      await createUser(newUser.email, newUser.password);
      const response = await fetch('https://capstone-schoolbase-server.onrender.com/api/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-type': 'application/json'
        }
      });
      const json = await response.json();

      if (!response.ok) {
        console.log(json.error);
      }

      onClose()
    } catch (e) {
      alert(e.message);
    }
    setLoading(false);
    clearForm();
  }

  console.log(passwordShow);
  // RETURN MODAL
  if (!open) return null

  return createPortal(
    <div className='fixed inset-0 z-50 | bg-slate-50 bg-opacity-70 p-2 md:py-5 md:px-20 lg:px-32 flex justify-center items-center overflow-y-scroll'>
      <div className='size-full rounded shadow-lg '>
        <div className='relative'>
          <h2 className='bg-primary-10 font-bold py-5 px-2 rounded-t'>New User</h2>
          {/* CLOSE BUTTON */}
          <button onClick={onClose} className='absolute top-2 right-3 | font-bold | px-5 py-2.5 rounded-md'>x</button>
        </div>

        <form action="" onSubmit={handleSubmit} className='min-h-40 bg-white'>
          <fieldset className='py-7 px-4 | grid grid-cols-2 gap-y-5 gap-x-8'> 
            {/* EMAIL INPUT */}
            <div className='field min-h-32'>
              <label htmlFor="email" className='!font-medium'>Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required
                placeholder='Email Address'
                value={newUser.email}
                onChange={handleChange}
                onBlur={handleTouch}
              />

              {/* EMAIL INPUT ERROR MESSAGE */}
              {
                inputTouch.email && !validateSchoolEmail(newUser.email)? 
                <ErrorMessage>Please enter a valid SchoolBase Email Adresss</ErrorMessage>
                : null
              } 
            </div>
            
            {/* USERNAME INPUT */}
            <div className='field min-h-32'>
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                required
                placeholder='Enter Username'
                value={newUser.username}
                onChange={handleChange}
                onBlur={handleTouch}
              />

              {/* USERNAME INPUT ERROR MESSAGE */}
              {
                inputTouch.username && !validateUsername(newUser.username)? 
                <ErrorMessage>Username must be at least 5 characters</ErrorMessage>
                : null
              } 
            </div>

            {/* FIRST NAME INPUT */}
            <div className='field min-h-32'>
              <label htmlFor="firstname">First Name</label>
              <input 
                type="text" 
                name="firstname" 
                id="firstname" 
                required
                placeholder='First Name'
                value={newUser.firstname}
                onChange={handleChange}
                onBlur={handleTouch}
              />
              {/* FIRSTNAME INPUT ERROR MESSAGE */}
              {
                inputTouch.firstname && !validateInput(newUser.firstname)? 
                <ErrorMessage>Input must be filled</ErrorMessage>
                : null
              } 
            </div>

             {/* SURNAME INPUT */}
             <div className='field min-h-32'>
              <label htmlFor="surname">Surname</label>
              <input 
                type="text" 
                name="surname" 
                id="surname" 
                required
                placeholder='Surname'
                value={newUser.surname}
                onChange={handleChange}
                onBlur={handleTouch}
              />
              {/* SURNAME INPUT ERROR MESSAGE */}
              {
                inputTouch.surname && !validateInput(newUser.surname)? 
                <ErrorMessage>Input must be filled</ErrorMessage>
                : null
              } 
            </div>
            
            {/* SCHOOL INPUT */}
            <div className='field min-h-32'>
              <label htmlFor="school">School</label>
              <input 
                type="text" 
                name="school" 
                id="school" 
                required
                placeholder='Enter School'
                value={newUser.school}
                onChange={handleChange}
                onBlur={handleTouch}
              />
              {/* SCHOOL INPUT ERROR MESSAGE */}
              {
                inputTouch.school && !validateInput(newUser.school)? 
                <ErrorMessage>Input must be filled</ErrorMessage>
                : null
              } 
            </div>

            {/* ADDRESS INPUT */}
            <div className='field min-h-32'>
              <label htmlFor="address">Address</label>
              <input 
                type="text" 
                name="address" 
                id="address" 
                required
                placeholder='Enter Address'
                value={newUser.address}
                onChange={handleChange}
              />
              {/* ADDRESS INPUT ERROR MESSAGE */}
              {
                inputTouch.address && !validateInput(newUser.address)? 
                <ErrorMessage>Input must be filled</ErrorMessage>
                : null
              } 
            </div>

            {/* PASSWORD INPUT */}
            <div className='field min-h-32 relative'>
              <label htmlFor="email">Password</label>
              <input 
                type={passwordShow? 'text': 'password'}
                name="password" 
                id="password" 
                required
                placeholder='Enter Password'
                value={newUser.password}
                onChange={handleChange}
                onBlur={handleTouch}
              />
              <span onClick={() => setPasswordShow(!passwordShow)} className='absolute top-[3.2rem] right-2 active:scale-[0.98] transition-all bg-light-gray font-semibold text-black-gray text-sm p-2 rounded-full cursor-pointer'>SHOW</span>
              
              {/* PASSWORD INPUT ERROR MESSAGE */}
              {
                inputTouch.password && !validatePassword(newUser.password)? 
                <ErrorMessage>Password must be at least <span className='font-bold'>8 characters</span> long and include <span className='font-bold'>capital letter</span>, <span className='font-bold'>special character</span>, and <span className='font-bold'>number</span></ErrorMessage>
                : null
              } 
            </div>
           
            {/* CONFIRM PASSWORD INPUT */}
            <div className='field min-h-32 relative'>
              <label htmlFor="confirmpassword">Confirm Pasword</label>
              <input 
                type={confirmPasswordShow? 'text': 'password'} 
                name="confirmpassword" 
                id="confirmpassword" 
                required
                placeholder='Confirm Password'
                value={newUser.confirmpassword}
                onChange={handleChange}
                onBlur={handleTouch}
              />
              <span onClick={() => setConfirmPasswordShow(!confirmPasswordShow)} className='absolute top-[3.2rem] right-2 active:scale-[0.98] transition-all bg-light-gray font-semibold text-black-gray text-sm p-2 rounded-full cursor-pointer'>SHOW</span>
              
              {/* CONFIRM PASSWORD INPUT ERROR MESSAGE */}
              {
                inputTouch.confirmpassword && !(newUser.password === newUser.confirmpassword)? 
                <ErrorMessage>Passwords must match</ErrorMessage>
                : null
              } 
            </div>

            {/* ROLE CHECKBOX */}
            <div className='col-span-2 space-y-3'>
              <h3 htmlFor="roles" className='font-medium text-xl text-[#595959]'>Roles</h3>
              <div>
                {
                  roles.map(({ value, label }) => (
                    <div key={value} className=''>
                      <input 
                        id={value}
                        type="radio" 
                        name='role'
                        required
                        value={value} 
                        checked={newUser.role === value}
                        className='mr-2'
                        onChange={handleChange}
                      /> 
                      <label htmlFor={value} className='text-lg text-[#595959]'>{label}</label>
                      <br />
                    </div>
                  ))
                }
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