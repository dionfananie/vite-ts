import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages";
import Countdown from "./pages/Countdown";
import Questions from "./pages/Questions";

import { AppProvider } from "./contexts/App";

export const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
