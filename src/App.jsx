import Home from "./Components/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Components/Pages/Login"
import SignUp from "./Components/Pages/SignUp"
import Dashboard from "./Components/Pages/Dashboard"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        
        </Routes>
      </Router>
      
    </>
  )
}

export default App
