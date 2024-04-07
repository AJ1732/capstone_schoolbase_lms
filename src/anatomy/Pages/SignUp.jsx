import { SignUpForm } from "../../components/Form/Forms";


const SignUp = () => {
  return (
    <div className="content | min-h-[calc(100vh_-_100px)]">
      <div className="py-10 flex flex-col items-center justify-center">
        <div className="text-center my-5">
          <h1 className="text-4xl font-normal mb-1">CREATE ACCOUNT</h1>
          <h3>SIGN UP HERE</h3>
        </div>

        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUp
