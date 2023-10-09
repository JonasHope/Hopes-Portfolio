import React from "react";
import styled from "styled-components";

const IntroContent = styled.div`
  padding-top: 40px;
`;

const Name = styled.h1`
  font-size: ${(props) => props.theme.headersize.h1};
  margin: 0px;
`;

const Dev = styled.h2`
  font-size: ${(props) => props.theme.headersize.h4};
  margin: 0px;
`;

const About = styled.p`
  width: 300px;
`;

function IntroMessage() {
  return (
    <IntroContent>
      <Name> Jonas Hope</Name>
      <Dev>Frontend Developer</Dev>
      <About>
        Driven by innovation, creating intuitive web solutions with a focus on
        user experience and modern technologies.
      </About>
    </IntroContent>
  );
}
export default IntroMessage;