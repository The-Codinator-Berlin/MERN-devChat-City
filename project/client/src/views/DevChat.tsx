import NavigationBar from "../components/NavigationBar";
import logo from "../assets/pictures/devChatLogo.jpeg";
import PostsCard from "../components/Postscard";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function DevChat() {
  const [selectedNewPostRadio, setSelectedNewPostRadio] = useState<string>();
  // const [textInput, setTextInput] = useState<string>("");
  const [newPost, setNewPost] = useState({
    topic: "",
    heading: "",
    body: "",
    codingLanguage: "",
    image: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | string>("");

  const handleFilterRadioButton = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedNewPostRadio(e.target.value);
    // console.log("Selected radio:", e.target.value);
  };

  const handleinputValues = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
    // console.log("Selected radio:", e.target.value);
  };

  const handleFileAttach = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0] || "";
    console.log(e.target.files?.[0]);
    setSelectedFile(file);
  };

  const submitFile = async (e: FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      const formdata = new FormData();
      formdata.append("image", selectedFile);
      const storedToken: Token = localStorage.getItem("token");

      if (storedToken) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${storedToken}`);
        const requestOptions = {
          method: "POST",
          body: formdata,
          headers: myHeaders,
        };

        console.log("storedToken :>> ", storedToken);

        try {
          const response = await fetch(
            "http://localhost:5001/api/devChat-City/posts/sendImage",
            requestOptions
          );
          const result = await response.json();
          setNewPost({ ...newPost, image: result.image });
          console.log("result :>> ", result);
        } catch (error) {
          console.log("error uploading image :>> ", error);
        }
      } else {
        console.log("no token, user needs to login");
      }
    } else {
      console.log("No file was uploaded!");
    }
  };

  const submitNewPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append("Authorization", `Bearer ${token}`);

      console.log("newPost :>> ", newPost);
      const urlencoded = new URLSearchParams();
      urlencoded.append("topic", newPost.topic);
      urlencoded.append("heading", newPost.heading);
      urlencoded.append("body", newPost.body);
      urlencoded.append("codingLanguage", newPost.codingLanguage);
      urlencoded.append("image", newPost.image);

      const requestOptions = {
        headers: myHeaders,
        method: "POST",
        body: urlencoded,
      };

      try {
        const response = await fetch(
          "http://localhost:5001/api/devChat-City/posts/newPost",
          requestOptions
        );
        const result = await response.json();
        console.log("result :>> ", result);
      } catch (error) {
        console.log("error :>> ", error);
      }
    } else {
      console.log("you need to login first");
    }
    fetchAllPosts();
  };

  const fetchAllPosts = async () => {
    const storedToken: Token = localStorage.getItem("token");
    if (storedToken) {
      try {
        const response = await fetch(
          "http://localhost:5001/api/devChat-City/posts/all"
        );
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      console.log(
        "Sorry you are not authorized to create a post, please login.."
      );
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

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
            {/* //SECTION ----------------------------------------------------Radio filter buttons--------------------------------------------------------------------> */}
            <div className="text-sky-400">
              <div className="py-4">
                <label className="px-4" htmlFor="general">
                  allPosts
                </label>
                <input
                  className="bg-emerald-500"
                  onChange={handleFilterRadioButton}
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
                  onChange={handleFilterRadioButton}
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
                  onChange={handleFilterRadioButton}
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
            {/* //SECTION - --------------------------------------------------------Radio filter buttons end--------------------------------------------------------------------> */}

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
        </div>

        {/* //SECTION --------------------------------------------------  Create post section -------------------------------------------------------------------------------------------> */}
        <div className="formmmm border-b-[0.1em] border-white">
          <div className="text-amber-200 text-xl flex justify-center border-b-[0.1em] border-white">
            Create_Post
          </div>
          <form
            className="flex jutify-evenly justify-center"
            onSubmit={submitNewPost}
          >
            <div className="border-x-[0.1em] border-l-0 border-white w-80">
              <div className="p-4">
                When creating your post: <br />
                Please see required fields with a{" "}
                <span className="text-red-600 text-3xl">*</span>
              </div>
              {/* -----------------codingLanguage-------------------> */}

              <div className="w-80 mr-4 border-t-[0.1em] border-white">
                <h4 className="pb-2">
                  <span className="text-red-600 text-3xl flex w-80">*</span>
                  &nbsp;codingLanguage:
                </h4>
                <input
                  className="text-black w-[20em]"
                  name="codingLanguage"
                  id="form"
                  placeholder="Input coding language here...e.g Javascript"
                  onChange={handleinputValues}
                />
              </div>
              {/* --------------------------------------------------> */}
            </div>
            {/* -----------------Radio new post selections-------------------> */}

            <div className="w-[10em] flex flex-col justify-evenly border-r-[0.1em] pl-4 border-white">
              <h4 className="flex mr-1">
                <span className="text-red-600 text-3xl">*</span>
                &nbsp;Choose topic:
              </h4>
              <div className="flex">
                <label className="px-4" htmlFor="code">
                  Code
                </label>
                <input
                  type="radio"
                  name="topic"
                  id="code"
                  value="code"
                  onChange={handleinputValues}
                  required
                />
              </div>
              {/* -----------------------> */}

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
                  onChange={handleinputValues}
                  required
                />
              </div>

              {/* -----------------------> */}

              <div className="flex">
                <label className="px-2" htmlFor="meetup">
                  Meetup
                </label>
                <input
                  type="radio"
                  name="topic"
                  value="meetup"
                  id="meetup"
                  onChange={handleinputValues}
                  required
                />
              </div>
              {/* -----------------------> */}
            </div>

            {/* ---------------Radio new post selections end-------------------> */}

            {/* ----------------------Heading input-------------------> */}

            <div className="border-r-[0.1em] border-white">
              <div className="w-60 mr-4">
                <h4 className="flex">
                  <span className="text-red-600 text-3xl">*</span>&nbsp;Heading:
                </h4>
                <input
                  type="text"
                  className="text-black w-[16em]"
                  name="heading"
                  id="form"
                  placeholder="What is the best way to......?"
                  onChange={handleinputValues}
                  required
                />

                {/* --------------------------------------------------> */}

                <h4 className="flex">
                  <span className="text-red-600 text-3xl">*</span>&nbsp;Body:
                </h4>
                <input
                  className="w-[16em] h-20 text-black"
                  name="body"
                  type="text"
                  id="form"
                  placeholder="Breifly describe your topic here..."
                  onChange={handleinputValues}
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
                  name="image"
                  id="form"
                  onChange={handleFileAttach}
                />
              </div>
              <div>
                {newPost?.image ? (
                  <img
                    className="w-[13em] h-[8em]"
                    src={newPost.image}
                    alt="post image"
                  />
                ) : (
                  <img className="w-[13em] h-[8em]" src={logo} alt="Image" />
                )}
              </div>
              <button
                className="mb-4 text-sky-400 hover:text-orange-500"
                onClick={submitFile}
              >
                Add screenshot <hr />
              </button>
            </div>
            {/* ------------------------------------------------------> */}
            {/* ----------------------- Submit button ----------------> */}

            <div className="w-60 flex flex-col justify-center text-center text-sky-400 hover:text-orange-500">
              <button type="submit">submitPost</button>
              <hr />
            </div>
            {/* -------------------------------------------------------> */}
          </form>
          {/* -------------------Form end------------------------------------> */}
        </div>
        {/* //SECTION -----------------------------------------------------  Create post section END -----------------------------------------------------------------------------> */}
        {/* <div>
          {listOfPost &&
            listOfPost.map((post) => {
              return <PostsCard post={post} />;
            })}
        </div> */}
      </div>
    </div>
  );
}

export default DevChat;
