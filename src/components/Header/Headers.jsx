import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { useValueContext } from '../../context/ContextProvider';
import { Button } from "../Button/Buttons";
import { HeaderAvatar } from '../Avatar';
import avatarImg from '../../assets/avatarImg.png'
import menu from "../../assets/menu@2x.png"
import box from "../../assets/box.png"
import alert from "../../assets/notifications.png"


export const HomePageHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="full-width content-grid | w-full max-h-[110px] bg-gray-200">
      <div className="content | p-4 flex items-center justify-between cursor-default">
        <h1 onClick={() => navigate("/")} className="font-bold text-text-black text-xl">LOGO</h1>
        <nav>
          <Button type="button" variant="primary" onClick={() => navigate("/login")}>LOGIN</Button>
          <Button type="button" variant="primary" onClick={() => navigate("/signup")}>SIGN UP</Button>
        </nav>
      </div>
    </header>
  )
}

export const SoftwareHeader = () => {
  const { setExpand } = useValueContext();
  const [ profileOpen, setProfileOpen ] = useState(false);

  return (
    <header className="col-span-2 | max-h-[6.9375rem] w-full bg-gray-200 flex justify-start items-center">
      <div className="content relative | max-w-[79rem] w-full px-9 py-5 flex items-center justify-between cursor-default">
        
        <button onClick={() => setExpand(prev => !prev)}>
          <div className='size-6'><img src={menu} alt="menu" /></div>
        </button>

        <div className='text-[1A1A1A] ml-32 flex justify-center items-center gap-20'>
          <NavLink
            to={`/software/cbt`}
            className={({ isActive }) => isActive? 'bg-white py-1.5 px-3 rounded-md': 'py-1.5 px-3'}
          >
            <span>CBT</span>
          </NavLink>
          
          <NavLink 
            to={`/software/communication`}
            className={({ isActive }) => isActive? 'bg-white py-1.5 px-3 rounded-md': 'py-1.5 px-3'}
          >
            <span>Communication</span>
          </NavLink>
        </div>

        <div className='flex justify-center items-center gap-6'>
          <figure className='size-[18px]'>
            <img src={box} alt="" />
          </figure>
          <figure className='size-[18px] mb-1'>
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
