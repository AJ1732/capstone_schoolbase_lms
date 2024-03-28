import NotesSection from "./sections/NotesSection"
import WelcomeSection from "./sections/WelcomeSection"

function Dashboard() {
  return (
    <div className="grid grid-cols-[280px_1fr_280px] gap-6">
      <WelcomeSection />
      <NotesSection />
    </div>
  )
}

export default Dashboard
