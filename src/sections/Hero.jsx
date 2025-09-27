import React from "react";
import { Link } from "react-scroll";
import ReactGA from "react-ga4";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const handleResumeClick = () => {
    // Google Analytics
    ReactGA.event({
      category: "interaction",
      action: "click_resume",
      label: "hero_section_resume_button",
    });

    // Microsoft Clarity
    if (window.clarity) {
      window.clarity("event", "click_resume");
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Zaamir 👋
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A passionate <span>Full Stack Developer</span> & <span>Game Developer</span>{" "}
          building modern websites, mobile apps, and games.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className="hero-button"
          >
            View Projects
          </Link>

          <a
            href="https://rebrand.ly/zaamir-cv"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button resume-button"
            onClick={handleResumeClick}
          >
            View Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
