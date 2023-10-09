import React from "react";
import styled from "styled-components";

const AbountContainer = styled.div`
  padding-top: 40px;
`;

const SiteContent = styled.div`
  width: 50vw;
  padding: 20px;
`;

const Spacing = styled.div`
  width: 50vw;
`;

const AboutContent = styled.p``;

function AboutMe() {
  return (
    <>
      <Spacing></Spacing>
      <SiteContent>
        <AbountContainer>
          <AboutContent id="about">
            Hello, I'm Jonas Hope, a dedicated Norwegian Frontend Developer with
            a relentless passion for crafting exceptional digital experiences. I
            am driven by a thirst for knowledge, constantly seeking
            opportunities to expand my skill set and stay at the forefront of
            web development trends.
          </AboutContent>
        </AbountContainer>
        <div id="work"></div>
      </SiteContent>
    </>
  );
}

export default AboutMe;
