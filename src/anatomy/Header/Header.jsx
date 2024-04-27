import React from 'react'
import { WhiteButton } from '../../components/Buttons'
import logo from "../../assets/school-B-logo.png"
import { Link} from 'react-router-dom'


const Header = () => {
  
  return (

    <header className='content | w-full h-[144px] | text-center bg-[#FFFFFF]'>
      <div className="size-full flex justify-between items-center">
        <img src={logo} alt="schoolbase-logo" className='w-60' />

        <div className='font-semibold text-xl | flex justify-center items-center space-x-8 mr-12'>
          <nav>
            <ul className='flex-center gap-8 '>
              <li><a href="/">Home</a></li>
              <li><a href="/features">Features</a></li>
               <li><a href="/testimonial">Testimonials</a></li>
              <li><a href="about">About Us</a></li>
            </ul>
          </nav>

            <a href="https://schoolbase-lms.netlify.app/" target='_blank' >
              <WhiteButton className={`px-[70px]`} >Get Started</WhiteButton>
            </a>

        </div>

      </div>
    </header>
  )
}

export default Header