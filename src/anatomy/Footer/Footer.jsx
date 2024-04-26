import React from 'react'
import { NewsForm } from '../../components/Forms'
import "./footer.css"
import call from "../../assets/call.png"
import location from "../../assets/location.png"
import msg from "../../assets/msg.png"

const Footer = () => {
  return (
    
    <footer className='full-width content-grid | w-full min-h-[290px] text-center footer-image'>
      <div className="content | font-generalSans size-full text-left py-16 flex justify-between items-start text-white">
        <div className='space-y-5 ml-14'>
          <h4 className='heading text-lg'>Reach Us</h4>
          <ul className='list-none flex flex-col justify-start items-start gap-5'>
            <li>
              <div className="flex justify-between gap-5">
                <img src={call} alt="call us"  className="w-5 h-4 mt-1" />
                <span>+2342 3456 789</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between gap-5">
                <img src={msg} alt="send us a mail"  className="w-5 h-4 mt-1" />
                <span>schoolbase@gmail.com</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between gap-5">
                 <img src={location} alt="our location" className="w-5 h-4 mt-1" />
                 <span>Nigeria</span>
              </div>
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