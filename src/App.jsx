import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowCaseSection from './sections/ShowCaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import LogoShowcase from './sections/LogoShowCase.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Contact />
      <Footer />
    </>
  )
}

export default App