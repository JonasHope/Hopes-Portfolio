import React from "react";
import styled from "styled-components";
import me from "../../images/imageofme.jpg";
import { Link } from "react-router-dom";

const AboutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1040px;
  margin: 30px auto;
  padding: 10px 15px;

  ${(props) => props.theme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutHeader = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  letter-spacing: 2px;
`;

const AboutH2 = styled.h2`
  font-size: ${(props) => props.theme.fontsize.s3};
  margin: 0px;
`;

const ImageContainer = styled.div`
  background-image: url(${me});
  width: 50%;
  height: 70vh;
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

const AboutText = styled.p`
  line-height: 2;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.c3};
  text-decoration: none;
  padding: 20px 30px;
  border: 1px solid ${(props) => props.theme.color.c1};
  width: fit-content;

  &:hover {
    background-color: ${(props) => props.theme.color.c1};
    color: ${(props) => props.theme.color.c2};
  }
`;

function About() {
  return (
    <AboutContainer>
      <ImageContainer></ImageContainer>
      <AboutHeader>
        <AboutH2>About me</AboutH2>
        <AboutText>
          Hello, I'm Jonas Hope, a dedicated Norwegian Frontend Developer with a
          relentless passion for crafting exceptional digital experiences. I am
          driven by a thirst for knowledge, constantly seeking opportunities to
          expand my skill set and stay at the forefront of web development
          trends.
        </AboutText>
        <StyledLink>Read more</StyledLink>
      </AboutHeader>
    </AboutContainer>
  );
}

export default About;
