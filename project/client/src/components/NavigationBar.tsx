import React from "react";
import { Link } from "react-router-dom";
import devChatLogo from "../assets/devChatLogo.jpeg";

type Props = {};

const NavigationBar = (props: Props) => {
  return (
    <div className="text-white ]">
      <div className="sm:flex justify-between font-Poppins font-extralight mx-2 md:text-lg">
        <div className="hover:text-emerald-400 text-orange-500">
          <Link>myProfile</Link>
          <hr />
        </div>
        <div className="hover:text-red-400 text-orange-500">
          <Link>Saved_Bits</Link>
          <hr />
        </div>
        <div className="text-orange-500">
          <Link>Logout</Link>
          <hr />
        </div>

        <div className="text-orange-500">
          <Link>devChat-City</Link>
          <hr />
        </div>
        <div className="text-lg text-orange-500">
          <Link>?</Link>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
