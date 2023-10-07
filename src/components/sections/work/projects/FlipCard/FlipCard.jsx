import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  perspective: 1000px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  cursor: pointer;
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  line-height: 2;
  letter-spacing: 2px;
`;

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer onClick={toggleFlip}>
      <Card style={{ transform: isFlipped ? "rotateY(180deg)" : "none" }}>
        <Front>{frontContent}</Front>
        <Back>{backContent}</Back>
      </Card>
    </CardContainer>
  );
};

export default FlipCard;
