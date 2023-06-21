import React from "react";
import image from "../assets/pictures/dummy_code.jpeg";

// type Props = {}

export default function PostsCard({}: Props) {
  return (
    <div className="border-[0.1em] border-white w-[20em] h-[30em] m-4 overflow-x-auto">
      <div className="flex justify-center text-xl font-Monoton">
        <div>
          <h1>Topic&nbsp;&nbsp;:&nbsp;&nbsp;</h1>
          <hr />
        </div>
        <div>
          <h3>Code</h3>
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
          <h3 className="text-amber-200">Javascript</h3>
        </div>
      </div>

      <div className="flex justify-center text-md font-Poppins">
        <div>
          <h3 className="font-bold text-amber-200">
            Who posted&nbsp;&nbsp;:&nbsp;&nbsp;
          </h3>
        </div>
        <div>
          <h3 className="text-emerald-500">Sally-The-One</h3>
        </div>
      </div>

      <div className="flex-grow text-sm text-start pl-4 border-y-[0.1em]">
        <div className="flex justify-center text-sky-400">Heading:</div>

        <h3 className="mb-4 flex justify-center">Whats wrong with this?</h3>
      </div>
      <div className="flex-grow text-sm text-start pl-4 border-y-[0.1em]">
        <div className="flex justify-center text-orange-500">Body:</div>
        <p>Tried to fix it many times but I cannot see the solution!</p>
      </div>

      <div className="flex">
        <img className="w-full h-[13em]" src={image} alt="Image" />
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
