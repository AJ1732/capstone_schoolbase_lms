import CBTSection from "./sections/CBTSection"
import CoursesSection from "./sections/CoursesSection"
import NotesSection from "./sections/NotesSection"
import WelcomeSection from "./sections/WelcomeSection"

import { WeekCalender } from '../../../components/Calender/Calender'
import TodoList from "../../../components/TodoList/TodoList"

function Dashboard() {
  return (
    <div className="grid md:grid-cols-[280px_1fr_18rem] gap-4">
      <WelcomeSection />
      <NotesSection />
      <CBTSection />
      <CoursesSection />
      <div className="grid grid-rows-[8rem_1fr] gap-10">
        <WeekCalender />
        <TodoList />
      </div>
    </div>
  )
}

export default Dashboard
