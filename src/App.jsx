import { BorderButton, DarkButton, LightButton, TransButton, WhiteButton } from "./components/Buttons"
import { FeatureCard, TeamCard, TestimonialCard } from "./components/Cards"
import { HeroForm, NewsForm } from "./components/Forms";
import data from './database/data.json'

const { features, testimonials, teamMembers } = data;

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
          <BorderButton>Subscribe</BorderButton>
          <TransButton>Subscribe</TransButton>
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

        {/* Testimonial Cards */}
        <h2 className="text-xl font-bold py-3">Team Card</h2>
        <div>
          {teamMembers.map( teamMember => (
            <TeamCard 
              key={teamMember.id}
              img={teamMember.img} 
              author={teamMember.author} 
            />
          ))}
        </div>
      </div>

      {/* FORMS */}
      <div>
        <h2 className="text-2xl font-bold py-3">Forms</h2>

        <h2 className="text-xl font-bold py-3">Hero Form</h2>
        <HeroForm />

        <h2 className="text-xl font-bold py-3">News Form</h2>
        <NewsForm />
      </div>
    </div>
  )
}

export default App
