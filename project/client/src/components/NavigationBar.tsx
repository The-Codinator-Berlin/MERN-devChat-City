import React, { useState } from "react";
import { Link } from "react-router-dom";

// type Props = {};

const NavigationBar = () => {
  //SECTION --------------------------------------------->
  //NOTE - This function logs out the user by removing the
  // token from the local storage
  const logout = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      localStorage.removeItem("token");
      console.log("logged OUT!");
    }
  };

  //------------------------------------------------------>

  return (
    //SECTION -------------------------------------------->
    //NOTE - In the return are all the nav links and styling
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
  //------------------------------------------------------>
};

export default NavigationBar;
