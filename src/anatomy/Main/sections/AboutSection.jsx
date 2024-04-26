import React from 'react'
import data from '../../../database/data.json'
import { TeamCard } from '../../../components/Cards'

const AboutSection = () => {
  const { teamMembers } = data;

  return (
    <section id='about' className="content | w-full min-h-[300px] border-b-[1px] border-[#007BFF]">
      <div className='font-generalSans | py-14 space-y-6'>
        <div className='space-y-5'>
          <h3 className="heading">
            ABOUT US
            <div className='mt-1 ml-[590px] h-1 w-[50px] bg-[#007BFF]'>
             </div>
          </h3>
          <p className="text-sm">In Schoolbase, we believe in revolutionizing education through innovative technology. Established with a vision to bridge the gap between educators, students, and parents, we offer a comprehensive EdTech solution designed to streamline every aspect of the learning experience.</p>
        </div>

        <div className='flex justify-between items-center gap-[190px]'>
          <div className='text-center space-y-5'>
            <h4 className='heading'>Mission</h4>
            <p className="text-sm">Our Mission To empower educational institutions with cutting-edge tools that foster collaboration, enhance communication and ultimately elevate the learning process.</p>
          </div>

          <div className='text-center space-y-5'>
            <h4 className='heading'>Vision</h4>
            <p className="text-sm">Our Vision We envision a world where education is accessible, inclusive, and enriching for all. Through continued innovation and unwavering dedication, we aim to be a driving force in shaping the future of education.</p>
          </div>
        </div>

        

      </div>
    </section>
  )
}

export default AboutSection