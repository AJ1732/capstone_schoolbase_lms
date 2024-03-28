import Home from "./anatomy/Layouts/Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./anatomy/Pages/Login"
import SignUp from "./anatomy/Pages/SignUp"
import Dashboard from "./anatomy/Pages/Dashboard/Dashboard"
import HomeLayout from "./anatomy/Layouts/Home/HomeLayout"
import SoftwareLayout from "./anatomy/Layouts/Software/SoftwareLayout"
import User from "./anatomy/Pages/User/User"
import Lessons from "./anatomy/Pages/Lessons/Lessons"


function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/software" element={<SoftwareLayout />}>
            <Route index element={<Dashboard/>}/>
            <Route path="/software/user" element={<User/>}/>
            <Route path="/software/lessons" element={<Lessons />}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
