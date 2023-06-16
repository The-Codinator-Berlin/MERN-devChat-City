import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigateToUserProfile = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigateToUserProfile("/devChat-City/api/userProfile");
    }, 6500);
  }, []);

  return (
    <div className="h-screen place-items-center bg-black text-white flex justify-center">
      <div className="flex-col items-center">
        <iframe
          className="w-[26em] h-[26em]"
          src="https://embed.lottiefiles.com/animation/49698"
        ></iframe>
        <h3 className="text-center text-3xl sm:text-6xl font-Monoton">
          ...Loading...
        </h3>
      </div>
    </div>
  );
}

export default Loading;
