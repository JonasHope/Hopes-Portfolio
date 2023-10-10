import React from "react";
import styled from "styled-components";
import Resume from "../../../resume/CV.pdf";

const AbountContainer = styled.div`
  padding: 40px 20px;
`;

const SiteContent = styled.div`
  padding: 20px;
`;

const AboutContent = styled.div`
  inline-height: 1px;
  letter-spacing: 1px;
`;

const DownloadContainer = styled.p`
  margin: 10px 0;
  padding: 10px 0;

  a {
    color: ${(props) => props.theme.color.c4};
    text-decoration: none;

    &:hover {
      .CornerArrow {
        transform: translate(3px, -3px);
      }
    }
  }
`;

const CornerArrow = styled.span`
  margin: 0 5px;
  transition: transform 0.4s ease, margin 0.4s ease;
  transform-origin: bottom right;
  transform: translate(0px, 0px);
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
              <a href={Resume} download="CV.pdf">
                Download Resume
                <CornerArrow className="CornerArrow">&#8599;</CornerArrow>
              </a>
            </DownloadContainer>
          </AboutContent>
        </AbountContainer>
      </SiteContent>
    </>
  );
}

export default AboutMe;
