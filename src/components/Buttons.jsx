import React from 'react'

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

export const FormButton = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
      min-w-[150px] | text-black text-sm bg-dark-gray | py-2.5 px-8 rounded-[10px] 
      active:bg-black-gray active:text-white
      ${className}
    `}>
      {children}
    </button>
  )
}
