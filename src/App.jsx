import "./App.css";
import AboutMe from "./Section/AboutMe";
import Contact from "./Section/Contact";
import HeroSection from "./Section/HeroSection";
import Navbar from "./Section/Navbar";
import Projects from "./Section/Projects";

function App() {
  return (
    <>
      <div className="app">
        <div className="water">
          <Navbar />
          <HeroSection />
          <AboutMe />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
