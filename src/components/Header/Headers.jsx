import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { useValueContext } from '../../context/ContextProvider';
import { NavButton } from "../Button/Buttons";
import { HeaderAvatar } from '../Avatar';
import avatarImg from '../../assets/avatarImg.png'
import box from "../../assets/box.svg"
import alert from "../../assets/notifications.svg"
import logoFull from "../../assets/logo-full.svg"
import logoShort from "../../assets/logo-short.png"


export const HomePageHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="full-width content-grid | w-full max-h-[110px] bg-primary-100">
      <div className="full-width | p-4 flex items-center justify-between cursor-default">

        <figure 
          onClick={() => navigate("/")} 
          className="font-bold text-text-black text-xl"
        >
          <img src={logoFull} alt="Logo" />
        </figure>

        <nav className='space-x-7'>
          <NavButton onClick={() => navigate("/login")}>LOGIN</NavButton>
          <NavButton onClick={() => navigate("/signup")}>SIGNUP</NavButton>
          {/* <Button type="button" variant="primary" onClick={() => navigate("/login")}>LOGIN</Button>
          <Button type="button" variant="primary" onClick={() => navigate("/signup")}>SIGN UP</Button> */}
        </nav>
      </div>
    </header>
  )
}

export const SoftwareHeader = () => {
  const { setExpand } = useValueContext();
  const [ profileOpen, setProfileOpen ] = useState(false);

  return (
    <header className="col-span-2 | max-h-[6.9375rem] w-full bg-white | flex justify-start items-center | border-b border-primary-900">
      <div className="content relative | max-w-[79rem] w-full px-8 py-5 flex items-center justify-between cursor-default">
        
        <button onClick={() => setExpand(prev => !prev)}>
          <div className='size-8'>
            <img src={logoShort} alt="logo" />
          </div>
        </button>

        <div className='text-primary-900 ml-32 flex justify-center items-center gap-10'>
          <NavLink
            to={`/software/cbt`}
            className={({ isActive }) => isActive? 'bg-primary-100 font-medium py-1.5 px-10 rounded-md transition-all duration-300': 'border border-primary-100 py-1.5 px-10 rounded-md transition-all duration-300'}
          >
            <span className=' '>CBT</span>
          </NavLink>
          
          <NavLink 
            to={`/software/communication`}
            className={({ isActive }) => isActive? 'bg-primary-100  py-1.5 px-10 rounded-md transition-all duration-300': 'border border-primary-100 py-1.5 px-10 rounded-md transition-all duration-300'}
          >
            <span>Chat</span>
          </NavLink>
        </div>

        <div className='flex justify-center items-center gap-6'>
          <figure className='size-6'>
            <img src={box} alt="" />
          </figure>
          <figure className='size-6'>
            <img src={alert} alt="notifications" />
          </figure>
          <div onClick={() => setProfileOpen(!profileOpen)}>
            <HeaderAvatar src={avatarImg} />
          </div>
        </div>

        <div className={`
          absolute top-[99%] right-[3%] 
          w-80 max-h-0 overflow-hidden 
          transition-[max-height] duration-500
          ${profileOpen && 'max-h-[30rem]' }
        `}>
          <div className='bg-[#E8E8E8] text-[#1A1A1A] p-8 space-y-6 shadow-sm rounded-lg'>
            <div className='flex justify-start items-center gap-4'>
              <div className='size-10 bg-dark-gray rounded-full'></div>
              <h2 className='font-medium'>Sarah Ogiri</h2>
            </div>

            <ul className='flex flex-col gap-5'>
              <li>My Courses</li>
              <li>Profile</li>
              <li>Fee Management</li>
              <li>Settings</li>
              <li>Accomplishments</li>
              <li>Help Center</li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
