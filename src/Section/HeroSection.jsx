import React from "react";
import { motion } from "framer-motion";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function HeroSection() {
  return (
    <div className="HeroSection" id="hero">
      <div className="hero-container">
        <div className="hero-text-container">
          <motion.h3
            initial={{
              x: -500,
            }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            Welcome to
          </motion.h3>
          <motion.h1
            initial={{
              y: 100,
            }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            Anis' Website
          </motion.h1>
          <motion.p
            initial={{
              x: 500,
            }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            Frontend Developer
          </motion.p>
        </div>
        <ul>
          <li>
            <a href="#about-me"> About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
