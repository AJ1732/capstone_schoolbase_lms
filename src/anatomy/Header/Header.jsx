import React from 'react'
// import { HashLink  from 'react-router-hash-link'
import { WhiteButton } from '../../components/Buttons'
import logo from "../../assets/school-B-logo.png"
import { Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const Header = () => {
  
  return (

    <header className='content | w-full h-[144px] | text-center bg-[#FFFFFF]'>
      <nav className="size-full flex justify-between items-center">
        <img src={logo} alt="schoolbase-logo" className='w-60' />

        <div className='font-semibold text-xl text-[#1B1B1B] | flex justify-center items-center space-x-8 mr-12'>
          <ul className='flex-center gap-8'>
            <HashLink to={`/`} smooth>
              <li className='hover:text-[#007BFF]'>Home</li>
            </HashLink>
            <HashLink to={`#features`} smooth>
              <li className='hover:text-[#007BFF]'>Features</li>
            </HashLink>
            <HashLink to={`#testimonials`} smooth>
              <li className='hover:text-[#007BFF]'>Testimonials</li>
            </HashLink>
            <HashLink to={`#about`} smooth>
              <li className='hover:text-[#007BFF]'>About Us</li>
            </HashLink>
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