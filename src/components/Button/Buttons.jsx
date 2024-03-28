import React from 'react'
import './Button.css'

export function Button({children, variant, type, isDisabled, onClick}) {
  return (
    <button type={type} disabled={isDisabled} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button> 
  )
}

export const NavButton = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
      min-w-[150px] | text-black text-sm bg-white | py-2.5 px-8 rounded-[10px] 
      focus:bg-black-gray focus:text-white active:bg-black-gray active:text-white
      ${className}
    `}>
      {children}
    </button>
  )
}

export const FormButton = ({ children, className, onClick, disabled }) => {
  return (
    <button 
      disabled={disabled}
      onClick={onClick}
      className={`
      min-w-[150px] | text-black text-sm bg-[#E0E0E0] | py-2.5 px-8 rounded-[10px] 
      active:bg-black-gray active:text-white
      ${className}
    `}>
      {children}
    </button>
  )
}
