import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const storedToken: string | null = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!storedToken) {
      console.log("%cNot Authorized", "color:red");
      navigate("/devChat-City/api/protectedLoading");
    } else {
      console.log("%cAuthorized", "color:green");
      navigate("/devChat-City/api/userProfile");
    }
  }, [navigate, storedToken]);

  return <>{children}</>;
}

export default ProtectedRoute;
