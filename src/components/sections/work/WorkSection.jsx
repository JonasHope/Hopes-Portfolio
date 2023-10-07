import React from "react";
import styled from "styled-components";
import ProjectCards from "./projects/ProjectCards";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
  margin: 5vh auto;
  padding: 5vh 15px;
  min-height: 100vh;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: 20px 5px;

  ${(props) => props.theme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const WorkHeader = styled.h2`
  font-size: ${(props) => props.theme.headersize.h2};
  margin-top: 0px;
`;

function WorkSection() {
  return (
    <Div>
      <WorkContainer id="work-section">
        <WorkHeader>Projects</WorkHeader>
        <ProjectCards />
      </WorkContainer>
    </Div>
  );
}

export default WorkSection;
