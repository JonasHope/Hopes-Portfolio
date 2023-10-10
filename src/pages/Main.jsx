import React from "react";
import styled from "styled-components";
import Header from "../components/sections/landing/Header";
import CursorEffect from "../components/cursor/CursorLight";
import AboutMe from "../components/sections/about/About";
import ContentWidth from "../styles/ContentWidth";
import ProjectCards from "../components/sections/work/projects/ProjectCards";

const SiteContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  width: 54%;
`;

const Space = styled.div`
  width: 46%;
`;

function Main() {
  return (
    <ContentWidth>
      <SiteContainer>
        <Header />
        <Space></Space>
        <ContentContainer>
          <AboutMe />
          <ProjectCards />
        </ContentContainer>
      </SiteContainer>
      <CursorEffect />
    </ContentWidth>
  );
}

export default Main;
