import React from "react";
import NavigationBar from "../components/NavigationBar";
import logo from "../assets/pictures/devChatLogo.jpeg";

// type Props = {};

function DevChat() {
  return (
    <div className="bg-black text-white">
      <div className="h-[100vh]  sm:h-screen border-y-[2px] border-white">
        <div className="flex flex-row">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="p-2">
              <h1 className="text-2xl font-Monoton sm:text-5xl">devChat</h1>
              <h1 className="text-2xl font-Monoton sm:text-5xl rotate-180	">
                devChat
              </h1>
            </div>
            <div className="p-2 invisible sm:visible">
              <h1 className="font-Monoton text-5xl">devChat</h1>
              <h1 className="font-Monoton text-5xl rotate-180	">devChat</h1>
            </div>
            {/* ------------NAV--------------> */}
            <div className=" w-full mb-4">
              <NavigationBar />
            </div>
            {/* -----------------------------> */}
            <div className="w-full">
              {/* avatar box/ username... ------------>*/}
              <div className="border-y-[0.1em] border-white h-40 w-full flex justify-around [align-items:center]">
                <div className="flex justify-center">
                  <img
                    className="w-[8em] h-[8em] rounded-b-full"
                    src={logo}
                    alt="Image"
                  />
                </div>
                <div className="border-2 border-white flex flex-row justify-between px-8 [align-items:center]">
                  <div className="text-sky-400">
                    {/* <h3>{"<userName/>"}:</h3>
                    <h3>{"<name/>"}:</h3>
                    <h3>{"<email/>"}:</h3>
                    <h3>{"<gitHub/>"}:</h3> */}
                  </div>
                  <div>
                    <div className="border-white w-80 items-center flex flex-col justify-end">
                      <select
                        className="text-black"
                        Search-by-common-coding-languages
                      >
                        <option value="Select a coding language">
                          Select a coding language
                        </option>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="dart">Dart</option>
                        <option value="typescript">TypeScript</option>
                      </select>
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

export default DevChat;
