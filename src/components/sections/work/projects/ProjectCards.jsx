import React from "react";
import styled, { StyleSheetManager } from "styled-components";
import { Link } from "react-router-dom";

const ProjectCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ProjectCard = styled.div`
  border: 1px solid ${(props) => props.theme.color.c1};
  padding: 20px;
  width: fit-content;
  margin: 10px;
`;

const CardHeader = styled.h3`
  font-size: ${(props) => props.theme.fontsize.s15};
  margin: 0px 0px 20px 0px;
`;

const CardImg = styled.div`
  background-image: url(${(props) =>
    props.imageUrl}); /* Use the imageUrl prop here */
  width: 300px;
  height: 150px;
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

const CardDescription = styled.p`
  width: 300px;
`;

const LanguageIcons = styled.div`
  padding: 10px 0px;
  i {
    font-size: ${(props) => props.theme.fontsize.s2};
    padding: 5px;
  }
`;

const WebLinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const WebLink = styled(Link)`
  color: ${(props) => props.theme.color.c3};
  font-size: ${(props) => props.theme.fontsize.s1};
  letter-spacing: 2px;
  text-decoration: none;
  border-bottom: 2px solid ${(props) => props.theme.color.c3};

  &:hover {
    transition: transform 0.3s ease, color 0.3s ease;
    transform: rotateY(180deg);
    color: ${(props) => props.theme.color.c1};
  }
`;

const iconMapping = {
  "devicon-html5-plain-wordmark": "HTML5 Icon",
  "devicon-css3-plain-wordmark": "CSS3 Icon",
  "devicon-react-original-wordmark": "React Icon",
  "devicon-bootstrap-plain-wordmark": "Bootstrap Icon",
  "devicon-sass-original": "Sass Icon",
};

function ProjectCards() {
  const cardData = [
    {
      name: "Holidaze",
      imageUrl: require("../../../../images/HolidazeLow.jpg"),
      altText: "Holidaze website",
      languages: [
        "devicon-html5-plain-wordmark",
        "devicon-css3-plain-wordmark",
        "devicon-react-original-wordmark",
      ],
      description:
        "A React-powered venue listing and booking website. My 2nd-year project at Noroff, where users can list/book venues, browse others' listings, update bookings/venues, and personalize avatars.",
    },
  ];

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => !["imageUrl"].includes(prop)}
    >
      <ProjectCardsContainer>
        {cardData.map((card, index) => (
          <ProjectCard key={index}>
            <CardHeader>{card.name}</CardHeader>
            <CardImg imageUrl={card.imageUrl} alt={card.altText} />
            <LanguageIcons>
              {card.languages.map((iconClass, index) => (
                <i
                  key={index}
                  className={iconClass}
                  title={iconMapping[iconClass]}
                ></i>
              ))}
            </LanguageIcons>
            <CardDescription>{card.description}</CardDescription>
            <WebLinkContainer>
              <WebLink
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </WebLink>
              <WebLink
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </WebLink>
            </WebLinkContainer>
          </ProjectCard>
        ))}
      </ProjectCardsContainer>
    </StyleSheetManager>
  );
}

export default ProjectCards;
