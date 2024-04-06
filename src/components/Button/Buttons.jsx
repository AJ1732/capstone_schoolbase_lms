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
      min-w-[150px] | text-black text-sm bg-white | py-2.5 px-8 rounded-[10px] | transition-all duration-300
      focus:bg-primary-00 focus:text-white active:bg-primary-00 active:text-white hover:bg-primary-00 hover:text-white
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
      min-w-[150px] | text-white text-sm bg-primary-00 | py-2.5 px-8 rounded-[10px] | transition-all duration-300
      active:bg-primary-50 active:text-primary-900
      ${className}
    `}>
      {children}
    </button>
  )
}
