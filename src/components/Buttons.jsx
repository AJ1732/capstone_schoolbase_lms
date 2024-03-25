import React from 'react'

export const DarkButton = ({ children, className, disabled, type, onClick }) => {
  return (
    <button 
      type={type} 
      disabled={disabled} 
      onClick={onClick}
      className={`
      text-black text-sm bg-dark-gray
      py-[10.5px] px-8 rounded-[10px] 
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
      text-black text-sm bg-white 
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
        text-white text-sm bg-transparent border border-white
        py-[10.5px] px-8 rounded-sm
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

