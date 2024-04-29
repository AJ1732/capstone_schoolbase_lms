import React from 'react'
import { WhiteButton } from '../../components/Buttons'
import logo from "../../assets/school-B-logo.png"
import { Link} from 'react-router-dom'


const Header = () => {
  
  return (

    <header className='content | w-full h-[144px] | text-center bg-[#FFFFFF]'>
      <nav className="size-full flex justify-between items-center">
        <img src={logo} alt="schoolbase-logo" className='w-60' />

        <div className='font-semibold text-xl text-[#1B1B1B] | flex justify-center items-center space-x-8 mr-12'>
          <ul className='flex-center gap-8'>
            <li className='hover:text-[#007BFF]'><a href="/">Home</a></li>
            <li className='hover:text-[#007BFF]'><a href="/features">Features</a></li>
            <li className='hover:text-[#007BFF]'><a href="/testimonial">Testimonials</a></li>
            <li className='hover:text-[#007BFF]'><a href="about">About Us</a></li>
          </ul>
          
          <a href="https://schoolbase-lms.netlify.app/" target='_blank' >
            <WhiteButton className={`px-[70px] hover:bg-[#007BFF] hover:text-white`} >Get Started</WhiteButton>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header