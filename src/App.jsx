import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./anatomy/Footer/Footer";
import Header from "./anatomy/Header/Header";
import Refer from "./anatomy/Header/Refer";
import Main from "./anatomy/Main/Main";



function App() {

  return (
  
    <div className='content-grid | min-h-dvh font-manrope divide-y-[8px]'>
      <Router>
        <Routes>
          <Route path='/'
            element={
              <>
                {/* HEADER */}
                <div className="full-width">
                  <Refer />
                  <Header />
                </div>
              
                {/* MAIN */}
                <Main />

                {/* FOOTER */}
                <Footer />
              </>
            }
          />
        </Routes>
        
      </Router>
    </div>
    
    
  )
}

export default App
