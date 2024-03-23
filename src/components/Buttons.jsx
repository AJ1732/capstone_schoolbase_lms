import React from 'react'

export const DarkButton = ({ children, className, disabled, type }) => {
  return (
    <button type={type} disabled={disabled} className={`
      text-black text-sm bg-dark-gray
      py-[10.5px] px-[70px] rounded-[10px] 
      ${className}
    `}>
      {children}
    </button>
  )
}

export const LightButton = ({ children, className }) => {
  return (
    <button className={`
      text-black text-sm bg-light-gray 
      py-[10.5px] px-[70px] rounded-[10px] 
      ${className}
    `}>
      {children}
    </button>
  )
}

export const WhiteButton = ({ children, className }) => {
  return (
    <button className={`
      text-black text-xl bg-white 
      py-[12.5px] px-[70px] rounded-[10px] 
      ${className}
    `}>
      {children}
    </button>
  )
}


export const TransButton = ({ children, className }) => {
  return (
    <button className={`
    text-white text-sm bg-transparent border border-white
    py-[10.5px] px-[70px] rounded-sm
      ${className}
    `}>
      {children}
    </button>
  )
}

export const BorderButton = ({ children, className }) => {
  return (
    <button className={`
    text-black text-sm bg-white border border-black
    py-[10.5px] px-[70px] rounded-[10px]
      ${className}
    `}>
      {children}
    </button>
  )
}

