import React, { useState } from 'react'
import './Form.css'

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


export const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const EmailErrorMessage = () => {
    return (
      <p className="FieldError">Please enter a valid Email Adresss</p>
    );
  };

  const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  };

  const getIsFormValid = () => { 
    return ( 
      firstName && 
      validateEmail(email) && 
      password.value.length >= 8 
    ); 
  }; 

  const clearForm = () => {
    setFirstName("");
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
          min-w-[630px] bg-white p-[60px] text-black
        `}
      >
        <fieldset className='space-y-5'>
          {/* NAME */}
          <div className='field'>
            <div>
              <label htmlFor="firstName">Name </label>
            </div>
            <input 
              id='firstName'
              type="text" 
              value={firstName}
              placeholder='Enter Full Name'
              required
              onChange={(e) => setFirstName(e.target.value)}
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
              value={email}
              placeholder='Email Address'
              onChange={(e) => setEmail(e.target.value)}
            />
            {
              validateEmail(email) ? 
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

          <button type="submit" disabled={!getIsFormValid()}>
            SIGN UP
          </button>
        </fieldset>
      </form>
    </div>
  )
}
