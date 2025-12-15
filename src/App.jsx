import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Skills from './sections/Skills';
import Testimonials from './components/Testimonials';

ReactGA.initialize('G-GFPJZR3GR5'); // Replace with your GA4 ID

const App = () => {
  useEffect(() => {
    // Google Analytics: Track pageview on load
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // 75% Scroll Event - GA4 + Clarity
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / pageHeight) * 100;

      if (scrollPercent >= 75 && !window.__scrollTracked) {
        window.__scrollTracked = true;

        // Google Analytics
        ReactGA.event({
          category: "Scroll",
          action: "Scrolled 75%",
          label: "Main Page"
        });

        // Microsoft Clarity
        if (window.clarity) {
          window.clarity("event", "scrolled_75_percent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("App rendered");

  return (
    <>
      <SEO
        title="Zaamir | Full Stack & Game Developer"
        description="Zaamir's personal portfolio – showcasing modern web, mobile, and game development projects. Clean UI, powerful code."
        image="https://zaamir-portfolio.vercel.app/og-image.png"
        url="https://zaamir-portfolio.vercel.app/"
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  );
};

export default App;
