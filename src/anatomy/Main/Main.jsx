import React from 'react'
import Divider from '../../components/Divider'
import HeroSection from './sections/HeroSection'
import FeatureSection from './sections/FeatureSection'
import TestimonialSection from './sections/TestimonialSection'
import AboutSection from './sections/AboutSection'
import ChooseSection from './sections/ChooseSection'
import DownloadSection from './sections/DownloadSection'
import CallToSection from './sections/CallToSection'
import './main.css'

const Main = () => {
  return (
    <main className="full-width content-grid | w-full h-fit text-center border border-black">
      {/* HERO SECTION */}
      <HeroSection />
      <Divider />

      {/* WHY CHOOSE US? */}
      <ChooseSection />
      <Divider />

      {/* KEY FEATURES SECTION */}
      <FeatureSection />
      <Divider /> 

      {/* TESTIMONIALS */}
      <TestimonialSection />
      <Divider />

      {/* ABOUT US */}
      <AboutSection />
      <Divider />

      

      {/* DOWNLOAD */}
      <DownloadSection />
      <Divider />

      {/* CALL TO ACTION */}
      <CallToSection />
      
    </main>
  )
}

export default Main