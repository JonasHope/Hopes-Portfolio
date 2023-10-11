import React from "react";
import styled from "styled-components";
import IntroMessage from "./IntroMsg";
import Nav from "../../navigation/SiteNavigation";
import SoMeIcons from "../../some/SoMeIcons";

const HeaderContent = styled.div`
  position: fixed;
  top: 0;
  padding: 20px;
  min-height: 100vh;

  ${(props) => props.theme.media.tablet} {
    position: relative;
  }
`;

function Header() {
  return (
    <HeaderContent>
      <IntroMessage />
      <Nav />
      <SoMeIcons />
    </HeaderContent>
  );
}

export default Header;
