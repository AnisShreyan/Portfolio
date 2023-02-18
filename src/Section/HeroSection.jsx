import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="HeroSection">
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
            Anis
            <span
              style={{
                fontStyle: "italic",
                marginLeft: "-30px",
                marginRight: "40px",
              }}
            >
              '
            </span>
            Website
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
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
