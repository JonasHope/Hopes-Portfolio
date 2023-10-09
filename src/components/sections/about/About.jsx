import React from "react";
import styled from "styled-components";

const AbountContainer = styled.div`
  padding-top: 40px;
`;

const AboutContent = styled.p``;

function AboutMe() {
  return (
    <AbountContainer>
      <AboutContent>
        Hello, I'm Jonas Hope, a dedicated Norwegian Frontend Developer with a
        relentless passion for crafting exceptional digital experiences. I am
        driven by a thirst for knowledge, constantly seeking opportunities to
        expand my skill set and stay at the forefront of web development trends.
      </AboutContent>
    </AbountContainer>
  );
}

export default AboutMe;
