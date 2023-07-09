import React from "react";
import image from "../assets/pictures/dummy_code.jpeg";

type Props = {
  post: {
    topic: string;
    codingLanguage: string;
    userWhoPosted: string;
    heading: string;
    body: string;
    image: string;
    _id: string;
  };
};
export default function PostsCard({ post }: Props) {
  return (
    <div className="border-[0.1em] border-white w-[20em] h-[30em] m-4 overflow-x-auto">
      <div className="flex justify-center text-xl font-Monoton">
        <div>
          <h1>Topic&nbsp;&nbsp;:&nbsp;&nbsp;</h1>
          <hr />
        </div>
        <div>
          <h3>{post.topic}</h3>
          <hr />
        </div>
      </div>

      <div className="flex justify-center text-md font-Poppins">
        <div>
          <h3 className="font-bold text-emerald-500 my-4">
            Coding Language&nbsp;&nbsp;:&nbsp;&nbsp;
          </h3>
        </div>
        <div className="my-4">
          <h3 className="text-amber-200">{post.codingLanguage}</h3>
        </div>
      </div>

      <div className="flex justify-center text-md font-Poppins">
        <div>
          <h3 className="font-bold text-amber-200">
            Who posted&nbsp;&nbsp;:&nbsp;&nbsp;
          </h3>
        </div>
        <div>
          <h3 className="text-emerald-500">{post.userWhoPosted}</h3>
        </div>
      </div>
      <div className="flex justify-center">
        <h3 className="font-light text-red-500 text-xs">
          postedWhen&nbsp;&nbsp;:&nbsp;&nbsp;
        </h3>

        <h3 className="text-emerald-500 font-light text-sm">21/06/2023</h3>
      </div>

      <div className="flex-grow text-sm text-start pl-4 border-y-[0.1em]">
        <div className="flex justify-center text-sky-400">Heading:</div>

        <h3 className="mb-4 flex justify-center">{post.heading}</h3>
      </div>
      <div className="flex-grow text-sm text-start pl-4 border-y-[0.1em]">
        <div className="flex justify-center text-orange-500">Body:</div>
        <p>{post.body}</p>
      </div>

      <div className="flex">
        <img className="w-full h-[13em]" src={post.image} alt="Image" />
      </div>

      <div>
        <div className="flex justify-center text-amber-200">Comments</div>
        <div>
          <div>
            <div>Author:</div>
            <div>comment:</div>
            <div>TimePosted:</div>
          </div>
          <p></p>
        </div>
      </div>
      <div>
        <div></div>
      </div>

      <div className="">
        <div className="flex justify-end">
          <button className="flex justify-end mr-6 text-orange-500 hover:text-emerald-500">
            Like
          </button>

          <div className="flex justify-end mr-6 text-sky-400">Likes:</div>
        </div>
      </div>
    </div>
  );
}
