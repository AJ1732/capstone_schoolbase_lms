import Header from "../Layouts/Header"
import Button from './../Layouts/Button';
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useNavigate } from "react-router-dom"




function Login() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  }) 

  const {email, password} = data;

  const changeHandler = (e) => {
    setData({...data, [e.target.name] : [e.target.value]});
  } 

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(data)
  }



  return (
    <>
    <Header />
     <form onSubmit={submitHandler}  className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
            <h1 className="text-4xl font-normal mb-4">WELCOME BACK!</h1>
            <h3>LOGIN HERE</h3>
        </div>

        <div className="container1">
          <h3 className="mb-2">Email</h3>
          <input type="email" name="email" value={email} onChange={changeHandler} placeholder="Email Address" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" required />
          <h3 className="mb-2">Password</h3>
          <input type="password" name="password" value={password} onChange={changeHandler} placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" required />
          <input type="checkbox" /> <label>Remember me</label>

          <div className="flex justify-end mb-5 mt-3">
            <Link>Forgot your password? </Link>
             <Button type="submit" variant="secondary" >LOGIN</Button>
          </div>
          
       
        </div>
      </form>
    </>
  )
}

export default Login
