import React from "react";
import styled from "styled-components";
import IntroMessage from "./IntroMsg";
import Nav from "../../navigation/SiteNavigation";

const HeaderContent = styled.div`
  position: fixed;
  top: 0;
  padding: 20px;
`;

function Header() {
  return (
    <HeaderContent>
      <IntroMessage />
      <Nav />
    </HeaderContent>
  );
}

export default Header;
