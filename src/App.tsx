import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages';
import Countdown from './pages/Countdown';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/countdown" element={<Countdown />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
