import { BorderButton, DarkButton, LightButton, TransButton, WhiteButton } from "./components/Buttons"

function App() {

  return (
    <div className="p-10">
      {/* Buttons */}
      <div className="flex flex-col justify-start items-start gap-2">
        <DarkButton>Subscribe</DarkButton>
        <LightButton>Subscribe</LightButton>
        <WhiteButton>Subscribe</WhiteButton>
        <TransButton>Subscribe</TransButton>
        <BorderButton>Subscribe</BorderButton>
      </div>
    </div>
  )
}

export default App
