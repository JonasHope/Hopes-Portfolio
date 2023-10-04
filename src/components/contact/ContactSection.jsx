import React from "react";
import styled from "styled-components";
import ContentWidth from "../../styles/ContentWidth";

const ContactContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.color.c1};
`;

const ContactHeader = styled.h2`
  font-size: ${(props) => props.theme.headersize.h2};
`;

function ContactSection() {
  return (
    <ContactContainer>
      <ContentWidth>
        <ContactHeader>Contact</ContactHeader>
      </ContentWidth>
    </ContactContainer>
  );
}

export default ContactSection;
