import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@pages/landingpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
