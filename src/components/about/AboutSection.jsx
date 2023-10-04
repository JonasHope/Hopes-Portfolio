import React from "react";
import styled from "styled-components";
import ContentWidth from "../../styles/ContentWidth";

const AboutContainer = styled.div`
  height: 100vh;
`;

const AboutHeader = styled.h2`
  font-size: ${(props) => props.theme.fontsize.s3};
`;

function About() {
  return (
    <AboutContainer>
      <ContentWidth>
        <AboutHeader>About me</AboutHeader>
      </ContentWidth>
    </AboutContainer>
  );
}

export default About;
