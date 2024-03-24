import React from 'react'
import { BorderButton } from '../../../components/Buttons'
// import window from '../../../assets/window.png'

const DownloadSection = () => {
  return (
    <section className="content | w-full min-h-[420px] py-7">
      <div className='font-generalSans space-y-9'>
        <div className='space-y-5'>
          <h4 className="heading">Get Started with Our LMS</h4>
          <p>Welcome to our Download section! Here, you can access our versatile Learning Management System (LMS) software, designed to revolutionize teaching and learning experiences in K-12 education. Whether you're an educator, student, or parent, our LMS offers powerful tools and resources to enhance your educational journey. Choose your preferred platform below to download the LMS software and embark on a new era of education:</p>
        </div>
        <div className='max-w-[960px] mx-auto flex justify-between '>
          <div className='flex-center flex-col gap-4'>
            <figure className='size-[136px] bg-dark-gray'>
              {/* <img src={window} alt="" /> */}
            </figure>
            <BorderButton>Download for Windows</BorderButton>
          </div>

          <div className='flex-center flex-col gap-4'>
            <figure className='size-[136px] bg-dark-gray'>
              {/* <img src={window} alt="" /> */}
            </figure>
            <BorderButton>Download for MacOS</BorderButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection