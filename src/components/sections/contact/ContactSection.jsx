import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  position: absolute;
  bottom: 120px;
  font-size: ${(props) => props.theme.fontsize.s09};
  color: ${(props) => props.theme.color.c4};
  cursor: pointer;
`;

const ContactHeader = styled.h3`
  display: flex;
  align-items: center;
  transition: 0.3s ease, margin 0.3s ease;
  &:hover {
    .ArrowContainer {
      transform: scale(2);
      margin: 0 10px;
    }
  }
`;

const ArrowContainer = styled.span`
  display: inline-block;
  margin: 0 5px;
  transition: transform 0.7s ease, margin 0.7s ease;
`;

function ContactSection() {
  return (
    <ContactContainer id="contact-section">
      <ContactHeader>
        Contact me
        <ArrowContainer className="ArrowContainer">&#8594;</ArrowContainer>
        Jonashope94@gmail.com
      </ContactHeader>
    </ContactContainer>
  );
}

export default ContactSection;
