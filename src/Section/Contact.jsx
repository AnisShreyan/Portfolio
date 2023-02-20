import { motion } from "framer-motion";
import React from "react";
import SocialMedia from "./Components/SocialMedia";

function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-container">
          <h2>Contact</h2>
          <p>Contact me here</p>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <SocialMedia />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact;
