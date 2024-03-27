import Home from "./anatomy/Layouts/Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./anatomy/Pages/Login"
import SignUp from "./anatomy/Pages/SignUp"
import Dashboard from "./anatomy/Layouts/Dashboard/Dashboard"
import HomeLayout from "./anatomy/Layouts/Home/HomeLayout"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
