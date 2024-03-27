import Admin from "./Layouts/Admin"
import Header from "./Layouts/Header"


function Home() {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="inline-block mt-20">
            <h1 className="text-4xl font-normal mb-5 mt-20 mr-20">Welcome to School Base's LMS</h1>
              <div className="grid grid-cols gap-4">
                    <p>Revolutionizing education through innovative technology</p>
                    <p>Login / Register to get started</p>
              </div>
        </div>
        <div className="mt-40 ml-96 -mr-96">
            <Admin />
          </div>
      </div> 

    </>
  )
}

export default Home

