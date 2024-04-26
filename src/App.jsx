import Footer from "./anatomy/Footer/Footer";
import Header from "./anatomy/Header/Header";
import Refer from "./anatomy/Header/Refer";
import Main from "./anatomy/Main/Main";

function App() {

  return (
    <div className='content-grid | min-h-dvh font-manrope divide-y-[8px] divide-white'>
      {/* HEADER */}
      <div className="full-width">
      <Refer />
      <Header />
      </div>
     

      {/* MAIN */}
      <Main />

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default App
