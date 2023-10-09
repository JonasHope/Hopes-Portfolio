import React from "react";
import styled from "styled-components";
import ContentWidth from "../../../styles/ContentWidth";
import IntroMessage from "./IntroMsg";
import Nav from "../../navigation/SiteNavigation";
import AboutMe from "../about/About";

const SiteContainer = styled.div`
  display: flex;
  height: 400vh;
`;

const HeaderContent = styled.div`
  position: fixed;
  top: 0;
  padding: 20px;
`;

const SiteContent = styled.div`
  width: 50vw;
  padding: 20px;
`;

const Spacing = styled.div`
  width: 50vw;
`;

function Header() {
  return (
    <ContentWidth>
      <SiteContainer>
        <HeaderContent>
          <IntroMessage />
          <Nav />
        </HeaderContent>
        <Spacing></Spacing>
        <SiteContent>
          <AboutMe />
        </SiteContent>
      </SiteContainer>
    </ContentWidth>
  );
}

export default Header;
