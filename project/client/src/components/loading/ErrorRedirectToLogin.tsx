import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorRedirectToLogin() {
  const navigateToUserProfile = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigateToUserProfile("/devChat-City/api/login");
    }, 4500);
  }, []);

  return (
    <div className="h-screen place-items-center bg-black text-white flex justify-center">
      <div className="flex-col items-center">
        <div className="flex justify-center">
          <iframe
            className="w-[26em] h-[26em]"
            src="https://embed.lottiefiles.com/animation/49698"
          ></iframe>
        </div>

        <h3 className="text-center text-3xl sm:text-6xl font-Monoton text-red-600">
          ...Unauthirized Access...
        </h3>
        <h3 className="text-center">
          Please check Login credentials or register a free account
        </h3>
      </div>
    </div>
  );
}

export default ErrorRedirectToLogin;
