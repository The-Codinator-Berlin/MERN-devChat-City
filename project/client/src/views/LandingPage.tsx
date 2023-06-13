import { Link } from "react-router-dom";
import devChatLogo from "../assets/devChatLogo.jpeg";

const LandingPage = () => {
    return (
        <div className="grid h-screen place-items-center bg-black text-white ">
            <img
                className="md:w-80 h-80 rounded-b-full"
                src={devChatLogo}
                alt="Image"
            />
            <div className="flex justify-center">
                <h1 className="text-center font-Monoton md:text-6xl sm:text-xs">
                    devChat-City
                </h1>
                <div className="w-40 h-20 flex justify-around font-Poppins font-extralight md:flex-row sm:flex-wrap">
                    <button className="hover:text-orange-500">Login</button>
                    <button className="hover:text-sky-400">Register</button>
                </div>
            </div>
            <br />
            <h6 className="font-poppins font-extralight text-xs text-sky-400">
                Designed and developed by{" "}
                <Link
                    to="/devChat-City/api/about"
                    className="hover:text-orange-500 hover:text-lg"
                >
                    Carl Manley
                </Link>
            </h6>
        </div>
    );
};

export default LandingPage;
