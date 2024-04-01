import { NavLink } from 'react-router-dom';
import { LogInForm } from "../../components/Form/Forms";

const Login = () => {
  return (
    <div className="content | min-h-[calc(100vh_-_100px)] flex flex-col items-center justify-center">
      <div className="text-center mt-5">
          <h1 className="text-4xl font-normal">WELCOME BACK!</h1>
          <h3>LOGIN HERE</h3>
      </div>

      <LogInForm />
      
      <h3 className="flex justify-end mr-[_380px] mt-5">
        Don't have an account?
        <NavLink to="/signup" className="font-semibold ml-2">Sign Up</NavLink>
      </h3>
    </div>
  )
}

export default Login
