import React from "react";
import styled from "styled-components";

const NavigationContainer = styled.nav`
  position: ${(props) => (props.sticky ? "fixed" : "absolute")};
  bottom: ${(props) => (props.sticky ? "auto" : "0")};
  top: ${(props) => (props.sticky ? "0" : "auto")};
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.color.c5};
  perspective: 1000px;
  z-index: 100;
  box-shadow: 0px 0px 3px rgb(242, 242, 242);

  p {
    margin: 0 10px;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
    transform-origin: center center;
    padding: 20px;
  }

  p:hover {
    transform: rotateY(180deg) scale(1.2);
    color: #e0c251;
  }
`;

const NavItems = styled.div`
  max-width: 1040px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Navigation({ sticky }) {
  return (
    <NavigationContainer sticky={sticky}>
      <NavItems>
        <p>Contact</p>
        <p>Work</p>
        <p>About</p>
      </NavItems>
    </NavigationContainer>
  );
}

export default Navigation;
