import React from 'react'
import { WhiteButton } from '../../components/Buttons'

const Header = () => {
  return (
    <header className='content | w-full h-[144px] | text-center'>
      <div className="size-full flex justify-between items-center">
        <h1 className="font-generalSans font-semibold text-5xl">Logo</h1>

        <div className='font-semibold text-xl | flex justify-center items-center space-x-8'>
          <nav>
            <ul className='flex-center gap-8 '>
              <li>Home</li>
              <li>Features</li>
              <li>Testimonials</li>
              <li>About Us</li>
            </ul>
          </nav>

          <WhiteButton className={`px-[70px]`}>Download</WhiteButton>
        </div>

      </div>
    </header>
  )
}

export default Header