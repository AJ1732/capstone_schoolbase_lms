import React from 'react'
import './Button.css'

export const NavButton = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
      min-w-[150px] | text-black bg-white | py-2.5 px-8 rounded-[10px] | transition-all duration-300
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
      min-w-[150px] | text-white bg-primary-00 | py-2.5 px-8 rounded-[10px] | transition-all duration-300
      active:bg-primary-50 active:text-primary-900
      ${className}
    `}>
      {children}
    </button>
  )
}
