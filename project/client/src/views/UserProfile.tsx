import React from "react";
import NavigationBar from "../components/NavigationBar";
import avatar from "../assets/avatar_default.jpeg";

type Props = {};

function UserProfile() {
  return (
    <div className="bg-black text-white">
      <div className="h-screen">
        <div className="flex flex-row">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="p-2">
              <h1 className="font-Monoton text-5xl">myProfile</h1>
              <h1 className="font-Monoton text-5xl rotate-180	">myProfile</h1>
            </div>
            <div className="p-2">
              <h1 className="font-Monoton text-5xl">myProfile</h1>
              <h1 className="font-Monoton text-5xl rotate-180	">myProfile</h1>
            </div>
            <div className="border- border-white w-full mb-4">
              <NavigationBar />
            </div>
            <div className="w-full">
              {/* avatar box/ username... ------------>*/}
              <div className="border-2 border-white h-40 w-full flex justify-around [align-items:center]">
                <img
                  className="w-[8em] h-[8em] rounded-b-full"
                  src={avatar}
                  alt="Image"
                />

                <button
                  type="submit"
                  className="text-sky-400 hover:text-orange-500 py-6 text-lg font-extralight"
                >
                  Change Avatar
                  <hr />
                </button>

                <div className="border-2 border-white flex flex-row justify-between px-8 [align-items:center]">
                  <div className="text-sky-400">
                    <h3>{"<userName/>"}:</h3>
                    <h3>{"<name/>"}:</h3>
                    <h3>{"<email/>"}:</h3>
                    <h3>{"<gitHub/>"}:</h3>
                  </div>
                  <div>
                    <div className=" border-white w-80 items-center flex flex-col justify-end">
                      <h3>{"codeMan"}</h3>
                      <h3>{"Peter Pan"}</h3>
                      <h3>{"email@email.com"}</h3>
                      <h3>{"https://github.com/The-Codinator-Berlin"}</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------------------------------------> */}
            </div>
          </div>
        </div>

        {/* <div className="flex-col items-end h-60">
          <div className="grid col-span-full border-2 border-white">
            <div>jhsgjhsgj</div>
          </div>
          
        </div> */}
      </div>
    </div>
  );
}

export default UserProfile;
