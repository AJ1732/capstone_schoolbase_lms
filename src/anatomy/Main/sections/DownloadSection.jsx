import React from 'react'
import { BorderButton } from '../../../components/Buttons'
// import window from '../../../assets/window.png'
import laptop from "../../../assets/top view of laptop, headphones, perfume, cup, stapler, and sticky notes.png"
import { WhiteButton } from '../../../components/Buttons'



const DownloadSection = () => {
  return (
    <section className="content | w-full min-h-[420px] text-[#1b1b1b] py-7">
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <img src={laptop} alt="top view of laptop, headphones, perfume, cup, stapler, and sticky notes" className="w-[500px] ml-20" />
        </div>
        
        <div className='font-generalSans space-y-9 text-start'>
        <div className='space-y-6'>   
          <h2 className="heading">
            GET STARTED WITH SCHOOLBASE
            <div className='mt-1 h-1 w-[50px] bg-[#007BFF]'>
             </div>
          </h2>
          <h3 className="font-semibold">Student Grade Book</h3>
          <p className="text-sm">At Schoolbase we ensure that each students report card is as detailed as expected. Should different classes have different reporting style ? Absolutely </p>

          <h4  className="font-semibold">Student Performance Tracking</h4>
          <p className="text-sm">We have different charts to help you analyze your wards performance on the platform. Be it per term, per subject or otherwise. You are sure to stay on top </p>
          
        </div>
        <div className='flex justify-end mr-11'>
        <a href="https://schoolbase-lms.netlify.app/" target='_blank' >
              <WhiteButton className={`px-[70px] hover:bg-[#007BFF] hover:text-white`} >Get Started</WhiteButton>
            </a>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default DownloadSection