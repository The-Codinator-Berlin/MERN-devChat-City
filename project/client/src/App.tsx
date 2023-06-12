import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./views/LandingPage.tsx";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App
