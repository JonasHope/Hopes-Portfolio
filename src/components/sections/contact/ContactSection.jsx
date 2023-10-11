import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  font-size: ${(props) => props.theme.fontsize.s1};
  color: ${(props) => props.theme.color.c3};
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.c6};
`;

const ContactHeader = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  transition: 0.3s ease, margin 0.3s ease;
  padding: 10px;
  margin: 10px;

    &:hover {
    color: ${(props) => props.theme.color.c4};
    .ArrowContainer {
      transform: translate(3px, -3px);
    }
  }

    ${(props) => props.theme.media.mobile} {
      flex-direction: column;
    }
  }
`;

const IconHoverEffect = styled.div`
  margin: 5px;
`;

const ArrowContainer = styled.span`
  margin-left: 5px;
  transition: transform 0.4s ease;
  transform-origin: bottom right;
  transform: translate(0px, 0px);
  display: inline;
  position: absolute;
`;

function ContactSection() {
  return (
    <ContactContainer id="contact">
      <ContactHeader>
        <span>Contact me </span>
        <IconHoverEffect>
          <span> Jonashope94@gmail.com</span>
          <ArrowContainer className="ArrowContainer">&#8599;</ArrowContainer>
        </IconHoverEffect>
      </ContactHeader>
    </ContactContainer>
  );
}

export default ContactSection;
