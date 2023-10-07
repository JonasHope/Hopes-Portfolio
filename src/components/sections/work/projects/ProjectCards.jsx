import React, { useState } from "react";
import styled, { StyleSheetManager } from "styled-components";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";

const ProjectCardsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  ${(props) => props.theme.media.tablet} {
    justify-content: space-evenly;
  }
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
  background-image: url(${(props) => props.imageUrl});
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
  "devicon-javascript-plain": "Javascript",
  "devicon-vscode-plain-wordmark": "VScode",
};

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
      languages: [
        "devicon-html5-plain-wordmark",
        "devicon-css3-plain-wordmark",
        "devicon-react-original-wordmark",
        "devicon-javascript-plain",
        "devicon-vscode-plain-wordmark",
      ],
      description:
        "A React-powered venue listing and booking website. This is My 2nd-year project exam at Noroff school of techonolgy and digital media. Users can list and book venues, browse others' listings, update bookings/venues, personalize avatars, view your profile page were current bookings and venues are displayed.",
      siteLink: "https://unrivaled-torte-c369e4.netlify.app/",
      githubLink: "https://github.com/JonasHope/Project-Exam-2",
    },
    {
      name: "Auction House",
      imageUrl: require("../../../../images/VoomLow.jpg"),
      altText: "Voom Auction House website",
      languages: [
        "devicon-html5-plain-wordmark",
        "devicon-css3-plain-wordmark",
        "devicon-bootstrap-plain-wordmark",
        "devicon-sass-original",
        "devicon-javascript-plain",
        "devicon-vscode-plain-wordmark",
      ],
      description:
        " My 2nd year mid-term exam. It's an online auction platform where users can create accounts and receive 1000 credits to participate in auctions. Users can create, bid on, edit, and delete auctions. The profile page displays your own auctions and their current bids, making it an interactive online auction experience.",
      siteLink: "https://jonashope.github.io/Semester-Project-2/",
      githubLink: "https://github.com/JonasHope/Semester-Project-2",
    },
    {
      name: "Ecom Store",
      imageUrl: require("../../../../images/JSFLow.jpg"),
      altText: "Ecom Store website",
      languages: [
        "devicon-html5-plain-wordmark",
        "devicon-css3-plain-wordmark",
        "devicon-react-original-wordmark",
        "devicon-vscode-plain-wordmark",
      ],
      description:
        "My introduction to React. Emphasizing functionality over design, this simple site showcases a list of products on the landing page, all fetched through a REST API. Visitors can view individual items, add them to the cart, remove items, and complete purchases. Additionally, the site features a contact form.",
      siteLink: "https://darling-malasada-ab0605.netlify.app/",
      githubLink: "https://github.com/JonasHope/js-frameworks-ca",
    },
    {
      name: "Hopes Journey",
      imageUrl:
        "https://user-images.githubusercontent.com/95291501/194512127-a638eb60-2b20-4e3c-85d4-f9b4d0ce6237.png",
      altText: "Hopes Journey website",
      languages: [
        "devicon-html5-plain-wordmark",
        "devicon-css3-plain-wordmark",
        "devicon-javascript-plain",
        "devicon-vscode-plain-wordmark",
      ],
      description:
        "Hopes Journey: My first-year exam project at Noroff, built exclusively with HTML, CSS, and vanilla JavaScript. Content is personally created, stored, and fetched via a REST API. This travel blog site showcases a selection of my travel blog posts. I take pride in this project, given my knowledge at the time.",
      siteLink: "https://cheery-cobbler-7853ae.netlify.app/",
      githubLink:
        "https://github.com/Noroff-FEU-Assignments/project-exam-1-JonasHope",
    },
    {
      name: "CSM",
      imageUrl:
        "https://user-images.githubusercontent.com/95291501/194524816-e1816425-2ed3-4d5d-b94f-db5e64af31a8.png",
      altText: "CSM website",
      languages: [
        "devicon-html5-plain-wordmark",
        "devicon-css3-plain-wordmark",
      ],
      description:
        " Created at the end of my first semester during my first year of study. This website, built solely with HTML and CSS, represents a community science museum. It showcases exhibits and provides general information about the place. Designed with a playful, 'childish' theme to make it kid-friendly.",
      siteLink: "https://youthful-kepler-763b2a.netlify.app/",
      githubLink: "https://github.com/JonasHope/SemesterProject_CSM",
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
            <CardImg
              imageUrl={card.imageUrl}
              alt={card.altText}
              onClick={() => openModal(card.imageUrl)}
            />
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
