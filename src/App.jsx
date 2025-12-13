import { Suspense, lazy } from "react";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator.jsx";
import SkipNavigation from "./components/SkipNavigation.jsx";

// Import other components normally
import Hero from "./sections/Hero.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoShowcase from "./sections/LogoShowCase.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import "./index.css";

// Lazy load heavier components
const FeatureCards = lazy(() => import("./sections/FeatureCards.jsx"));
// const Testimonials = lazy(() => import("./sections/Testimonials.jsx")); // Commented out - placeholder content

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-pulse text-white-50">Loading...</div>
  </div>
);

function App() {
  return (
    <>
      <SkipNavigation />
      <ScrollProgressIndicator />
      <NavBar />
      <main id="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
        <AboutMe />
        <ShowCaseSection />
        <LogoShowcase />
        <Suspense fallback={<LoadingFallback />}>
          <FeatureCards />
        </Suspense>
        {/* <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense> */}
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
