import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage.tsx";
import AboutPage from "./views/AboutPage.tsx";
import Login from "./views/Login.tsx";
import Register from "./views/Register.tsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/devChat-City/api" element={<LandingPage />} />
      <Route path="/devChat-City/api/about" element={<AboutPage />} />
      <Route path="/devChat-City/api/login" element={<Login />} />
      <Route path="/devChat-City/api/register" element={<Register />} />
    </Routes>
  );
}

export default App;
