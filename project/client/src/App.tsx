import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage.tsx";
import AboutPage from "./views/AboutPage.tsx";
import Login from "./views/Login.tsx";
import Register from "./views/Register.tsx";
import UserProfile from "./views/UserProfile.tsx";
import "./App.css";
import Loading from "./components/loading/LoadingOnLog.tsx";
import DevChat from "./views/devChat.tsx";

function App() {
  return (
    <Routes>
      <Route path="/devChat-City/api" element={<LandingPage />} />
      <Route path="/devChat-City/api/about" element={<AboutPage />} />
      <Route path="/devChat-City/api/login" element={<Login />} />
      <Route path="/devChat-City/api/register" element={<Register />} />
      <Route path="/devChat-City/api/userProfile" element={<UserProfile />} />
      <Route path="/devChat-City/api/devchat" element={<DevChat />} />
      <Route path="/devChat-City/api/loading" element={<Loading />} />
    </Routes>
  );
}

export default App;
