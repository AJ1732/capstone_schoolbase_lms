import Header from "../Layouts/Header"
import Button from '../Layouts/Button';
import { Link } from 'react-router-dom';
import { useState } from "react"
import { auth } from "../../fireBase"
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {

  const [email, setEmail] = useState("") 
  const {password, setPassword} = useState("")

  //function when form is submitted
  const submitHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error)
    })

  }

  return (
    <>
    <Header />
     <form onSubmit={submitHandler}  className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mt-32">
            <h1 className="text-4xl font-normal mb-4">WELCOME BACK!</h1>
            <h3>LOGIN HERE</h3>
        </div>

        <div className="container1">
          <h3 className="mb-2">Email</h3>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" required />
          <h3 className="mb-2">Password</h3>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" required />
          <input type="checkbox" /> <label>Remember me</label>

          <div className="flex justify-end mb-5 mt-3">
            <Link>Forgot your password? </Link>
             <Button type="submit" variant="secondary">LOGIN</Button>
          </div>
          
       
        </div>
      </form>
    </>
  )
}

export default Login
