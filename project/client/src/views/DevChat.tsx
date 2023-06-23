import NavigationBar from "../components/NavigationBar";
import logo from "../assets/pictures/devChatLogo.jpeg";
import PostsCard from "../components/Postscard";
import { ChangeEvent, useState } from "react";

// interface Props = {};

function DevChat() {
  const [selectedRadio, setSelectedRadio] = useState<string>();
  const [textInput, setTextInput] = useState<string>("");

  const handleRadioButton = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
    console.log("Selected radio:", e.target.value);
  };

  const handleTextInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
    console.log("Selected radio:", e.target.value);
  };
  return (
    <div className="bg-black text-white">
      <div className=" h-screen w-screen border-y-[0.1] border-white overflow-x-auto">
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
            {/* -----------------------Radio buttons--------------------------------> */}
            <div className="text-sky-400">
              <div className="py-4">
                <label className="px-4" htmlFor="general">
                  allPosts
                </label>
                <input
                  className="bg-emerald-500"
                  type="radio"
                  value="all"
                  name="radioFilter"
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
                  name="radioFilter"
                ></input>
              </div>
            </div>

            <div className="text-sky-400">
              <div className="py-4">
                <label className="px-4" htmlFor="general">
                  General
                </label>
                <input
                  className="bg-emerald-500"
                  type="radio"
                  value="general"
                  name="radioFilter"
                ></input>
              </div>

              <div className="py-4">
                <label className="px-4" htmlFor="general">
                  Meetup
                </label>
                <input type="radio" value="meetup" name="radioFilter"></input>
              </div>
            </div>
            {/* -------------------------------------------------------------------------> */}

            <div>
              <div className="flex justify-center flex-col h-[1em] items-center my-12 rounded-full">
                <div className="flex justify-center [align-items:center] my-4 rounded-full">
                  <select className="text-black bg-emerald-500 rounded-full">
                    <option value="filterByLanguage">
                      Filter posts by popular codingLanguages{" "}
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
        {/* Create post section -----------------------------> */}
        <div className="formmmm border-b-[0.1em] border-white">
          <div className="text-amber-200 text-xl flex justify-center border-b-[0.1em] border-white">
            Create_Post
          </div>
          <form className="flex jutify-evenly justify-center">
            <div className="border-x-[0.1em] border-l-0 border-white w-80">
              <div className="p-4">
                When creating your post: <br />
                Please see required fields with a{" "}
                <span className="text-red-600 text-3xl">*</span>
              </div>
              <div className="w-80 mr-4 border-t-[0.1em] border-white">
                <h4 className="flex w-80 py-4">&nbsp;codingLanguage:</h4>
                <textarea
                  className="text-black w-[20em]"
                  name="heading"
                  id="form"
                  placeholder="Input coding language here...e.g Javascript"
                  rows={1}
                  cols={40}
                  onChange={handleTextInputChange}
                />
                <div />
              </div>
            </div>
            <div className="w-[10em] flex flex-col justify-evenly border-r-[0.1em] pl-4 border-white">
              <h4 className="flex mr-1">
                <span className="text-red-600 text-3xl">*</span>
                &nbsp;Choose topic:
              </h4>
              {/* <hr /> */}

              <div className="flex">
                <label className="px-4" htmlFor="code">
                  Code
                </label>
                <input
                  type="radio"
                  name="topic"
                  id="code"
                  value="code"
                  onChange={handleRadioButton}
                  required
                />
              </div>
              <div className="flex">
                {" "}
                <label className="px-2" htmlFor="general">
                  General
                </label>
                <input
                  type="radio"
                  name="topic"
                  id="general"
                  value="general"
                  onChange={handleRadioButton}
                  required
                />
              </div>
              <div className="flex">
                <label className="px-2" htmlFor="meetup">
                  Meetup
                </label>
                <input
                  type="radio"
                  name="topic"
                  value="meetup"
                  id="meetup"
                  onChange={handleRadioButton}
                  required
                />
              </div>
            </div>
            <div className="border-r-[0.1em] border-white">
              <div className="w-60 mr-4">
                <h4 className="flex">
                  <span className="text-red-600 text-3xl">*</span>&nbsp;Heading:
                </h4>
                <textarea
                  className="text-black w-[16em]"
                  name="heading"
                  id="form"
                  placeholder="What is the best way to......?"
                  rows={1}
                  cols={30}
                  onChange={handleTextInputChange}
                  required
                />

                <h4 className="flex">
                  <span className="text-red-600 text-3xl">*</span>&nbsp;Body:
                </h4>
                <textarea
                  className="w-[16em] h-20 text-black"
                  name="body"
                  id="form"
                  rows={10}
                  cols={40}
                  placeholder="Breifly describe your topic here..."
                  onChange={handleTextInputChange}
                  required
                />
              </div>
            </div>
            {/* Upload image ---------------------------------------> */}
            <div className="flex flex-col items-center border-r-[0.1em] border-white">
              <div className="pt-1">
                <input
                  className="h-7 bg-emerald-500 rounded-full font-Poppins font-light w-[13em]"
                  type="file"
                  name="screenshot"
                  id="form"
                  // onChange={handleImageUpload}
                />
              </div>
              <div>
                <img className="w-[13em] h-[8em]" src={logo} alt="Image" />
              </div>
              <div className="mb-4 text-sky-400 hover:text-orange-500">
                <button type="submit" />
                Add screenshot
                <hr />
              </div>
            </div>
            {/* ------------------------------------------------------> */}
            {/* Submit button ---------------------------------------> */}

            <div className="w-60 flex flex-col justify-center text-center text-sky-400 hover:text-orange-500">
              <button type="submit" />
              submitPost
              <hr />
            </div>
            {/* -------------------------------------------------------> */}
          </form>
          {/* -------------------Form end------------------------------------> */}
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
