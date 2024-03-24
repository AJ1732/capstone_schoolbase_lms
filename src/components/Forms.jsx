import React, { useState } from 'react'
import { DarkButton } from './Buttons';
import './form.css'

// Utilities
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Forms
export const HeroForm = () => {
  const [schoolName, setSchoolName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");

  const getIsFormValid = () => { 
    return ( 
      schoolName && 
      phoneNum &&
      validateEmail(email)
    ); 
  }; 

  const clearForm = () => {
    setSchoolName("");
    setPhoneNum("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Demo Request Access Sent!");
    clearForm();
  };
  
  return (
    <form 
      action="" 
      onSubmit={handleSubmit} 
      className='max-w-[380px] bg-white p-8 text-black space-y-6'
    >
      <h2 className='font-semibold text-2xl text-center'>Request Demo Access</h2>

      <fieldset className='space-y-8'>
          <div className='space-y-4'>
            <input 
              id='schoolName'
              type="text" 
              value={schoolName}
              placeholder='Your School Name'
              className='p-[12.5px_10px]'
              required
              onChange={(e) => setSchoolName(e.target.value)}
            />

            <input 
              id='phoneNum'
              type="number" 
              value={phoneNum}
              placeholder='Your Phone Number'
              className='p-[12.5px_10px]'
              onChange={(e) => setPhoneNum(e.target.value)}
            />

            <input 
              id='email'
              type="email" 
              value={email}
              placeholder='Your Email Address'
              className='p-[12.5px_10px]'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <DarkButton type={`submit`} disabled={!getIsFormValid()} className={`w-full bg-light-gray`}>Submit</DarkButton>
      </fieldset>
    </form>
  )
}

export const NewsForm = () => {
  const [email, setEmail] = useState("");

  const getIsFormValid = () => { 
    return ( 
      validateEmail(email)
    ); 
  }; 

  const clearForm = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Demo Request Access Sent!");
    clearForm();
  };
  
  return (
    <form 
      action="" 
      onSubmit={handleSubmit} 
      className='max-w-[380px] bg-black-gray font-manrope text-white p-[15px] rounded-[10px] space-y-6'
    >
      <h2 className='font-bold text-left'>Join Our Newsletter</h2>

      <fieldset className='flex'>
          <div>
            <input 
              id='email'
              type="email" 
              value={email}
              placeholder='Your Email Address'
              className='p-[10px] rounded-l-[10px] placeholder:text-xs'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <DarkButton type={`submit`} disabled={!getIsFormValid()} className={`w-1/3 bg-blacker-gray text-white text-center rounded-l-none py-[10px] px-0`}>Submit</DarkButton>
      </fieldset>

      <p className='font-manrope font-medium text-xs text-text-gray'>We will send you weekly updates for your better tool management</p>
    </form>
  )
}


