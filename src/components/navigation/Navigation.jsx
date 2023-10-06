import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavigationContainer = styled.nav`
  position: ${(props) => (props.sticky ? "fixed" : "absolute")};
  bottom: ${(props) => (props.sticky ? "auto" : "0")};
  top: ${(props) => (props.sticky ? "0" : "auto")};
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.color.c5};
  perspective: 1000px;
  z-index: 100;
  box-shadow: 0px 0px 3px rgb(242, 242, 242);

  p {
    margin: 0 10px;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
    transform-origin: center center;
    padding: 20px;
  }

  p:hover {
    transform: rotateY(180deg) scale(1.2);
    color: #e0c251;
  }
`;

const NavItems = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function Navigation({ sticky }) {
  const [activeSection, setActiveSection] = useState("");

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      const workSection = document.getElementById("work-section");
      const contactSection = document.getElementById("contact-section");
      const scrollThreshold = 100;

      if (
        aboutSection &&
        aboutSection.getBoundingClientRect().top < scrollThreshold
      ) {
        setActiveSection("about");
      } else if (
        workSection &&
        workSection.getBoundingClientRect().top < scrollThreshold
      ) {
        setActiveSection("work");
      } else if (
        contactSection &&
        contactSection.getBoundingClientRect().top < scrollThreshold
      ) {
        setActiveSection("contact");
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationContainer sticky={sticky}>
      <NavItems>
        <p
          onClick={() => scrollToSection("contact-section")}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </p>
        <p
          onClick={() => scrollToSection("work-section")}
          className={activeSection === "work" ? "active" : ""}
        >
          Work
        </p>
        <p
          onClick={() => scrollToSection("about-section")}
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </p>
      </NavItems>
    </NavigationContainer>
  );
}

export default Navigation;
