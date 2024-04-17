import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { FormButton } from '../../../components/Button/Buttons';
import './ChatForm.css'

const CallModal = ({ open, onClose  }) => {
  // if (!open) return null

  // STATE
  const [fullName, setFullName] = useState({
    value: "",
    isTouched: false,
  });
  const [grade, setGrade] = useState({
    value: "",
    isTouched: false,
  });
  const [adminNum, setAdminNum] = useState({
    value: "",
    isTouched: false,
  });
  const [description, setDescription] = useState({
    value: "",
    isTouched: false,
  });
  const [error, setError] = useState('');
  
  // ERROR MESSAGES
  const ErrorMessage = ({ children }) => {
    return (
      <p className="text-orange-600 text-xs md:ml-[10.5rem]">{children}</p>
    );
  };

  // SUBMISSION FUNCTIONS
  const getIsFormValid = () => { 
    return ( 
      fullName.value.length > 8
    ); 
  }; 

  console.log(fullName.value.length > 8);
  
  const clearForm = () => {
    setFullName({
      value: "",
      isTouched: false,
    });
    setGrade({
      value: "",
      isTouched: false,
    });
    setAdminNum({
      value: "",
      isTouched: false,
    });
    setDescription({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      console.log('submit');
    } catch (e) {
      setError(e.message)
      alert(e.message);
    }

    clearForm();
  };

  return createPortal(
    <div onDoubleClick={onClose} className={`
      fixed inset-0 bg-slate-50 bg-opacity-70 | p-10 pt-96 pl-[7.5rem]
      flex justify-center items-center gap-2 ${open? 'top-0': 'top-full'}
      transition-all duration-75 delay-300 overflow-y-scroll
    `}>
      <form 
        action="" 
        onSubmit={handleSubmit}
        className={`
          relative | max-w-[54rem] size-full bg-white shadow-md ${!open? 'h-0 opacity-0': 'h-[43rem] opacity-100'}
          flex flex-col justify-start items-center rounded-md | transition-all duration-500
        `}
      >
        {/* CLOSE BUTTON */}
        <button onClick={onClose} className='absolute top-5 right-5 | bg-primary-100 px-5 py-2 rounded-md'>Close Modal</button>
        
        {/* FORM CONTENT */}
        <fieldset className='w-full mt-16 p-10 md:p-14 flex flex-col justify-center items-start gap-5'>
          {/* EMAIL */}
          <div className='modal_field'>
            <div className='w-full flex flex-col md:flex-row justify-center items-start md:items-center gap-1.5 md:gap-10'>
              <label htmlFor="fullName" >Full name:</label>
              <input 
                id='fullName'
                type="text" 
                value={fullName.value}
                placeholder='Enter Full Name'
                onChange={(e) => { 
                  setFullName({ ...fullName, value: e.target.value }); 
                }} 
                onBlur={() => { 
                  setFullName({ ...fullName, isTouched: true }); 
                }} 
              />
            </div>
            {
              fullName.isTouched && fullName.value.length < 8? 
              ( <ErrorMessage>Enter Your Full Name</ErrorMessage> ) :
              null
            } 
          </div>
          
          <div className='mt-[20px] self-end flex justify-center items-center gap-6'>
            {/* SUBMIT BUTTON */}
            <FormButton disabled={!getIsFormValid()} className={`font-normal rounded-md disabled:bg-gray-500`}>Send Message</ FormButton>
          </div>
        </fieldset>
      </form>
    </div>,
    document.getElementById('portal')
  )
}

export default CallModal