import React from 'react'
import data from '../../../database/data.json'
import { TeamCard } from '../../../components/Cards'

const AboutSection = () => {
  const { teamMembers } = data;

  return (
    <section id='about' className="content | w-full min-h-[760px]">
      <div className='font-generalSans | py-14 space-y-6'>
        <div className='space-y-5'>
          <h3 className="heading">About Us</h3>
          <p>In School Base, we believe in revolutionizing education through innovative technology. Established with a vision to bridge the gap between educators, students, and parents, we offer a comprehensive EdTech solution designed to streamline every aspect of the learning experience.</p>
        </div>

        <div className='flex justify-between items-center gap-[190px]'>
          <div className='text-center space-y-5'>
            <h4 className='heading'>Mission</h4>
            <p>Our Vision We envision a world where education is accessible, inclusive, and enriching for all. Through continued innovation and unwavering dedication, we aim to be a driving force in shaping the future of education.</p>
          </div>

          <div className='text-center space-y-5'>
            <h4 className='heading'>Mission</h4>
            <p>Our Vision We envision a world where education is accessible, inclusive, and enriching for all. Through continued innovation and unwavering dedication, we aim to be a driving force in shaping the future of education.</p>
          </div>
        </div>

        <div className='flex flex-col justify-start items-center gap-9'>
          <h4 className='heading'>Development Team</h4>
          <div className='grid grid-cols-2 gap-16 place-items-center'>
            {teamMembers.map( teamMember => (
              <TeamCard 
                key={teamMember.id}
                img={teamMember.img} 
                author={teamMember.author} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection