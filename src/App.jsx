import Home from "./Components/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Components/Pages/Login"
import SignUp from "./Components/Pages/SignUp"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        
        </Routes>
      </Router>
      
    </>
  )
}

export default App
