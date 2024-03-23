import { BorderButton, DarkButton, LightButton, TransButton, WhiteButton } from "./components/Buttons"
import { FeatureCard, TeamCard, TestimonialCard } from "./components/Cards"
import Divider from "./components/Divider";
import { HeroForm, NewsForm } from "./components/Forms";
import data from './database/data.json'

const { features, testimonials, teamMembers } = data;

function App() {

  return (
    <div className='content-grid | min-h-dvh font-manrope divide-y-[8px] divide-white'>
      {/* Header */}
      <header className='content | w-full h-[144px] | text-center border border-black'>
        <div className="size-full border border-black flex-center">
          <h1 className="text-3xl font-bold">HEADER</h1>
        </div>
      </header>

      <main className="full-width content-grid | w-full h-fit text-center border border-black ">
        {/* HERO SECTION */}
        <section className="content | w-full min-h-[515px]  border border-black flex-center">
          <h1 className="text-3xl font-bold">HERO SECTION</h1>
        </section>
        <Divider />

        {/* KEY FEATURES SECTION */}
        <section className="content | w-full min-h-[1000px]  border border-black flex-center">
          <h1 className="text-3xl font-bold">FEATURES</h1>
        </section>
        <Divider />

        {/* TESTIMONIALS */}
        <section className="breakout | w-full min-h-[480px] | bg-black bg-opacity-80 | border border-black flex-center">
          <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
        </section>
        <Divider />

        {/* ABOUT US */}
        <section className="content | w-full min-h-[760px]  border border-black flex-center">
          <h1 className="text-3xl font-bold">ABOUT US</h1>
        </section>
        <Divider />

        {/* WHY CHOOSE US? */}
        <section className="full-width content-grid | min-h-[540px] bg-black bg-opacity-80 border border-black">
          <div className="content | size-full | border border-black flex-center">
            <h1 className="text-3xl font-bold">WHY CHOOSE US?</h1>
          </div>
        </section>
        <Divider />

        {/* DOWNLOAD */}
        <section className="content | w-full min-h-[420px]  border border-black flex-center">
          <h1 className="text-3xl font-bold">DOWNLOAD</h1>
        </section>
        <Divider />

        {/* CALL TO ACTION */}
        <section className="full-width content-grid | min-h-[150px] bg-blacker-gray border border-black">
          <div className="content | size-full | border border-black flex-center">
            <h1 className="text-3xl font-bold">CALL TO ACTION</h1>
          </div>
        </section>
      </main>

      <footer className='content | w-full min-h-[290px] text-center border border-black'>
        <div className="size-full border border-black flex-center">
          <h1 className="text-3xl font-bold">FOOTER</h1>
        </div>
      </footer>
    </div>
  )
}

export default App
