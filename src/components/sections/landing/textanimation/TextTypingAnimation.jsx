import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.color.c3};
  width: 500px;
  height: 300px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);

  ${(props) => props.theme.media.mobile} {
    width: 300px;
  }
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontsize.s4};
  margin-bottom: 20px;
  font-family: poppins-b;
  color: transparent;
  -webkit-text-stroke: 1px ${(props) => props.theme.color.c3};
  text-stroke: 1px ${(props) => props.theme.color.c3};
  background-clip: text;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${(props) => props.theme.media.mobile} {
    font-size: ${(props) => props.theme.fontsize.s2};
  }
`;

const HelloMsg = styled.span`
  margin-bottom: -25px;
`;

const Name = styled.span`
  color: ${(props) => props.theme.color.c3};
  font-family: poppins-r;
  font-size: ${(props) => props.theme.fontsize.s5};
  margin-bottom: -25px;
  ${(props) => props.theme.media.mobile} {
    font-size: ${(props) => props.theme.fontsize.s3};
  }
`;

const Intro = styled.p`
  text-align: start;
  font-size: ${(props) => props.theme.fontsize.s15};
`;

const DeveloperMsg = styled.span`
  text-align: center;
`;

function TextTypingAnimation() {
  const [helloMsg, setHelloMsg] = useState("");
  const [name, setName] = useState("");
  const [developerMsg, setDeveloperMsg] = useState("");
  const [intro, setIntro] = useState("");

  const helloMsgText = "Hi there, I'm";
  const nameText = "Jonas Hope";
  const developerMsgText = "Web Developer";
  const introText =
    "Driven by innovation, creating intuitive web solutions with a focus on user experience and modern technologies.";
  const typingSpeed = 25;

  useEffect(() => {
    const animateText = (text, setTextState) => {
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setTextState(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => {
        clearInterval(interval);
      };
    };

    animateText(helloMsgText, setHelloMsg);
    setTimeout(() => {
      animateText(nameText, setName);
    }, helloMsgText.length * typingSpeed);
    setTimeout(() => {
      animateText(developerMsgText, setDeveloperMsg);
    }, (helloMsgText.length + nameText.length) * typingSpeed);
    setTimeout(() => {
      animateText(introText, setIntro);
    }, (helloMsgText.length + nameText.length + developerMsgText.length) * typingSpeed);
  }, []);

  return (
    <ContentContainer>
      <Heading>
        <HelloMsg>{helloMsg}</HelloMsg>
        <Name>{name}</Name>
        <DeveloperMsg>{developerMsg}</DeveloperMsg>
      </Heading>
      <Intro>{intro}</Intro>
    </ContentContainer>
  );
}

export default TextTypingAnimation;
