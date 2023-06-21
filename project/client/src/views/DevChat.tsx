import NavigationBar from "../components/NavigationBar";
import logo from "../assets/pictures/devChatLogo.jpeg";
import PostsCard from "../components/Postscard";

// type Props = {};

function DevChat() {
  return (
    <div className="bg-black text-white">
      <div className=" h-screen w-screen border-y-[0.1] border-white overflow-x-auto">
        {/* <div className="flex flex-row"> */}
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
        </div>
        {/* ------------NAV--------------> */}
        <div className=" w-full mb-4">
          <NavigationBar />
        </div>
        {/* -----------------------------> */}
        <div className="w-full">
          {/* avatar box/ username... ------------>*/}
          <div className="sm:border-y-[0.1em] sm:border-white sm:h-40 sm:flex sm:justify-around sm:[align-items:center]">
            <div className="flex justify-center">
              <img
                className="w-[8em] h-[8em] rounded-b-full"
                src={logo}
                alt="Image"
              />
            </div>
            <div></div>
            {/* <div className="flex-row justify-center sm:flex-wrap"> */}
            <div>
              <div className="py-4">
                <label className="px-4" htmlFor="general">
                  allPosts
                </label>
                <input
                  className="bg-emerald-500"
                  type="radio"
                  value="all"
                  name="all"
                  // checked={value}
                ></input>
              </div>

              <div className="py-4">
                <label className="px-6" htmlFor="code">
                  Code
                </label>
                <input
                  className="bg-emerald-500"
                  type="radio"
                  value="code"
                  name="code"
                  // checked={value}
                ></input>
              </div>
            </div>

            <div>
              <div className="py-4">
                <label className="px-4" htmlFor="general">
                  General
                </label>
                <input
                  className="bg-emerald-500"
                  type="radio"
                  value="general"
                  name="general"
                ></input>
              </div>

              <div className="py-4">
                <label className="px-4" htmlFor="general">
                  Meetup
                </label>
                <input type="radio" value="meetup" name="general"></input>
              </div>
            </div>
            {/* </div> */}

            <div>
              <div className="flex justify-center flex-col h-[1em] items-center my-12 rounded-full">
                <div className="flex justify-center [align-items:center] my-4 rounded-full">
                  <select className="text-black bg-emerald-500 rounded-full">
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
                <div className="flex justify-center items-center my-4 bg-emerald-500 rounded-full">
                  <label className="px-2 text-black">Search: </label>
                  <input
                    type="search"
                    placeholder="How can I..............?"
                    className="placeholder-white bg-emerald-500 w-[15em] rounded-full text-center"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------------> */}
        </div>
        <div>
          <PostsCard />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default DevChat;
