import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

function AboutMe() {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end" ]
  });
  
  return (
    <div className="about-me" id="about-me">
      <motion.div
        className="about-container"
        ref={ref}
        style={{ scaleX: scrollYProgress }}
      >
        <h2>About Me...</h2>
        <p>
          Hi, I'm a Frontend Developer, skilled in HTMl5, CSS3, JavaScript,
          ReactJs, Framer Motion, ReactJs
        </p>
      </motion.div>
    </div>
  );
}

export default AboutMe;
