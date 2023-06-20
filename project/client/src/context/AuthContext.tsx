import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextTypes {
  user: User | null;
  error: ResponseError;
  login(email: string, password: string): void;
}

const initialAuthStates: AuthContextTypes = {
  user: null,
  error: null,
  login: () => console.log("context not initialized"),
  // logout: () => console.log("context not initialized"),
};

export const AuthContext = createContext(initialAuthStates);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [error, setError] = useState<ResponseError>(null);
  const [user, setUser] = useState<User | null>({
    userName: "",
    email: "",
    avatar: "",
    token: "string | boolean,",
  });

  const login = async (email: string, password: string) => {
    const myHeader = new Headers();
    myHeader.append("Content-Type", "application/x-www-form-urlencoded");

    const urlEncoded = new URLSearchParams();
    urlEncoded.append("email", email);
    urlEncoded.append("password", password);

    const requestOptions = {
      method: "POST",
      headers: myHeader,
      body: urlEncoded,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/devChat-City/users/login",
        requestOptions
      );
      console.log("response", response);

      if (response.ok) {
        const result: FetchedLoginResult = await response.json();
        const { token } = result;

        if (token) {
          localStorage.setItem("token", token);
          setUser(result.user);
          setError(null);
          navigate("/devChat-City/api/loading");
        }

        console.log("result :>> ", result);
      } else {
        setError(response.statusText);
        navigate("/devChat-City/api/errorRedirectToLogin");
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
