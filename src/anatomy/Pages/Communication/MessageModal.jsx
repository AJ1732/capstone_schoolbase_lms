import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { FormButton } from '../../../components/Button/Buttons';
import './ChatForm.css'

const MessageModal = ({ open, onClose }) => {
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
  const ErrorMessage = () => {
    return (
      <p className="text-orange-600 text-xs md:ml-[10.5rem]">Input must be filled</p>
    );
  };

  // SUBMISSION FUNCTIONS
  const getIsFormValid = () => { 
    return ( 
      fullName.value.length < 8 && grade.value.length < 1 && adminNum.value.length < 5
    ); 
  }; 
  console.log(fullName.value.length < 8 && grade.value.length < 1 && adminNum.value.length < 5);

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
      console.log('submit', {
        fullName: fullName.value,
        grade: grade.value,
        admissionNumber: adminNum.value,
        description: description.value,
      });
    } catch (e) {
      setError(e.message)
      alert(e.message);
    }

    clearForm();
  };

  return createPortal(
    <div onDoubleClick={onClose} className={`
      flex justify-center items-center gap-2 ${open? 'top-0': 'top-full'}
      fixed inset-0 bg-slate-50 bg-opacity-70 | p-10 pt-96 pl-[7.5rem]
      transition-all duration-75 delay-300 overflow-y-scroll
    `}>
      <form 
        id='messageModalForm'
        action="" 
        onSubmit={handleSubmit}
        className={`
          relative | max-w-[54rem] size-full bg-white shadow-md ${!open? 'h-0 opacity-0': 'h-[43rem] opacity-100'}
          flex flex-col justify-start items-center rounded-md | transition-all duration-500
        `}
      >
        {/* CLOSE BUTTON */}
        <button onClick={onClose} className='absolute top-5 right-5 | bg-primary-100 text-text-grey px-5 py-2.5 rounded-md'>x</button>

        {/* FORM CONTENT */}
        <fieldset  className='w-full mt-16 p-10 md:p-14 flex flex-col justify-center items-start gap-4'>
          {/* FULL NAME */}
          <div className='modal_field'>
            <div className='w-full flex flex-col md:flex-row justify-center items-start gap-1.5 md:gap-10'>
              <label htmlFor="fullName" >Full Name</label>
              <input 
                id='fullName'
                type="text" 
                value={fullName.value}
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
          
          {/* GRADE */}
          <div className='modal_field'>
            <div className='w-full flex flex-col md:flex-row justify-center items-start gap-1.5 md:gap-10'>
              <label htmlFor="fullName" >Class/ Grade</label>
              <input 
                id='fullName'
                type="text" 
                value={grade.value}
                onChange={(e) => { 
                  setGrade({ ...grade, value: e.target.value }); 
                }} 
                onBlur={() => { 
                  setGrade({ ...grade, isTouched: true }); 
                }} 
              />
            </div>
            {
              grade.isTouched && grade.value.length < 1? 
              ( <ErrorMessage>Enter Your Grade</ErrorMessage> ) :
              null
            } 
          </div>
          
          {/* ADMISSION NUMBER */}
          <div className='modal_field'>
            <div className='w-full flex flex-col md:flex-row justify-center items-start gap-1.5 md:gap-10'>
              <label htmlFor="fullName" >Admission Number</label>
              <input 
                id='fullName'
                type="text" 
                value={adminNum.value}
                onChange={(e) => { 
                  setAdminNum({ ...adminNum, value: e.target.value }); 
                }} 
                onBlur={() => { 
                  setAdminNum({ ...adminNum, isTouched: true }); 
                }} 
              />
            </div>
            {
              adminNum.isTouched && adminNum.value.length < 5? 
              ( <ErrorMessage>Enter Your Admission Number</ErrorMessage> ) :
              null
            } 
          </div>

          {/* DESCRIPTION MESSAGE */}
          <div className='modal_field'>
            <div className='w-full flex flex-col md:flex-row justify-center items-start md:items-center gap-1.5 md:gap-10'>
              <textarea 
                name='description'
                form="messageModalForm" 
                value={description.value}
                placeholder='Write a message'
                onChange={(e) => { 
                  setDescription({ ...description, value: e.target.value }); 
                }} 
                onBlur={() => { 
                  setDescription({ ...description, isTouched: true }); 
                }} 
              />
            </div>
            {
              description.isTouched && description.value.length < 5? 
              ( <ErrorMessage /> ) :
              null
            } 
          </div>
          
          {/* MESSAGE BUTTONS */}
          <div className='mt-[20px] self-end flex flex-col md:flex-row justify-center items-center gap-6'>
            <FormButton disabled={getIsFormValid()} className={`font-normal rounded-md disabled:bg-gray-400 disabled:text-white`}>Send Message</ FormButton>
          </div>
        </fieldset>
      </form>
    </div>,
    document.getElementById('portal')
  )
}

export default MessageModal