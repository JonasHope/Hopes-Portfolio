import React from "react";
import styled from "styled-components";
import Header from "../components/sections/landing/Header";
import CursorEffect from "../components/cursor/CursorLight";
import AboutMe from "../components/sections/about/About";
import ContentWidth from "../styles/ContentWidth";

const Div = styled.div`
  display: flex;
`;

function Main() {
  return (
    <ContentWidth>
      <Div>
        <CursorEffect />
        <Header />
        <AboutMe />
      </Div>
    </ContentWidth>
  );
}

export default Main;
