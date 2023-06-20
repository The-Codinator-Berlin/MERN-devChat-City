import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import devChatLogo from "../assets/pictures/devChatLogo.jpeg";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import UserStatusfromToken from "../utilities/UserStatusfromToken.tsx";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login, user } = useContext(AuthContext);

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
    login(loginCredentials.email, loginCredentials.password);
  };
  console.log("CHECKING UserStatus :>> ", UserStatusfromToken);
  useEffect(() => {
    UserStatusfromToken();
  }, [user]);

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
          <div className="flex-row justify-center">
            <div className="flex flex-col sm:flex-row justify-evenly text-black">
              <div className="flex justify-center">
                <input
                  className="bg-orange-500 w-60 h-10 my-4 hover:bg-emerald-500  rounded-full text-center placeholder-red-700"
                  type="email"
                  name="email"
                  id="loginEmail"
                  placeholder="email..."
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="bg-orange-500 w-60 h-10 my-4 mb-6 hover:bg-emerald-500  rounded-full text-center placeholder-red-700"
                  type="password"
                  name="password"
                  id="loginPassword"
                  placeholder="password..."
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex justify-center sm:flex items-center">
              <div className="flex-col items-center">
                <div className="flex justify-center mb-6">
                  <button
                    className="text-sky-400 hover:text-orange-500 text-2xl font-extralight"
                    type="submit"
                  >
                    Log me in!
                    <hr />
                  </button>
                </div>

                {/* <div className="flex-col text-center mx-4">
                  {unsuccessfulLog &&
                    unsuccessfulLog2 &&
                    unsuccessfulLog3 &&
                    unsuccessfulLog4 && (
                      <>
                        <h5 className="text-red-500">{unsuccessfulLog}</h5>
                        <h5 className="text-red-500">{unsuccessfulLog2}</h5>
                        <h5 className="text-red-500">{unsuccessfulLog3}</h5>
                        <h5 className="text-red-500">{unsuccessfulLog4}</h5>
                      </>
                    )}
                </div> */}
              </div>
            </div>
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
