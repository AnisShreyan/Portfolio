import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export function HeroSection() {
  return (
    <div className="HeroSection" id="hero">
      <div className="hero-container">
        <div className="hero-text-container">
          <motion.h3
            initial={{
              x: -200,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            Welcome to
          </motion.h3>
          <motion.h1
            initial={{
              y: 100,
            }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "keyframes" }}
          >
            Anis' Website
          </motion.h1>

          <motion.p
            initial={{
              x: 200,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            Frontend Developer
          </motion.p>
        </div>
        <ul>
          <li>
            <Link to="about-me" duration={500} smooth={true}> About Me</Link>
          </li>
          <li>
            <Link to="projects" duration={500} smooth={true}>Projects</Link>
          </li>
          <li>
            <Link to="contact" duration={500} smooth={true}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

// export default HeroSection;
