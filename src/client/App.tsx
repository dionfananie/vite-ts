import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages";
import Countdown from "./pages/Countdown";
import Questions from "./pages/Questions";

import { AppProvider } from "./contexts/App";
import ThankYou from "./pages/ThankYou";

export const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/kompetensi" element={<Questions />} />
        <Route path="/inggris" element={<Questions />} />
        <Route path="/indo" element={<Questions />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
