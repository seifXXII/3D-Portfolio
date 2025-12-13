import { Suspense } from "react";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator.jsx";
import SkipNavigation from "./components/SkipNavigation.jsx";

// Import other components normally
import Hero from "./sections/Hero.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoShowcase from "./sections/LogoShowCase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import "./index.css";

function App() {
  return (
    <>
      <SkipNavigation />
      <ScrollProgressIndicator />
      <NavBar />
      <main id="main-content">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-pulse text-white-50">Loading...</div>
            </div>
          }
        >
          <Hero />
        </Suspense>
        <AboutMe />
        <ShowCaseSection />
        <LogoShowcase />
        <FeatureCards />
        <Testimonials />
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-pulse text-white-50">Loading...</div>
            </div>
          }
        >
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
