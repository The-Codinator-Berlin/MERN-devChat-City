import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage.tsx";
import AboutPage from "./views/AboutPage.tsx";
import Login from "./views/Login.tsx";
import Register from "./views/Register.tsx";
import UserProfile from "./views/UserProfile.tsx";
import "./App.css";
import Loading from "./components/loading/LoadingOnLog.tsx";
import DevChat from "./views/devChat.tsx";
import ErrorRedirectToLogin from "./components/loading/ErrorRedirectToLogin.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import ProtectedLoading from "./components/loading/ProtectedLoading.tsx";
import ProtectedChat from "./routes/ProtectedChat.tsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/devChat-City/api" element={<LandingPage />} />
        <Route path="/devChat-City/api/about" element={<AboutPage />} />
        <Route path="/devChat-City/api/login" element={<Login />} />
        <Route path="/devChat-City/api/register" element={<Register />} />
        <Route
          path="/devChat-City/api/userProfile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/devChat-City/api/devchat"
          element={
            <ProtectedChat>
              <DevChat />
            </ProtectedChat>
          }
        />
        <Route
          path="/devChat-City/api/protectedLoading"
          element={<ProtectedLoading />}
        />
        <Route path="/devChat-City/api/loading" element={<Loading />} />
        <Route
          path="/devChat-City/api/errorRedirectToLogin"
          element={<ErrorRedirectToLogin />}
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
