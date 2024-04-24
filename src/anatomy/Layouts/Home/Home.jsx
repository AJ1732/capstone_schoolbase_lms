
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="content | min-h-[calc(100vh_-_100px)] font-manrope size-full">
      <div className="size-full flex flex-col items-baseline justify-between pt-40 py-10">
        <div className="space-y-8">
          <h2 className="text-6xl font-bold">Welcome to Schoolbase</h2>
          <div className="font-medium text-xl | grid grid-cols gap-4">
            <p>Revolutionizing education through innovative technology</p>
            <p><Link to={`/login`} className="text-primary-00">Login</Link> to get started</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Home

