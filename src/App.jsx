import { FormButton, NavButton } from "./components/Button/Buttons"
import { LogInForm, SignUpForm } from "./components/Form/Forms"

function App() {

  return (
    <div className="font-manrope p-20 space-y-10">


      {/* BUTTONS */}
      <div>
        <h2 className="text-3xl font-bold py-3">Buttons</h2>

        <div className="flex flex-col justify-start items-start gap-2">
          <NavButton>LOGIN</NavButton>
          <NavButton>SIGN UP</NavButton>
          <FormButton>LOGIN</FormButton>
          <FormButton>SIGN UP</FormButton>
        </div>
      </div>

      {/* FORMS */}
      <div>
        <h2 className="text-3xl font-bold py-3">Forms</h2>

        <div className="flex flex-col justify-start items-start gap-2">
          <h2 className="text-xl font-bold py-3">Login Form</h2>
          <LogInForm />

          <h2 className="text-xl font-bold py-3">Sign Up Form</h2>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

export default App
