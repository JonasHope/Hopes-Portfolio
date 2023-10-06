import React from "react";
import styled from "styled-components";
import ContentWidth from "../../../styles/ContentWidth";

const ContactContainer = styled.div`
  min-height: 100vh;
`;

const ContactHeader = styled.h2`
  font-size: ${(props) => props.theme.headersize.h2};
`;

function ContactSection() {
  return (
    <ContactContainer id="contact-section">
      <ContentWidth>
        <ContactHeader>Contact</ContactHeader>
      </ContentWidth>
    </ContactContainer>
  );
}

export default ContactSection;
