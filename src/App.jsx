import { BorderButton, DarkButton, LightButton, TransButton, WhiteButton } from "./components/Buttons"
import { FeatureCard, TeamCard, TestimonialCard } from "./components/Cards"
import { HeroForm, NewsForm } from "./components/Forms";
import data from './database/data.json'

const { features, testimonials, teamMembers } = data;

function App() {

  return (
    <div className='content-grid | min-h-dvh font-manrope divide-y-[8px] divide-white'>
      {/* Header */}
      <header className='full-width content-grid | w-full h-[144px] bg-blacker-gray text-center border border-black'>
        <div className="content size-full  border border-black"></div>
      </header>

      <main className="full-width content-grid | w-full h-fit text-center border border-black ">
        <div className="content w-full h-[515px]  border border-black"></div>
        <div className="full-width h-2 bg-white"></div>
        <div className="breakout w-full h-20  border border-black"></div>
      </main>

      <footer className='full-width content-grid | w-full min-h-[290px] bg-blacker-gray text-center border border-black'>
        <div className="content size-full  border border-black"></div>
      </footer>
    </div>
  )
}

export default App
