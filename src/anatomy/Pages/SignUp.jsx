import { useState } from "react"

import { Button } from "../../components/Button/Buttons"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../fireBase"

import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("") 
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 

  const submitHandler = async (e) => {
    e.preventDefault()
    
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Sign up successfull.! Login")
      navigate("/login")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorCode, errorMessage);
    });
  } 


  return (
    <form onSubmit={submitHandler} className="content | h-[calc(100vh_-_100px)] flex flex-col items-center justify-center mt-12 mb-5">
      <div className="text-center">
          <h1 className="text-4xl font-normal mb-1">CREATE ACCOUNT</h1>
          <h3>SIGN UP HERE</h3>
      </div>

      <div className="container2">
        <h3 className="mb-2">Name</h3>
        <input type="text" name="name" placeholder="Enter Full Name" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" value={name} onChange={(e) => setName(e.target.value)} required />
        <h3 className="mb-2">Email</h3>
        <input type="email" name="email" placeholder="Email Address" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <h3 className="mb-2">Password</h3>
        <input type="password" name="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <div className="flex justify-end mb-2 mt-2">
          <Button type="submit" variant="secondary" >SIGNUP</Button>
        </div>
      </div>
    </form>
  )
}

export default SignUp
