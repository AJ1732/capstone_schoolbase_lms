import { HeaderAvatar, ProfileAvatar } from "./Components/Avatar"
import { FormButton, NavButton } from "./Components/Button/Buttons"
import { LogInForm, SignUpForm } from "./Components/Form/Forms"
import { MonthCalender, WeekCalender } from "./Components/Calender/Calender"
import TodoList from "./Components/TodoList/TodoList"
import avatarImg from './assets/avatarImg.png'
import { CommAccordion } from "./Components/Accordion/Accordions"

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

      {/* AVATAR */}
      <div>
        <h2 className="text-3xl font-bold py-3">Avatars</h2>

        <div className="flex flex-col justify-start items-start gap-2">
          <h2 className="text-xl font-bold py-3">Header Avatar</h2>
          <HeaderAvatar src={avatarImg} />

          <h2 className="text-xl font-bold py-3">Profile Avatar</h2>
          <ProfileAvatar src={avatarImg} name={`Sarah Daniels`} title={`Student`} />
        </div>
      </div>

      {/* CALENDER */}
      <div>
        <h2 className="text-3xl font-bold py-3">Calender</h2>
        <div className="flex flex-col justify-start items-start gap-20">
          <div>
            <h2 className="text-xl font-bold py-3">Month Calender</h2>
            <MonthCalender />
          </div>

          <div>
            <h2 className="text-xl font-bold py-5">Week Calender</h2>
            <WeekCalender />
          </div>
        </div>
      </div>

      {/* TO DO LIST */}
      <div>
        <h2 className="text-3xl font-bold py-3">To Do List</h2>
        <TodoList />
      </div>

      {/* ACCORDION */}
      <div>
        <h2 className="text-3xl font-bold py-3">Accordion</h2>
        <CommAccordion status={`Ongoing`} title={`1 Subject`} content={`This is Content`} />
      </div>
    </div>
  )
}

export default App
