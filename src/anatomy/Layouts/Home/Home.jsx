
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div className="content | min-h-[calc(100vh_-_100px)] font-manrope size-full">
      <div className="size-full flex flex-col items-baseline justify-between pt-20 py-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Welcome to School Base's LMS</h1>
          <div className="grid grid-cols gap-4">
            <p>Revolutionizing education through innovative technology</p>
            <p>Login / Register to get started</p>
          </div>
        </div>
        <div className="self-end">
          <NavLink to="/login">Administrator ? <span className="text-primary-00">Sign in</span></NavLink>
        </div>
      </div> 
    </div>
  )
}

export default Home

