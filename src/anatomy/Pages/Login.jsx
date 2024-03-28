import { useState } from "react"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Buttons';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../fireBase"

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("")

  //function when form is submitted
  const submitHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("/dashboard")
      console.log(user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage)
      console.log(errorCode, errorMessage)
    })

  }

  return (
    <>
    <form onSubmit={submitHandler}  className="content | min-h-[calc(100vh_-_100px)] flex flex-col items-center justify-center">
      <div className="text-center mt-5">
          <h1 className="text-4xl font-normal">WELCOME BACK!</h1>
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
    <h3 className="flex justify-end mr-[_380px] mb-5 -mt-5">Don't have an account?<NavLink to="/signup" className="font-semibold ml-2">Sign Up</NavLink>
    </h3>
    </>
  )
}

export default Login
