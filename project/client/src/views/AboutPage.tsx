import { Link } from "react-router-dom";
import devChatLogo from "../assets/devChatLogo.jpeg";

function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <h1 className="text-center font-Monoton md:text-6xl sm:text-xs text-white pt-3 pb-2 px-10">
        About <br />
      </h1>
      <div className="flex justify-center mb-2">
        <Link
          to="/devChat-City/api"
          className="font-Poppins text-emerald-400 <br />
                hover:text-amber-200"
        >
          Back to the landing page
        </Link>
        <br />
      </div>
      <div className="text-center pb-3 px-10 text-sky-400">
        <hr className="pb-3 px-10" />
        <h3 className="text-orange-500">The purpose of devChat-City?</h3>
        devChat-City is for connecting developers within cities, promoting more
        chances of meetups, sharing ideas, collaborating and learning, and even
        making employment potentially easier to find. Connecting people on a
        deeper level locally is what devChat-City is all about.
      </div>
      <div className="text-center px-10 text-sky-400">
        <hr />
        <br />
        <h3 className="text-orange-500">My details:</h3>
        Linkdin:{" "}
        <a
          className="hover:text-orange-500"
          href="https://www.linkedin.com/in/carl-manley/"
        >
          https://www.linkedin.com/in/carl-manley/
        </a>
        <br />
        <br />
        Github:{" "}
        <a
          className="hover:text-orange-500"
          href="https://github.com/The-Codinator-Berlin"
        >
          https://github.com/The-Codinator-Berlin
        </a>
        <br />
        <br />
        <hr />
        <br />
        <h3 className="text-orange-500">What I used to create devChat-City:</h3>
        <br />
        MongoDB:{" "}
        <a className="hover:text-orange-500" href="https://www.mongodb.com/">
          https://www.mongodb.com/
        </a>
        <br />
        <br />
        Mongoose:{" "}
        <a className="hover:text-orange-500" href="https://mongoosejs.com/">
          https://mongoosejs.com/
        </a>
        <br />
        <br />
        Express:{" "}
        <a className="hover:text-orange-500" href="https://expressjs.com/">
          https://expressjs.com/
        </a>
        <br />
        <br />
        Express-validator:{" "}
        <a
          className="hover:text-orange-500"
          href="https://www.npmjs.com/package/express-validator"
        >
          https://www.npmjs.com/package/express-validator
        </a>
        <br />
        <br /> React:{" "}
        <a className="hover:text-orange-500" href="https://react.dev/">
          https://react.dev/
        </a>
        <br />
        <br />
        NodeJS:{" "}
        <a className="hover:text-orange-500" href="https://nodejs.org/en">
          https://nodejs.org/en
        </a>
        <br />
        <br />
        Multer:{" "}
        <a
          className="hover:text-orange-500"
          href="https://www.npmjs.com/package/multer"
        >
          https://www.npmjs.com/package/multer
        </a>
        <br />
        <br />
        Cloudinary:{" "}
        <a className="hover:text-orange-500" href="https://cloudinary.com/">
          https://cloudinary.com/
        </a>
        <br />
        <br />
        Vite:{" "}
        <a className="hover:text-orange-500" href="https://vitejs.dev/">
          https://vitejs.dev/
        </a>
        <br />
        <br />
        Tailwind css:{" "}
        <a
          className="hover:text-orange-500"
          href="https://www.npmjs.com/package/bcrypt"
        >
          https://www.npmjs.com/package/bcrypt
        </a>
        <br />
        <br />
        Bcrypt:{" "}
        <a className="hover:text-orange-500" href="https://tailwindcss.com/">
          https://tailwindcss.com/
        </a>
        <br />
        <br />
        <hr />
        <div className="flex justify-center">
          <img
            className="md:w-40 md:h-40 rounded-b-full pt-2 mt-4"
            src={devChatLogo}
            alt="Image"
          />
        </div>
        <br />
        <div className="flex justify-center mb-1 pb-2">
          <Link
            to="/devChat-City/api"
            className="font-Poppins text-emerald-400 hover:text-amber-200"
          >
            Back to the landing page
          </Link>
          <br />
        </div>
      </div>
      <br />
      <hr className="mx-10 pb-4" />
    </div>
  );
}

export default AboutPage;
