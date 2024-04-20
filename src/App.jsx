import Home from "./anatomy/Layouts/Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./anatomy/Pages/Login"
import SignUp from "./anatomy/Pages/SignUp"
import Dashboard from "./anatomy/Pages/Dashboard/Dashboard"
import HomeLayout from "./anatomy/Layouts/Home/HomeLayout"
import SoftwareLayout from "./anatomy/Layouts/Software/SoftwareLayout"
import User from "./anatomy/Pages/User/User"
import Lessons from "./anatomy/Pages/Lessons/Lessons"
import Notes from "./anatomy/Pages/Notes/Notes"
import Assignments from "./anatomy/Pages/Assignments/Assignments"
import Results from "./anatomy/Pages/Results/Results"
import Classroom from "./anatomy/Pages/Classroom/Classroom"
import Attendance from "./anatomy/Pages/Attendance/Attendance"
import Calendar from "./anatomy/Pages/Calendar/Calendar"
import Communication from "./anatomy/Pages/Communication/Communication"
import CBT from "./anatomy/Pages/CBT/CBT"
import ProtectedRoute from "./ProtectedRoute"
import ErrorNavigate from "./anatomy/Pages/Error/ErrorNavigate"
import ForgotPassword from "./anatomy/Pages/ForgotPassword"
import Fee from "./anatomy/Pages/Fee/Fee"
import ErrorBoundary from "./anatomy/Pages/Error/ErrorBoundary"
import ErrorPage from "./anatomy/Pages/Error/ErrorPage"
import PaystackCheckout from "./anatomy/Pages/Paystack/PaystackCheckout"


function App() {
  return (
    <div className="overflow-x-hidden">
      <ErrorBoundary fallback={<ErrorPage />}>
        <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Route>
            <Route path="/software" element={
              <ProtectedRoute>
                <SoftwareLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard/>}/>
              <Route path="/software/user" element={<User/>}/>
              <Route path="/software/lessons" element={<Lessons />}/>
              <Route path="/software/notes" element={<Notes />}/>
              <Route path="/software/assignments" element={<Assignments />}/>
              <Route path="/software/results" element={<Results />}/>
              <Route path="/software/classroom" element={<Classroom />}/>
              <Route path="/software/attendance" element={<Attendance />}/>
              <Route path="/software/calendar" element={<Calendar />}/>
              <Route path="/software/paystackcheckout" element={<PaystackCheckout />}/>
              <Route path="/software/cbt" element={<CBT />}/>
              <Route path="/software/communication" element={<Communication />}/>
              <Route path="/software/fee" element={<Fee />}/>
            </Route>
            <Route path="*" element={<ErrorNavigate />} />
          </Routes>
        </Router>   
      </ErrorBoundary>
    </div>
  )
}

export default App
