import { Link } from "react-router-dom";
import devChatLogo from "../assets/devChatLogo.jpeg";
import '../index.css'

const LandingPage = () => {
    return (
        <div className="grid h-screen place-items-center bg-black text-white ">
            <img
                className="md:w-80 h-80 rounded-b-full"
                src={devChatLogo}
                alt="Image"
            />
            <div className="flex justify-center items-center sm:flex-wraptext-center slide-in">
                <h1 className="text-center font-Monoton md:text-6xl sm:text-xs">
                    devChat-City
                </h1>
                <button className="hover:text-orange-500 sizeLinks h-20 flex-row align-middle font-Poppins font-extralight"><Link to="/devChat-City/api/login">Login</Link></button>
                <button className="hover:text-sky-400 sizeLinks h-20 flex-row align-middle font-Poppins font-extralight"><Link to="/devChat-City/api/register">Register</Link></button>
            </div>
            <br />
            <h6 className="font-poppins font-extralight text-xs text-sky-400">
                Designed and developed by{" "}
                <Link
                    to="/devChat-City/api/about"
                >
                    <span className="text-emerald-400 hover:text-orange-500 hover:text-lg">Carl Manley</span>
                </Link>
            </h6>
        </div>
    );
};

export default LandingPage;
