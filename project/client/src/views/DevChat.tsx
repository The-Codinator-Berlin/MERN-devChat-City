import React from "react";
import NavigationBar from "../components/NavigationBar";
import logo from "../assets/pictures/devChatLogo.jpeg";

// type Props = {};

function DevChat() {
  return (
    <div className="bg-black text-white">
      <div className="h-[100vh] sm:h-screen border-y-[2px] border-white">
        <div className="flex flex-row">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="p-2">
              <h1 className="text-2xl font-Monoton sm:text-5xl">devChat</h1>
              <h1 className="text-2xl font-Monoton sm:text-5xl rotate-180	">
                devChat
              </h1>
            </div>
            <div className="p-2">
              <h1 className="text-2xl font-Monoton sm:text-5xl">devChat</h1>
              <h1 className="text-2xl font-Monoton sm:text-5xl rotate-180	">
                devChat
              </h1>
            </div>
            {/* ------------NAV--------------> */}
            <div className=" w-full mb-4">
              <NavigationBar />
            </div>
            {/* -----------------------------> */}
            <div className="w-full">
              {/* avatar box/ username... ------------>*/}
              <div className="border-y-[0.1em] border-white sm:h-40 w-screen sm:flex sm:justify-around sm:[align-items:center]">
                <div className="flex justify-center">
                  <img
                    className="w-[8em] h-[8em] rounded-b-full"
                    src={logo}
                    alt="Image"
                  />
                </div>
                <div className="flex justify-center h-[1em] items-center my-4 rounded-full">
                  <div className="border-2 w-[19.4.2em] flex justify-center [align-items:center] my-4 rounded-full">
                    <select
                      className="text-black bg-emerald-500 rounded-full"
                      Search-by-common-coding-languages
                    >
                      <option value="filterByLanguage">
                        Filter posts by popular coding languages{" "}
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
