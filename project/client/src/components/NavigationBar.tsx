import React, { useState } from "react";
import { Link } from "react-router-dom";

// type Props = {};

const NavigationBar = () => {
  // build model that you have to close so that it tells you you ahve been logged out properly

  const [user, setUser] = useState<User | null>({
    userName: "",
    email: "",
    avatar: "",
    token: "",
  });

  const logout = () => {
    const storedToken = localStorage.getItem("token");
    console.log("ran>>>> :>> ", storedToken);
    if (storedToken) {
      localStorage.removeItem("token");
      // setUser(null);
      // localStorage.removeItem("token");
      console.log("logged OUT!");
    }
  };

  return (
    <div className="text-white ]">
      <div className="flex flex-col items-center sm:flex sm:flex-row justify-between font-Poppins font-light mx-2 sm:text-lg">
        <div className="text-emerald-500 md:hover:text-emerald-400 md:text-orange-500">
          <Link to={"/devChat-City/api/userProfile"}>myProfile</Link>
          <hr className="invisible sm:visible" />
        </div>
        <div className="text-sky-400 md:hover:text-sky-400 md:text-orange-500">
          <Link>Saved_Bits</Link>
          <hr className="invisible sm:visible" />
        </div>

        <div className="text-red-500 hover:text-amber-200 sm:text-lg">
          <Link onClick={logout} to="/devChat-City/api">
            LogOut
          </Link>
          <hr className="invisible sm:visible" />
        </div>

        <div className="text-amber-200 md:text-orange-500 md:hover:text-white">
          <Link to={"/devChat-City/api/devchat"}>devChat-City</Link>
          <hr className="invisible sm:visible" />
        </div>
        <div className="text-3xl text-orange-500 hover:text-red-700">
          <Link>?</Link>
          <hr className="invisible sm:visible" />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
