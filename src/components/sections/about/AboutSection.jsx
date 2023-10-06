import React, { useState } from "react";
import styled, { StyleSheetManager } from "styled-components";
import me from "../../../images/imageofme.jpg";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
  margin: 10vh auto;
  padding: 10vh 15px;
`;

const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 5px;

  ${(props) => props.theme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutHeader = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  letter-spacing: 2px;
`;

const AboutH2 = styled.h2`
  font-size: ${(props) => props.theme.fontsize.s3};
  margin: 0px;
`;

const ImageContainer = styled.div`
  background-image: url(${me});
  width: 40%;
  height: 600px;
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 40px;
  border-radius: 5px;

  ${(props) => props.theme.media.mobile} {
    margin: 10px;
    width: 100%;
  }
`;

const AboutMainText = styled.p`
  line-height: 2;
`;

const AboutExpandedText = styled.p`
  line-height: 2;
  max-height: ${({ expanded }) => (expanded ? "100%" : "0px")};
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const ReadMoreButton = styled.p`
  color: ${(props) => props.theme.color.c3};
  text-decoration: none;
  padding: 20px 30px;
  border: 1px solid ${(props) => props.theme.color.c1};
  width: fit-content;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.color.c1};
    color: ${(props) => props.theme.color.c2};
  }
`;

function About() {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => !["expanded"].includes(prop)}
    >
      <Div id="about-section">
        <AboutContainer>
          <ImageContainer></ImageContainer>
          <AboutHeader>
            <AboutH2>About me</AboutH2>
            <AboutMainText>
              Hello, I'm Jonas Hope, a dedicated Norwegian Frontend Developer
              with a relentless passion for crafting exceptional digital
              experiences. I am driven by a thirst for knowledge, constantly
              seeking opportunities to expand my skill set and stay at the
              forefront of web development trends.
            </AboutMainText>
            <AboutExpandedText expanded={expanded}>
              My commitment to excellence means that I push myself to deliver
              nothing less than perfection. I thrive on turning creative ideas
              into elegant, user-friendly websites and applications that leave a
              lasting impact.
              <br />
              <br />
              As a frontend developer, I bring both creativity and precision to
              the table, ensuring that every project I undertake achieves its
              full potential. With a keen eye for detail and a love for clean,
              responsive design, I am committed to delivering results that not
              only meet but exceed expectations.
              <br />
              <br />I look forward to collaborating with you to bring your
              digital vision to life. Let's create something extraordinary
              together.
            </AboutExpandedText>
            <ReadMoreButton onClick={toggleText}>
              {expanded ? "Read less" : "Read more"}
            </ReadMoreButton>
          </AboutHeader>
        </AboutContainer>
      </Div>
    </StyleSheetManager>
  );
}

export default About;
