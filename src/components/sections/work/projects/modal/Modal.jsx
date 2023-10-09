import React from "react";
import styled, { StyleSheetManager } from "styled-components";

const ModalOverlay = styled.div`
  display: ${(props) => (props.showModal ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  z-index: 1000;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  border-radius: 5px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontsize.s3};
  padding: 10px;
  background-color: ${(props) => props.theme.color.c3};
  color: ${(props) => props.theme.color.c2};
  border-radius: 5px;
`;

const Image = styled.img`
  width: -webkit-fill-available;
  height: 80vh;
`;

function Modal({ showModal, imageUrl, closeModal }) {
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => !["showModal"].includes(prop)}
    >
      <ModalOverlay showModal={showModal} onClick={closeModal}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <ModalContainer>
          {imageUrl && <Image src={imageUrl} alt="Modal" />}
        </ModalContainer>
      </ModalOverlay>
    </StyleSheetManager>
  );
}

export default Modal;
