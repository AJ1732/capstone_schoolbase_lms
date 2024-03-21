import Admin from "./Layouts/Admin"
import Header from "./Layouts/Header"


function Home() {
  return (
    <>
    <Header />
<div className="flex flex-col items-center justify-center h-screen mb-0">
    <div className="inline-block mt--10">
        <h1 className="text-4xl font-normal mb-5">Welcome to School Base's LMS</h1>
          <div className="grid grid-cols gap-4">
                <p>Revolutionizing education through innovative technology</p>
                <p>Login / Register to get started</p>
          </div>
    </div>
</div> 
     <Admin />
    </>
  )
}

export default Home
