import { SignUpForm } from "../../components/Form/Forms";


const SignUp = () => {
  return (
    <div className="content | h-[calc(100vh_-_100px)] flex flex-col items-center justify-center mt-12 mb-5">
      <div className="text-center">
        <h1 className="text-4xl font-normal mb-1">CREATE ACCOUNT</h1>
        <h3>SIGN UP HERE</h3>
      </div>

      <SignUpForm />
    </div>
  )
}

export default SignUp
