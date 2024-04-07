import React from 'react'
import { HeaderAvatar } from "../../../../components/Avatar"
import avatarImg from '../../../../assets/avatarImg.png'
import dashboardHero from "../../../../assets/dashboardHero.svg"

const WelcomeSection = () => {
  return (
    <section className="md:col-span-3 | bg-primary-50 w-full h-[14.3125rem] px-5 md:px-12 flex justify-between items-center rounded-lg">
      <div className="flex justify-start items-start gap-6">
        <HeaderAvatar src={avatarImg} />
        <div className="text-sm md:text-base space-y-2">
          <h4>Welcome, <span className="font-bold">Sarah</span> </h4>
          <p>Here’s an overview of your classes</p>
          <p className='text-primary-00'>School Base Solutions</p>
        </div>
      </div>

      <figure className="max-w-80 max-h-48">
        <img src={dashboardHero} alt="dashboard img" />
      </figure>
    </section>
  )
}

export default WelcomeSection