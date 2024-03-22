import Header from "../Layouts/Header"
import Button from './../Layouts/Button';
import { Link } from 'react-router-dom';



function Login() {
  return (
    <>
    <Header />
     <form className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
            <h1 className="text-4xl font-normal mb-4">WELCOME BACK!</h1>
            <h3>LOGIN HERE</h3>
        </div>

        <div className="container1">
          <h3 className="mb-2">Email</h3>
          <input type="text" placeholder="Email Address" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" />
          <h3 className="mb-2">Password</h3>
          <input type="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" />
          <input type="checkbox" /> <label>Remember me</label>

          <div className="flex justify-end mb-5 mt-3">
            <Link>Forgot your password? </Link>
             <Button type="button" variant="secondary" >LOGIN</Button>
          </div>
          
       
        </div>
      </form>
    </>
  )
}

export default Login
