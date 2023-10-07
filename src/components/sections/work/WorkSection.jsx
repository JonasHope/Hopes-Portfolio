import React from "react";
import styled from "styled-components";
import ProjectCards from "./projects/ProjectCards";

const Projects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
  margin: 10vh auto;
  padding: 10vh 15px;
  min-height: 100vh;
`;

const WorkContainer = styled.div`
  display: flex;
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

const ProjectDescription = styled.p`
  max-width: 500px;
  line-height: 2;
  letter-spacing: 2px;
`;

function WorkSection() {
  return (
    <Projects id="work-section">
      <WorkContainer>
        <div>
          <WorkHeader>Projects</WorkHeader>
          <ProjectDescription>
            Explore My Projects: This section showcases a collection of my
            projects developed to date. Each project represents a unique journey
            in web development and design. From early experiments to more
            complex applications, you can discover the evolution of my skills
            and creativity. Click on the projects to learn more and see them in
            action.
          </ProjectDescription>
        </div>

        <ProjectCards />
      </WorkContainer>
    </Projects>
  );
}

export default WorkSection;
