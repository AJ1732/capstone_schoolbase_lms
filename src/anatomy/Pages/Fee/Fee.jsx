import React from 'react'
import feeImg from "../../../assets/fee.svg"
import { Link, NavLink } from 'react-router-dom'


const feeData = [
  {
    id: 1,
    firstName: 'Sarah',
    lastName: 'DANIELS',
    payments: [
      {
        id: 'pay1',
        session: '2022/2023',
        term: 'First Term',
      },
      {
        id: 'pay2',
        session: '2022/2023',
        term: 'Second Term',
      },
      {
        id: 'pay3',
        session: '2022/2023',
        term: 'Third Term',
      },
    ]
  },
]

const Fee = () => {
  return (
    <section className='space-y-9'>
      <div className='bg-primary-10 py-5 px-5 md:px-12 rounded-md gap-5 | flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-semibold text-lg tracking-wide'>Fee Management</h1>
        <img src={feeImg} alt="" />
      </div>

      <div>
        {feeData.map(({ id, firstName, lastName, payments }) => (
          <div key={id} className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {payments.map(({ id, session, term }) => (
              <div key={id} className='bg-white shadow p-10 flex flex-col justify-center items-center gap-4 rounded-md'>
                <h4 className='font-bold'>
                  <span>{firstName} </span>
                  <span className='uppercase'>{lastName}</span>
                </h4>
                <div className='text-center leading-6'>
                  <p>{term}</p>
                  <p>{session}</p>
                </div>
                <Link to={"/software/paystackcheckout"}>
                  <button className='w-full bg-purple-50 text-primary-00 py-2.5 rounded-[0.625rem] '>
                    Make Payment
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Fee