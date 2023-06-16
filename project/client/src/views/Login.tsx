import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import devChatLogo from "../assets/devChatLogo.jpeg";
import "../index.css";
import { Link, redirect, useNavigate } from "react-router-dom";

interface LoginCredentials {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitLoginFunction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const myHeader = new Headers();
    myHeader.append("Content-Type", "application/x-www-form-urlencoded");

    const urlEncoded = new URLSearchParams();
    urlEncoded.append("email", loginCredentials.email);
    urlEncoded.append("password", loginCredentials.password);

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
        const result = await response.json();
        const { token, user, message } = result;

        if (token) {
          localStorage.setItem("token", token);
          navigate("/devChat-City/api/userprofile");
        }
        console.log("result :>> ", result);
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  const userStatusfromToken = () => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      console.log("%cUser logged in! :>>", "color:green");
    } else {
      console.log("%cUser is logged out! :>>", "color:red");
    }
  };

  useEffect(() => {
    userStatusfromToken();
  }, []);

  return (
    <div className="flex flex-col justify-around min-h-screen bg-black text-white">
      <div className="flex-col flex justify-center items-center sm:flex-col-center slide-in h-1/3">
        <h1 className="text-center font-Monoton sm:text-6xl text-5xl mb-2">
          Login
        </h1>
        <div>
          <h1 className="text-center font-Poppins text-amber-200 sm:text-lg font-extralight text-sm mt-2">
            Welcome back!
          </h1>
        </div>
      </div>

      <div>
        <form
          onSubmit={submitLoginFunction}
          className="flex justify-center sm:flex-col h-15"
        >
          <div className="flex flex-col sm:flex-row justify-evenly text-black">
            <input
              className="bg-orange-500 w-60 h-10 my-4 hover:bg-emerald-500  rounded-full text-center placeholder-red-700"
              type="email"
              name="email"
              id="loginEmail"
              placeholder="email..."
              onChange={handleInputChange}
            />
            <input
              className="bg-orange-500 w-60 h-10 my-4 mb-6 hover:bg-emerald-500  rounded-full text-center placeholder-red-700"
              type="password"
              name="password"
              id="loginPassword"
              placeholder="password..."
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-center sm:flex items-center">
            <button
              className="text-sky-400 hover:text-orange-500 text-2xl font-extralight"
              type="submit"
            >
              Log me in!
              <hr />
            </button>
          </div>
        </form>
      </div>
      <div className="h-70 flex justify-center">
        <img
          className="w-40 h-40 rounded-b-full"
          src={devChatLogo}
          alt="Image"
        />
      </div>
      <div className="flex justify-around text-emerald-500 font-extralight text-lg">
        <Link to="/devChat-City/api" className="hover:text-amber-200">
          Back to the start
          <hr />
        </Link>
        <Link to="/devChat-City/api/register" className="hover:text-amber-200">
          Register
          <hr />
        </Link>
      </div>
    </div>
  );
}

export default Login;
