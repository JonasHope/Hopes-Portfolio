import React, { useState } from "react";
import styled, { StyleSheetManager } from "styled-components";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";
import cardData from "../data/CardData";

const ProjectCardsContainer = styled.div`
  padding: 20px;

  ${(props) => props.theme.media.tablet} {
  }
`;

const ProjectCard = styled(Link)`
  text-decoration: none;
`;

const ImageAndTextContainer = styled.div`
  display: flex;
  padding: 20px;
  margin: 10px 0px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.c6};
    .CornerArrowTop {
      transform: translate(3px, -3px);
      color: ${(props) => props.theme.color.c4};
    }
  }

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
  }
`;

const ImgAndLinkContainer = styled.div`
  margin: 6px 10px 0px 0px;
`;

const CardHeader = styled.h3`
  font-size: ${(props) => props.theme.fontsize.s15};
  margin: 0;
  color: ${(props) => props.theme.color.c2};
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
  padding: 10px;

  &:hover {
    color: ${(props) => props.theme.color.c4};
    border-bottom: 2px solid ${(props) => props.theme.color.c4};

    .CornerArrow {
      transform: translate(3px, -3px);
    }
  }
`;

const TextContainer = styled.div`
  margin: 0 5px;
`;

const CornerArrowTop = styled.span`
  transition: transform 0.4s ease, margin 0.4s ease;
  transform-origin: bottom right;
  transform: translate(0px, 0px);
  color: ${(props) => props.theme.color.c3};

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`;

const CornerArrow = styled.span`
  margin-left: 5px;
  transition: transform 0.4s ease;
  transform-origin: bottom right;
  transform: translate(0px, 0px);
  display: inline;
  position: absolute;
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

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => !["imageUrl"].includes(prop)}
    >
      <ProjectCardsContainer id="work">
        {cardData.map((card, index) => (
          <ProjectCard to={card.siteLink} key={index}>
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
                    <CornerArrow className="CornerArrow">&#8599;</CornerArrow>
                  </WebLink>
                  <WebLink
                    to={card.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                    <CornerArrow className="CornerArrow">&#8599;</CornerArrow>
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
              <CornerArrowTop className="CornerArrowTop">
                &#8599;
              </CornerArrowTop>
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
