import React from "react";
import { Link } from "react-router-dom";
import devChatLogo from "../assets/devChatLogo.jpeg";

type Props = {};

const NavigationBar = (props: Props) => {
  return (
    <div className="text-white ]">
      <div className="flex flex-col items-center sm:flex sm:flex-row justify-between font-Poppins font-light mx-2 md:text-lg">
        <div className="hover:text-emerald-400 text-orange-500">
          <Link to={"/devChat-City/api/userProfile"}>myProfile</Link>
          <hr className="invisible sm:visible" />
        </div>
        <div className="hover:text-red-400 text-orange-500">
          <Link>Saved_Bits</Link>
          <hr className="invisible sm:visible" />
        </div>
        <div className="text-red-500">
          <Link>Logout</Link>
          <hr className="invisible sm:visible" />
        </div>

        <div className="text-orange-500">
          <Link to={"/devChat-City/api/devchat"}>devChat-City</Link>
          <hr className="invisible sm:visible" />
        </div>
        <div className="text-lg text-orange-500">
          <Link>?</Link>
          <hr className="invisible sm:visible" />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
