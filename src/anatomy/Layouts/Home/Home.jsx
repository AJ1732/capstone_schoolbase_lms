
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div className="content | h-[calc(100vh_-_100px)] font-manrope size-full">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="inline-block mt-20 mr-64">
          <h1 className="text-4xl font-normal mb-5 mt-20 mr-20">Welcome to School Base's LMS</h1>
          <div className="grid grid-cols gap-4">
            <p>Revolutionizing education through innovative technology</p>
            <p>Login / Register to get started</p>
          </div>
        </div>
        <div className="mt-40 ml-96 -mr-96 mb-12">
          <NavLink to="/login">Administrator ? Sign in</NavLink>
        </div>
      </div> 
    </div>
  )
}

export default Home

