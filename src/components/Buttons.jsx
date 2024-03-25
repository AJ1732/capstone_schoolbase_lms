import React from 'react'

export const NavButton = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
      min-w-[150px] | text-black text-sm bg-white | py-2.5 px-8 rounded-[10px] 
      ${className}
    `}>
      {children}
    </button>
  )
}
