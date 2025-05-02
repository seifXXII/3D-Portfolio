import React from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import NavBar from './components/NavBar'
import LogoShowcase from './sections/LogoShowCase'
import FeatureCards from './sections/FeatureCards'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
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