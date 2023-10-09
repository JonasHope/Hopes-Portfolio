import React, { useState, useEffect } from "react";
import { Cursor } from "../components/cursor/CursorLight";
import Header from "../components/sections/landing/Header";

function Main() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div>
      <Cursor
        style={{
          left: cursorPosition.x + "px",
          top: cursorPosition.y + "px",
        }}
      />
      <Header />
    </div>
  );
}

export default Main;
