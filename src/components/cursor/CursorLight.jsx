import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  box-shadow: 0 0 400px 200px rgba(1, 24, 187, 30%);
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
`;

function CursorEffect() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorPositionOnScroll = () => {
      setCursorPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y,
      }));
    };

    document.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("scroll", updateCursorPositionOnScroll);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("scroll", updateCursorPositionOnScroll);
    };
  }, []);

  return (
    <Cursor
      style={{
        left: cursorPosition.x + "px",
        top: cursorPosition.y + "px",
        position: "fixed",
      }}
    />
  );
}

export default CursorEffect;
