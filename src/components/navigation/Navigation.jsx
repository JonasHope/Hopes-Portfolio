import React from "react";
import styled from "styled-components";

const NavigationContainer = styled.nav`
  position: ${(props) => (props.sticky ? "fixed" : "absolute")};
  bottom: ${(props) => (props.sticky ? "auto" : "0")};
  top: ${(props) => (props.sticky ? "0" : "auto")};
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.color.c5};
  perspective: 1000px;
  align-items: center;
  z-index: 100;

  p {
    margin: 0 10px;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
    transform-origin: center center;
    padding: 20px;
  }

  p:hover {
    transform: rotateY(180deg) scale(1.2);
  }
`;

function Navigation({ sticky }) {
  return (
    <NavigationContainer sticky={sticky}>
      <p>Contact</p>
      <p>Work</p>
      <p>About</p>
    </NavigationContainer>
  );
}

export default Navigation;
