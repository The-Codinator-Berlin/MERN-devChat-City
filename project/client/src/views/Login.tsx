import devChatLogo from "../assets/devChatLogo.jpeg";
import "../index.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col justify-around min-h-screen bg-black text-white">
      <div className="flex-col flex justify-center items-center sm:flex-col-center slide-in h-1/3">
        <h1 className="text-center font-Monoton sm:text-6xl text-4xl mb-2">
          Login
        </h1>
        <div>
          <h1 className="text-center font-Poppins text-amber-200 sm:text-lg font-extralight text-sm mt-2">
            Welcome back!
          </h1>
        </div>
      </div>

      <div>
        <form className="flex justify-center sm:flex-col h-15">
          <div className="flex flex-col sm:flex-row justify-around text-black">
            <input
              className="bg-orange-500 w-60 h-10 my-4 hover:bg-emerald-500  rounded-full text-center placeholder-red-700"
              type="usernameEmail"
              name="usernameEmail"
              id="usernameEmail"
              placeholder="username/email..."
            />
            <input
              className="bg-orange-500 w-60 h-10 my-4 mb-6 hover:bg-emerald-500  rounded-full text-center placeholder-red-700"
              type="password"
              name="password"
              id="password"
              placeholder="password..."
            />
            <div className="flex justify-center sm:flex items-center">
              <button
                className="text-sky-400 hover:text-orange-500 text-lg font-extralight"
                type="submit"
              >
                Log me in!
                <hr />
              </button>
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
