import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from "./views/LandingPage.tsx";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
