import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.color.c5};
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: poppins-b;
  color: transparent;
  -webkit-text-stroke: 1px ${(props) => props.theme.color.c5};
  text-stroke: 1px ${(props) => props.theme.color.c5};
  background-clip: text;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HelloMsg = styled.span`
  margin-bottom: -30px;
`;

const Name = styled.span`
  color: ${(props) => props.theme.color.c5};
  font-family: poppins-r;
  font-size: 4rem;
  margin-bottom: -25px;
`;

const Intro = styled.p`
  max-width: 400px;
  text-align: start;
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
  const typingSpeed = 40;

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
