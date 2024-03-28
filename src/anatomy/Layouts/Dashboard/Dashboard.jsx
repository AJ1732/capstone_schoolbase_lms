import CBTSection from "./sections/CBTSection"
import CoursesSection from "./sections/CoursesSection"
import NotesSection from "./sections/NotesSection"
import WelcomeSection from "./sections/WelcomeSection"

import { WeekCalender } from '../../../components/Calender/Calender'
import TodoList from "../../../components/TodoList/TodoList"

function Dashboard() {
  return (
    <div className="grid grid-cols-[280px_1fr_280px] gap-6">
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
