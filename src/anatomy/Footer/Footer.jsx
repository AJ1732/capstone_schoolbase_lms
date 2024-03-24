import React from 'react'
import { NewsForm } from '../../components/Forms'

const Footer = () => {
  return (
    <footer className='full-width content-grid | w-full min-h-[290px] text-center border border-black'>
      <div className="content | font-generalSans size-full border border-black flex justify-between items-center">
        <div>
          <h4 className='heading text-2xl'>Reach Us</h4>
          <ul className='list-none flex flex-col justify-start items-start'>
            <li>
              <span>+2342 3456 789</span>
            </li>
            <li>
              <span>demo@gmail.com</span>
            </li>
            <li>
              <span>Nigeria</span>
            </li>
          </ul>
        </div>

        <div>

        </div>

        <div>

        </div>

        <NewsForm />
      </div>
    </footer>
  )
}

export default Footer