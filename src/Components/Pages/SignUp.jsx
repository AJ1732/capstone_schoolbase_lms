import Button from "../Layouts/Button"
import Header from "../Layouts/Header"

function SignUp() {
  return (
    <>
       <Header />
          <form className="flex flex-col items-center justify-center min-h-screen mt-1">
              <div className="text-center">
                  <h1 className="text-4xl font-normal mb-4">CREATE ACCOUNT</h1>
                  <h3>SIGN UP HERE</h3>
              </div>

           <div className="container1">
              <h3 className="mb-2">Name</h3>
              <input type="text" placeholder="Enter Full Name" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" />
              <h3 className="mb-2">Email</h3>
              <input type="text" placeholder="Email Address" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" />
              <h3 className="mb-2">Password</h3>
              <input type="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" />

              <div className="flex justify-end mb-5 mt-3">
                <Button type="button" variant="secondary" >SIGNUP</Button>
              </div>


           </div>


          </form>
    </>
  )
}

export default SignUp
