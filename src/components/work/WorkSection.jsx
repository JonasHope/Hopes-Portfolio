import React from "react";
import styled from "styled-components";
import ContentWidth from "../../styles/ContentWidth";

const WorkContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.color.c4};
`;

const WorkHeader = styled.h2`
  font-size: ${(props) => props.theme.headersize.h2};
`;

function WorkSection() {
  return (
    <WorkContainer>
      <ContentWidth>
        <WorkHeader>Projects</WorkHeader>
      </ContentWidth>
    </WorkContainer>
  );
}

export default WorkSection;
