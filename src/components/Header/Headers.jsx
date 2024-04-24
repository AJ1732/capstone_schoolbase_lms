import React, { useId, useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useValueContext } from '../../context/ContextProvider';
import { NavButton } from "../Button/Buttons";
import { HeaderAvatar } from '../Avatar';
import avatarImg from '../../assets/avatarImg.png'
import logoFull from "../../assets/logo-full.svg"
import logoShort from "../../assets/logo-short.png"
import { useAuthContext } from '../../context/AuthProvider';


export const HomePageHeader = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  return (
    <header className="full-width content-grid | w-full max-h-[110px] lg:px-4 bg-primary-100">
      <div className="full-width pr-4 flex items-center justify-between cursor-default">
        <figure 
          onClick={() => navigate("/")} 
          className="max-w-64 min-w-44 font-bold text-text-black text-xl"
        >
          <img src={logoFull} alt="Logo" />
        </figure>

        { 
          pathname !== '/login' && pathname !== '/superad' &&
          <nav className='flex gap-2 md:gap-7'>
            <NavButton className={`min-w-[50px] md:min-w-[150px] px-4`} onClick={() => navigate('/login')}>LOGIN</NavButton>
          </nav>
        }
      </div>
    </header>
  )
}

export const SoftwareHeader = () => {
  const navigate = useNavigate();
  const { logOut } = useAuthContext();
  const { setExpand } = useValueContext();
  const [ profileOpen, setProfileOpen ] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
      alert('Logged Out Successfully')
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <header id='header' className={`col-span-2 | z-50 max-h-[6.9375rem] w-full bg-white | flex justify-start items-center | border-b border-primary-900 drop-shadow`}>
      <div className="content relative | max-w-[79rem] w-full px-8 py-5 flex items-center justify-between cursor-default">
        {/* LEFT LOGO */}
        <button onClick={() => setExpand(prev => !prev)}>
          <div className='size-8'>
            <img src={logoShort} alt="logo" />
          </div>
        </button>

        {/* MIDDLE ICONS */}
        <div className='text-primary-900 ml-32 flex justify-center items-center gap-10'>
          <NavLink
            to={`/software/cbt`}
            className={({ isActive }) => isActive? 'bg-primary-100 font-medium py-1.5 px-10 rounded-md transition-all duration-300': 'border border-primary-100 py-1.5 px-10 rounded-md | hover:bg-primary-50 transition-all duration-300 '}
          >
            <span className=' '>CBT</span>
          </NavLink>
          
          <NavLink 
            to={`/software/communication`}
            className={({ isActive }) => isActive? 'bg-primary-100  py-1.5 px-10 rounded-md transition-all duration-300': 'border border-primary-100 py-1.5 px-10 rounded-md hover:bg-primary-50 | transition-all duration-300'}
          >
            <span>Chat</span>
          </NavLink>
        </div>

        {/* RIGHT ICONS */}
        <div className='flex justify-center items-center gap-6'>
          <div onClick={() => setProfileOpen(!profileOpen)}>
            <HeaderAvatar src={avatarImg} />
          </div>
        </div>

        {/* RIGHT DROPDOWN */}
        <div 
          onMouseLeave={() => setProfileOpen(false)}
          onClick={() => setProfileOpen(!profileOpen)} 
          className={`
          absolute z-50 top-[99%] right-[3%] 
          w-80 max-h-0 drop-shadow-sm hover:drop-shadow-md primary-900 overflow-hidden 
          transition-all duration-500
          ${profileOpen && 'max-h-[30rem]' }
        `}>
          <div className='bg-primary-100 text-primary-900 p-8 space-y-6 shadow-sm rounded-lg'>
            <div className='flex justify-start items-center gap-4'>
              <div className='size-10 bg-dark-gray rounded-full'></div>
              <h2 className='font-medium'>Sarah Ogiri</h2>
            </div>

            <ul className='flex flex-col gap-5'>
              <Link to={`/software/user`}>Profile</Link>
              <Link to={`/software/fee`}>Fee Management</Link>
              <Link onClick={() => handleLogout()} >Log Out</Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export const AdminHeader = () => {
  return (
    <header id='header' className={`full-width col-span-2 | z-50 max-h-[6.9375rem] w-full bg-white | flex justify-start items-center | drop-shadow`}>
      <figure>
        <img src={logoFull} alt="Logo" />
      </figure>
    </header>
  )
}
