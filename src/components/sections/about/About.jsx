import React from "react";
import styled from "styled-components";
import Resume from "../../../resume/CV.pdf";

const AbountContainer = styled.div`
  padding: 40px 20px;
`;

const SiteContent = styled.div`
  padding: 20px;
`;

const AboutContent = styled.p``;

const DownloadContainer = styled.div`
  margin: 10px 0;
  padding: 10px 0;

  a {
    color: ${(props) => props.theme.color.c4};
  }
`;

function AboutMe() {
  return (
    <>
      <SiteContent>
        <AbountContainer>
          <AboutContent id="about">
            Hello, I'm Jonas Hope, a dedicated Norwegian Frontend Developer with
            a relentless passion for crafting exceptional digital experiences. I
            am driven by a thirst for knowledge, constantly seeking
            opportunities to expand my skill set and stay at the forefront of
            web development trends.
            <DownloadContainer>
              <a href="#" download="#">
                Download Resume
              </a>
            </DownloadContainer>
          </AboutContent>
        </AbountContainer>
      </SiteContent>
    </>
  );
}

export default AboutMe;
