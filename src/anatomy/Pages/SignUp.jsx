import { useState } from "react"

import { Button } from "../../components/Button/Buttons"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../fireBase"

const SignUp = () => {
  //const navigate = useNavigate();

  const [data, setData] = useState("") 
  const {name, email, password} = data;

  const changeHandler = (e) => {
    setData({...data, [e.target.name] : [e.target.value]});
  } 

  const submitHandler = (e) => {
    e.preventDefault()
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error)
    })
  } 


  return (
    <form onSubmit={submitHandler} className="content | h-[calc(100vh_-_100px)] flex flex-col items-center justify-center ">
      <div className="text-center">
          <h1 className="text-4xl font-normal mb-4">CREATE ACCOUNT</h1>
          <h3>SIGN UP HERE</h3>
      </div>

      <div className="container1">
        <h3 className="mb-2">Name</h3>
        <input type="text" name="name" placeholder="Enter Full Name" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" value={name} onChange={changeHandler} required />
        <h3 className="mb-2">Email</h3>
        <input type="email" name="email" placeholder="Email Address" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" value={email} onChange={changeHandler} required />
        <h3 className="mb-2">Password</h3>
        <input type="password" name="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" value={password} onChange={changeHandler} required />

        <div className="flex justify-end mb-5 mt-3">
          <Button type="submit" variant="secondary" >SIGNUP</Button>
        </div>
      </div>
    </form>
  )
}

export default SignUp
