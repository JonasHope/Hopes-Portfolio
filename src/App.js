import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />}/>
      <Route path="/main" element={<Main />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
