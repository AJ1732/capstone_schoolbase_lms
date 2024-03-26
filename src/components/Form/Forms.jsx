import React, { useState } from 'react'
import './Form.css'
import { FormButton } from '../Button/Buttons';

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


export const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const EmailErrorMessage = () => {
    return (
      <p className="field-error">Please enter a valid Email Adresss</p>
    );
  };

  const PasswordErrorMessage = () => {
    return (
      <p className="field-error">Password should have at least 8 characters</p>
    );
  };

  const getIsFormValid = () => { 
    return ( 
      fullName && 
      validateEmail(email) && 
      password.value.length >= 8 
    ); 
  }; 
  
  const clearForm = () => {
    setFullName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Account created!");
    clearForm();
  };

  return (
    <div>
      <form 
        action="" 
        onSubmit={handleSubmit}
        className={`
          min-w-[630px] bg-white text-black p-[60px] drop-shadow-lg
        `}
      >
        <fieldset className='flex flex-col gap-5'>
          {/* NAME */}
          <div className='field'>
            <div>
              <label htmlFor="fullName">Name </label>
            </div>
            <input 
              id='fullName'
              type="text" 
              value={fullName}
              placeholder='Enter Full Name'
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* EMAIL */}
          <div className='field'>
            <div>
              <label htmlFor="email">Email:</label>
            </div>
            <input 
              id='email'
              type="email" 
              value={email.value}
              placeholder='Email Address'
              onChange={(e) => { 
                setEmail({ ...email, value: e.target.value }); 
              }} 
              onBlur={() => { 
                setEmail({ ...email, isTouched: true }); 
              }} 
            />
            {
              email.isTouched && validateEmail(email) == null ? 
              ( <EmailErrorMessage /> ) :
              null
            } 
          </div>

          {/* PASSWORD */}
          <div className='field'>
            <div>
              <label htmlFor="password">Password </label>
            </div>
            <input 
              id='password'
              type="password" 
              value={password.value}
              placeholder='Password'
              required
              onChange={(e) => { 
                setPassword({ ...password, value: e.target.value }); 
              }} 
              onBlur={() => { 
                setPassword({ ...password, isTouched: true }); 
              }} 
            />
            {
              password.isTouched && password.value.length < 8 ? 
              ( <PasswordErrorMessage /> ) :
              null
            } 
          </div>
          
          {/* SUBMIT BUTTON */}
          <FormButton disabled={!getIsFormValid()} className={`w-[150px] mt-[20px] self-end`}>SIGN UP</ FormButton>
        </fieldset>
      </form>
    </div>
  )
}
