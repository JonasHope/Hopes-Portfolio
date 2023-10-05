import React from "react";
import styled from "styled-components";
import ContentWidth from "../../styles/ContentWidth";

const WorkContainer = styled.div`
  min-height: 100vh;
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
