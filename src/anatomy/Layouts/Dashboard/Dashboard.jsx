import CBTSection from "./sections/CBTSection"
import CoursesSection from "./sections/CoursesSection"
import NotesSection from "./sections/NotesSection"
import WelcomeSection from "./sections/WelcomeSection"

function Dashboard() {
  return (
    <div className="grid grid-cols-[280px_1fr_280px] gap-6">
      <WelcomeSection />
      <NotesSection />
      <CBTSection />
      <CoursesSection />
    </div>
  )
}

export default Dashboard
