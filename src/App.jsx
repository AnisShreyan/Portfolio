import "./App.css";
import AboutMe from "./Section/AboutMe";
import Contact from "./Section/Contact";
import { HeroSection } from "./Section/HeroSection";
import Potrater from "./Section/Potrater";
import Projects from "./Section/Projects";

function App() {
  return (
    <>
      <div className="app">
        <HeroSection />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      <Potrater />
    </>
  );
}

export default App;
