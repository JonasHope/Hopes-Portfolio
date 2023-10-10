import React, { useState } from "react";
import styled, { StyleSheetManager } from "styled-components";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";

const ProjectCardsContainer = styled.div`
  padding: 20px;

  ${(props) => props.theme.media.tablet} {
  }
`;

const ProjectCard = styled.div`
  padding: 20px;
  margin: 10px 0px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.c6};
  }
`;

const ImgAndLinkContainer = styled.div`
  margin: 6px 10px 0px 0px;
`;

const CardHeader = styled.h3`
  font-size: ${(props) => props.theme.fontsize.s15};
  margin: 0;
`;

const CardImg = styled.div`
  background-image: url(${(props) => props.imageUrl});
  min-width: 150px;
  height: 100px;
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.c4};
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const LanguageIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const CodingLang = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.c5};
  color: ${(props) => props.theme.color.c4};
  font-size: ${(props) => props.theme.fontsize.s09}
  width: fit-content;
  padding: 3px 10px;
  margin: 2px;
  letter-spacing: 1px;
`;

const WebLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 10px 0;
`;

const WebLink = styled(Link)`
  color: ${(props) => props.theme.color.c3};
  font-size: ${(props) => props.theme.fontsize.s1};
  letter-spacing: 2px;
  text-decoration: none;
  border-bottom: 2px solid ${(props) => props.theme.color.c3};
  margin: 5px 0;

  &:hover {
    transition: transform 1s ease, color 0.3s ease;
    transform: rotateX(360deg);
    color: ${(props) => props.theme.color.c4};
  }
`;

const ImageAndTextContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  margin: 0 5px;
`;

function ProjectCards() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setShowModal(false);
  };

  const cardData = [
    {
      name: "Holidaze",
      imageUrl: require("../../../../images/HolidazeLow.jpg"),
      altText: "Holidaze website",
      languages: ["React", "Styled Components", "Html", "Css", "VScode"],
      description:
        "A React-powered venue listing and booking website. Users can list and book venues, browse others' listings, update bookings/venues, personalize avatars.",
      siteLink: "https://unrivaled-torte-c369e4.netlify.app/",
      githubLink: "https://github.com/JonasHope/Project-Exam-2",
    },
    {
      name: "Auction House",
      imageUrl: require("../../../../images/VoomLow.jpg"),
      altText: "Voom Auction House website",
      languages: ["Html", "Css", "Bootstrap", "Sass", "Javascript", "VScode"],
      description:
        "Online auction platform where users can create accounts and receive 1000 credits to participate in auctions. Users can create, bid on, edit, and delete auctions. The profile page displays your own auctions and their current bids, making it an interactive online auction experience.",
      siteLink: "https://jonashope.github.io/Semester-Project-2/",
      githubLink: "https://github.com/JonasHope/Semester-Project-2",
    },
    {
      name: "Ecom Store",
      imageUrl: require("../../../../images/JSFLow.jpg"),
      altText: "Ecom Store website",
      languages: ["Html", "Css", "React", "Styled Components", "VScode"],
      description:
        "My introduction to React. Emphasizing functionality over design, this simple site showcases a list of products on the landing page. Visitors can view individual items, add them to the cart, remove items, and complete purchases.",
      siteLink: "https://darling-malasada-ab0605.netlify.app/",
      githubLink: "https://github.com/JonasHope/js-frameworks-ca",
    },
    {
      name: "Hopes Journey",
      imageUrl:
        "https://user-images.githubusercontent.com/95291501/194512127-a638eb60-2b20-4e3c-85d4-f9b4d0ce6237.png",
      altText: "Hopes Journey website",
      languages: ["Html", "Css", "Javascript", "VScode"],
      description:
        "(Currently under Maintenance) My first-year exam project at Noroff, built exclusively with HTML, CSS, and vanilla JavaScript. Content is personally created, stored, and fetched via a REST API. This travel blog site showcases a selection of my travel blog posts. I take pride in this project, given my knowledge at the time.",
      siteLink: "https://cheery-cobbler-7853ae.netlify.app/",
      githubLink:
        "https://github.com/Noroff-FEU-Assignments/project-exam-1-JonasHope",
    },
    {
      name: "CSM",
      imageUrl:
        "https://user-images.githubusercontent.com/95291501/194524816-e1816425-2ed3-4d5d-b94f-db5e64af31a8.png",
      altText: "CSM website",
      languages: ["Html", "Css"],
      description:
        "This website, built solely with HTML and CSS, represents a community science museum. It showcases exhibits and provides general information about the place. Designed with a playful, 'childish' theme to make it kid-friendly.",
      siteLink: "https://youthful-kepler-763b2a.netlify.app/",
      githubLink: "https://github.com/JonasHope/SemesterProject_CSM",
    },
  ];

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => !["imageUrl"].includes(prop)}
    >
      <ProjectCardsContainer id="work">
        {cardData.map((card, index) => (
          <ProjectCard key={index}>
            <ImageAndTextContainer>
              <ImgAndLinkContainer>
                <CardImg
                  imageUrl={card.imageUrl}
                  alt={card.altText}
                  onClick={() => openModal(card.imageUrl)}
                />
                <WebLinkContainer>
                  <WebLink
                    to={card.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </WebLink>
                  <WebLink
                    to={card.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </WebLink>
                </WebLinkContainer>
              </ImgAndLinkContainer>
              <TextContainer>
                <CardHeader>{card.name}</CardHeader>
                <CardDescription>{card.description}</CardDescription>
                <LanguageIcons>
                  {card.languages.map((language) => (
                    <CodingLang key={language}>{language}</CodingLang>
                  ))}
                </LanguageIcons>
              </TextContainer>
            </ImageAndTextContainer>
          </ProjectCard>
        ))}
      </ProjectCardsContainer>
      <Modal
        showModal={showModal}
        imageUrl={modalImage}
        closeModal={closeModal}
      />
    </StyleSheetManager>
  );
}

export default ProjectCards;
