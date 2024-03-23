import Footer from "./anatomy/Footer/Footer";
import Header from "./anatomy/Header/Header";
import Main from "./anatomy/Main/Main";

function App() {

  return (
    <div className='content-grid | min-h-dvh font-manrope divide-y-[8px] divide-white'>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <Main />

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default App
