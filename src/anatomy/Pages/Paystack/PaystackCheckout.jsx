import { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import "./Paystack.css"
import logo from "../../../assets/logo-full.svg"

function PaystackCheckout() {

  const publicKey = "pk_test_a0a197f123eef7e2fb74344244b51447b6e394f9"
  const amount = 1000000 //set in kobo
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this LMS, don't go!!!!"),
  }

  return (
    <>
      <div className='bg-primary-50 py-4 px-12 h-[220px] rounded-md | flex justify-start items-center'>
        <h1 className='font-semibold text-lg tracking-wide'>Paystack</h1>
      </div>
      
      <div className='flex flex-col items-center justify-center gap-5'>

      <div className="checkout drop-shadow-md rounded-sm mt-5 content | min-h-[calc(100vh_-_100px)]">


      <div className="flex flex-col items-center">
        <img src={logo} alt="" />
      </div>

      <div className="text-center font-semibold text-sm leading-6">
        <p className="">Make Payment </p>
        <p className="">NGN{amount / 100}</p>
      </div>

      <div className="checkout-form">
        <div className="checkout-field">
        <label  htmlFor="fullName">Name</label>
       <input type="text" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="checkout-field">
        <label htmlFor="email">Email</label>
    <input type="text" id="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="checkout-field">
        <label htmlFor="phoneNumber">Phone</label>
        <input type="text" id="phone" placeholder='Number' onChange={(e) => setPhone(e.target.value)} />
        </div>
        <PaystackButton className="paystack-button" {...componentProps} />
      </div>

      </div>

    </div>

    </>
  )
}

export default PaystackCheckout
