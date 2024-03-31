import React from 'react'
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

  return (
    <header className="col-span-2 | max-h-[6.9375rem] w-full bg-gray-200 flex justify-start items-center">
      <div className="content | max-w-[79rem] w-full px-9 py-5 flex items-center justify-between cursor-default">
        
        <button onClick={() => setExpand(prev => !prev)}>
          <div className='size-6'><img src={menu} alt="menu" /></div>
        </button>

        <div className='text-[1A1A1A] ml-32 flex justify-center items-center gap-20'>
          <NavLink>CBT</NavLink>
          <NavLink 
            to={`/software/communication`}
            className={({ isActive }) => isActive? 'bg-white p-1.5 rounded-md': 'hover:text-black'}
          >
            <span className='p-1.5 rounded-lg'>Communication</span>
          </NavLink>
        </div>

        <div className='flex justify-center items-center gap-6'>
          <figure className='size-[18px]'>
            <img src={box} alt="" />
          </figure>
          <figure className='size-[18px] mb-1'>
            <img src={alert} alt="notifications" />
          </figure>
          <HeaderAvatar src={avatarImg} />
        </div>
      </div>
    </header>
  )
}
