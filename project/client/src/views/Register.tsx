import { ChangeEvent, FormEvent, useState } from "react";
import devChatLogo from "../assets/devChatLogo.jpeg";
import "../index.css";
import { Link } from "react-router-dom";

type Props = {};

interface user {
  name: string;
  userName: string;
  email: string;
  password: string;
  avatar: string;
}

function Register() {
  // Handling state when file is selected with the choose file button
  const [selectedImageToUpload, setSelectedImageToUpload] = useState<
    File | string
  >("");

  // State created for new user which will be empty strings as initial state
  const [newUser, setNewUser] = useState<user>({
    name: "",
    userName: "",
    email: "",
    password: "",
    avatar: "",
  });

  //This function is triggered when a file is selected using the file input field.
  // It extracts the selected file from the event and updates the selectedImageToUpload state accordingly.
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || "";
    setSelectedImageToUpload(file);
  };

  //This async function triggers when the upload image button is clicked and a POST request is made to cloudinary.
  //If this is successful it updates the avatar property of the newUser state witht he URL of the image.
  const submitImageUploadFunc = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", selectedImageToUpload);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/devChat-City/users/imageUpload",
        requestOptions
      );
      if (response.ok) {
        const result = await response.json();
        setNewUser({ ...newUser, avatar: result.avatar });
      }
    } catch (error) {
      console.log("Error uploading image :>> ", error);
    }
  };

  return (
    <div className="flex flex-col justify-around min-h-screen bg-black text-white">
      <div className="flex justify-center items-center sm:flex-col-center slide-in h-1/3">
        <h1 className="text-center font-Monoton sm:text-6xl text-4xl mt-6 mb-6">
          Register
        </h1>
      </div>
      <div>
        <form
          onSubmit={submitImageUploadFunc}
          className="imageUploadBox h-50 w-100% text-center flex justify-center flex-col items-center"
        >
          //NOTE - If newUser has information containing a string for the avatar
          in the state it is then displayed
          {newUser && (
            <div className="flex justify-center h-40 w-40 rounded-full my-4 imageContainer border-2 border-sky-400">
              <img className="rounded-full" src={newUser.avatar} />
            </div>
          )}
          <div className="flex-col py-4">
            <input
              className="h-7 bg-emerald-500 rounded-full font-Poppins font-light"
              type="file"
              name="avatar"
              id="avatar"
              onChange={handleImageUpload}
            />
          </div>
          <button
            type="submit"
            className="text-sky-400 hover:text-orange-500 py-6 text-lg font-extralight"
          >
            Upload Image
            <hr />
          </button>
        </form>
        <form className="flex justify-center sm:flex-col h-15">
          <div className="flex flex-col sm:flex-row justify-around text-black">
            <input
              className="bg-orange-500 w-60 h-10 my-4 hover:bg-emerald-500  rounded-full text-center placeholder-red-700"
              type="userName"
              name="userName"
              id="userName"
              placeholder="Username..."
            />
            <input
              className="bg-orange-500 w-60 h-10 my-4 hover:bg-emerald-500  rounded-full text-center placeholder-red-700"
              type="email"
              name="email"
              id="email"
              placeholder="email..."
            />
            <input
              className="bg-orange-500 w-60 h-10 my-4 hover:bg-emerald-500  rounded-full text-center placeholder-red-700"
              type="password"
              name="password"
              id="password"
              placeholder="Password..."
            />
            <div className="flex justify-center sm:flex items-center">
              <button
                className="text-sky-400 hover:text-orange-500 text-lg font-extralight"
                type="submit"
              >
                Create my account!
                <hr />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="h-70 flex justify-center">
        <img
          className="w-40 h-40 rounded-b-full"
          src={devChatLogo}
          alt="Image"
        />
      </div>
      <div className="flex justify-around text-emerald-500 font-extralight text-lg py-4">
        <Link to="/devChat-City/api" className="hover:text-amber-200">
          Back to the start
          <hr />
        </Link>
        <Link to="/devChat-City/api/login" className="hover:text-amber-200">
          Login
          <hr />
        </Link>
      </div>
    </div>
  );
}

export default Register;
