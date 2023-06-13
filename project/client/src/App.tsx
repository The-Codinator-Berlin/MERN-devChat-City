import { Route, Routes } from 'react-router-dom';
import LandingPage from "./views/LandingPage.tsx";
import AboutPage from "./views/AboutPage.tsx";

import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/devChat-City/api" element={<LandingPage />} />
      <Route path="/devChat-City/api/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App
