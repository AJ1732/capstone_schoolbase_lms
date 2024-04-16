import React from 'react'
import { useAuthContext } from '../../../../context/AuthProvider'
import { HeaderAvatar } from "../../../../components/Avatar"
import avatarImg from '../../../../assets/avatarImg.png'
import dashboardHero from "../../../../assets/dashboardHero.svg"

const WelcomeSection = () => {
  const { user } = useAuthContext();
  
  return (
    <>
      <section className='md:col-span-3 | bg-primary-50 py-8 px-5 md:px-12 rounded-md | flex flex-col md:flex-row justify-between items-center gap-10'>
        <div className="flex justify-start items-start gap-3 md:gap-6">
          <HeaderAvatar src={avatarImg} />
          <div className="text-sm md:text-base space-y-2">
            <h4>Welcome<span className="font-bold">{user? `, ${user.email}` : ''}</span> </h4>
            <p>Here’s an overview of your classes</p>
            <p className='text-primary-00'>School Base Solutions</p>
          </div>
        </div>
        <img src={dashboardHero} alt="" />
      </section>
      
      {/* <section className="md:col-span-3 | bg-primary-50 w-full h-[14.3125rem] px-5 md:px-12 flex justify-between items-center rounded-lg">
        <div className="flex justify-start items-start gap-6">
          <HeaderAvatar src={avatarImg} />
          <div className="text-sm md:text-base space-y-2">
            <h4>Welcome<span className="font-bold">{user? `, ${user.email}` : ''}</span> </h4>
            <p>Here’s an overview of your classes</p>
            <p className='text-primary-00'>School Base Solutions</p>
          </div>
        </div>

        <figure className="max-w-80 max-h-48">
          <img src={dashboardHero} alt="dashboard img" />
        </figure>
      </section> */}
    </>
  )
}

export default WelcomeSection