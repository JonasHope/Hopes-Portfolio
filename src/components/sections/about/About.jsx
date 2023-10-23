import React from "react";
import styled from "styled-components";
import Resume from "../../../resume/CV-2023.pdf";

const AbountContainer = styled.div`
  padding: 25px 10px;
  margin: 25px 10px;
`;

const SiteContent = styled.div`
  padding: 20px;
`;

const AboutContent = styled.div`
  inline-height: 1px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.color.c3};
`;

const DownloadContainer = styled.p`
  margin: 10px 0;
  padding: 10px 0;

  a {
    color: ${(props) => props.theme.color.c4};
    text-decoration: none;
    display: inline-block;
    position: relative;

    &:hover {
      .CornerArrow {
        transform: translate(3px, -3px);
      }
    }
  }
`;

const CornerArrow = styled.span`
  margin-left: 5px;
  transition: transform 0.4s ease;
  transform-origin: bottom right;
  transform: translate(0px, 0px);
  display: inline;
  position: absolute;
  top: 0;
`;

function AboutMe() {
  return (
    <>
      <SiteContent>
        <AbountContainer>
          <AboutContent id="about">
            Hello, I'm a dedicated Norwegian Frontend Developer with a
            relentless passion for crafting exceptional digital experiences.
            I've recently graduated from the Noroff School of Technology and
            Digital Media, where I honed my skills as a frontend developer. My
            education at Noroff has provided me with a robust foundation in
            coding languages such as JavaScript, HTML, and CSS, as well as
            expertise in popular frontend frameworks like Bootstrap, SASS,
            React, and Styled Components. Additionally, I've become proficient
            in version control through platforms like GitHub.
            <br />
            <br />
            During my time at Noroff, I've not only delved deep into the
            technical aspects of web development but also gained valuable
            insights into UX and UI design. I've acquired a comprehensive
            understanding of business workflows and industry standards,
            enriching my skill set with the holistic knowledge needed to deliver
            user-friendly and cutting-edge digital solutions. I am driven by a
            thirst for knowledge, constantly seeking opportunities to expand my
            skill set and stay at the forefront of web development trends. My
            commitment to creating outstanding digital experiences is matched
            only by my dedication to staying current in an ever-evolving field.
          </AboutContent>
          <DownloadContainer>
            <a href={Resume} download="CV.pdf">
              Download Resume
              <CornerArrow className="CornerArrow">&#8599;</CornerArrow>
            </a>
          </DownloadContainer>
        </AbountContainer>
      </SiteContent>
    </>
  );
}

export default AboutMe;
