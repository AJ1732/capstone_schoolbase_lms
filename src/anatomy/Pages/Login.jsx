import { NavLink } from 'react-router-dom';
import { LogInForm } from "../../components/Form/Forms";

const Login = () => {
  return (
    <div className="content | min-h-[calc(100vh_-_100px)] py-10">
      <div className='flex flex-col items-center justify-center gap-5'>
        <div className="text-center my-5">
            <h1 className="text-4xl font-normal">WELCOME BACK!</h1>
            <h3>LOGIN HERE</h3>
        </div>

        <LogInForm />
      </div>
    </div>
  )
}

export default Login
