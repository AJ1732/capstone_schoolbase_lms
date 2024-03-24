import React from 'react'
import { NewsForm } from '../../components/Forms'

const Footer = () => {
  return (
    <footer className='full-width content-grid | w-full min-h-[290px] text-center'>
      <div className="content | font-generalSans size-full text-left py-16 flex justify-between items-start">
        <div className='space-y-5'>
          <h4 className='heading text-lg'>Reach Us</h4>
          <ul className='list-none flex flex-col justify-start items-start gap-5'>
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

        {/* COMPANY */}
        <div className='space-y-5'>
          <h4 className='heading text-lg'>Company</h4>
          <ul className='list-none flex flex-col justify-start items-start gap-5'>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
            <li>
              <span>Blogs</span>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className='space-y-5'>
          <h4 className='heading text-lg'>Quick Links</h4>
          <ul className='list-none flex flex-col justify-start items-start gap-5'>
            <li>
              <span>Download</span>
            </li>
            <li>
              <span>Forum</span>
            </li>
          </ul>
        </div>

        <NewsForm />
      </div>
    </footer>
  )
}

export default Footer