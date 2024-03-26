import { NavButton } from "./components/Buttons"
import { SignUpForm } from "./components/Form/Forms"

function App() {

  return (
    <div className="font-manrope p-20">
      

      {/* BUTTONS */}
      <div>
        <h2 className="text-2xl font-bold py-3">Buttons</h2>

        <div className="flex flex-col justify-start items-start gap-2">
          <NavButton>LOGIN</NavButton>
          <NavButton>SIGN UP</NavButton>
        </div>
      </div>

      {/* FORMS */}
      <div>
        <h2 className="text-2xl font-bold py-3">Buttons</h2>

        <div className="flex flex-col justify-start items-start gap-2">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

export default App
