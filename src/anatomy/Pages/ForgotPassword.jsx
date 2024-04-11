import React from 'react'
import { ForgotPasswordForm } from '../../components/Form/Forms'

const ForgotPassword = () => {
  return (
    <div className='py-10 flex flex-col justify-center items-center gap-10'>
      <h1 className="text-4xl text-center font-normal">Reset your Password!</h1>
      <ForgotPasswordForm />
    </div>
  )
}

export default ForgotPassword