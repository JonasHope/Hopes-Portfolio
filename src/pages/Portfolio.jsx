import React, { useState, useEffect } from "react";
import VideoPlayer from "../components/featured/FeaturedSection";
import About from "../components/about/AboutSection";
import WorkSection from "../components/work/WorkSection";
import ContactSection from "../components/contact/ContactSection";
import Navigation from "../components/navigation/Navigation";

function Portfolio() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight;
      setIsSticky(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <VideoPlayer />
      <Navigation sticky={isSticky} />
      <About />
      <WorkSection />
      <ContactSection />
    </>
  );
}

export default Portfolio;
