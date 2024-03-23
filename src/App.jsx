import { BorderButton, DarkButton, LightButton, TransButton, WhiteButton } from "./components/Buttons"
import { FeatureCard, TestimonialCard } from "./components/Cards"
import data from './database/data.json'

const { features, testimonials } = data;
console.log(features[0].img);
console.log(testimonials);

function App() {

  return (
    <div className="font-manrope p-10 space-y-10">
      {/* BUTTONS */}
      <div>
        <h2 className="text-2xl font-bold py-3">Buttons</h2>
        <div className="flex flex-col justify-start items-start gap-2">
          <DarkButton>Subscribe</DarkButton>
          <LightButton>Subscribe</LightButton>
          <WhiteButton>Subscribe</WhiteButton>
          <TransButton>Subscribe</TransButton>
          <BorderButton>Subscribe</BorderButton>
        </div>
      </div>

      {/* CARDS */}
      <div>
        <h2 className="text-2xl font-bold py-3">Cards</h2>

        {/* Feature Cards */}
        <h2 className="text-xl font-bold py-3">Feature Card</h2>
        <div>
          {features.map( feature => (
            <FeatureCard 
              key={feature.id}
              img={feature.img} 
              heading={feature.heading} 
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div>
      
        {/* Testimonial Cards */}
        <h2 className="text-xl font-bold py-3">Testimonial Card</h2>
        <div>
          {testimonials.map( testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              img={testimonial.img} 
              author={testimonial.author} 
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
