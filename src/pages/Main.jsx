import React from "react";
import styled from "styled-components";
import Header from "../components/sections/landing/Header";
import CursorEffect from "../components/cursor/CursorLight";
import AboutMe from "../components/sections/about/About";
import ContentWidth from "../styles/ContentWidth";
import ProjectCards from "../components/sections/work/projects/ProjectCards";
import ContactSection from "../components/sections/contact/ContactSection";
import ScrollToTop from "../components/scroll/BackToTop";

const SiteContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.media.tablet} {
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  width: 54%;

  ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`;

const Space = styled.div`
  width: 46%;
`;

function Main() {
  return (
    <>
      <ScrollToTop />
      <ContentWidth>
        <SiteContainer>
          <Header />
          <Space></Space>
          <ContentContainer>
            <AboutMe />
            <ProjectCards />
            <ContactSection />
          </ContentContainer>
        </SiteContainer>
        <CursorEffect />
      </ContentWidth>
    </>
  );
}

export default Main;
