import React from "react";
import styled from "styled-components";
import IntroMessage from "./IntroMsg";
import Nav from "../../navigation/SiteNavigation";
import ContactSection from "../contact/ContactSection";

const HeaderContent = styled.div`
  position: fixed;
  top: 0;
  padding: 20px;
  min-height: 100vh;
`;

function Header() {
  return (
    <HeaderContent>
      <IntroMessage />
      <Nav />
      <ContactSection />
    </HeaderContent>
  );
}

export default Header;
