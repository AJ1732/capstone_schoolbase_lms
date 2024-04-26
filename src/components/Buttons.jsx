/* eslint-disable react/prop-types */
import React from 'react'

export const DarkButton = ({ children, className, disabled, type, onClick }) => {
  return (
    <button 
      type={type} 
      disabled={disabled} 
      onClick={onClick}
      className={`
      text-[#0B1A3A] text-sm bg-[#D9E0FF]
      py-[10.5px] px-8 rounded-[7px] 
      ${className}
    `}>
      {children}
    </button>
  )
}

export const LightButton = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
      text-black text-sm bg-light-gray 
      py-[10.5px] px-8 rounded-[10px] 
      ${className}
    `}>
      {children}
    </button>
  )
}

export const WhiteButton = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
      text-[#0B1A3A] text-sm bg-[#D9E0FF] 
      py-[12.5px] px-8 rounded-[10px] 
      ${className}
    `}>
      {children}
    </button>
  )
}

export const TransButton = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
        className={`
        text-[#FFFFFF] text-sm bg-[#007BFF] border border-white
        py-[8.5px] px-[38px] rounded-sm
        ${className}
    `}>
      {children}
    </button>
  )
}


export const BorderButton = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
      text-black text-sm bg-white border border-black
      py-[10.5px] px-8 rounded-[10px]
        ${className}
    `}>
      {children}
    </button>
  )
}

export const WhiteButton2 = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
      text-[#0B1A3A] text-sm bg-[#D9E0FF] border border-[#0B1A3A]
      py-[8.5px] px-[40px] rounded-sm
        ${className}
    `}>
      {children}
    </button>
  )
}

export const WhiteButton3 = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
      text-[#D9E0FF] text-sm bg-[#0B1A3A] border border-[#0B1A3A]
      py-[8.5px] px-[40px] rounded-md
        ${className}
    `}>
      {children}
    </button>
  )
}

