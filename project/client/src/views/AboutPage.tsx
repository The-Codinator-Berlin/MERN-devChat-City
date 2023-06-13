import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <div className="bg-black h-screen text-white">
            <h1 className="text-center font-Monoton md:text-6xl sm:text-xs text-white pt-3 pb-2 px-10">
                About <br />
            </h1>
            <div className="flex justify-center mb-2">
                <Link to="/devChat-City/api" className="font-Poppins hover:text-amber-200">Back to the landing page</Link><br />
            </div>
            <p className="text-center pb-3 px-10 text-sky-400">
                <hr className="pb-3 px-10" />
                <h3 className="text-orange-500">The purpose of devChat-City?</h3>
                devChat-City is for connecting developers within cities, promoting more
                chances of meetups, sharing ideas, collaborating and learning, and even
                making employment potentially easier to find. Connecting people on a
                deeper level locally is what devChat-City is all about.
            </p>
            <p className="text-center px-10 text-sky-400">
                <hr />
                <br />
                <h3 className="text-orange-500">My details:</h3>
                Linkdin: https://www.linkedin.com/in/carl-manley/ <br />
                <br />
                Github: https://github.com/The-Codinator-Berlin
                <br />
                <br />
                <hr />
                <br />
                <h3 className="text-orange-500">What I used to create devChat-City:</h3>
                <br />
                MongoDB: https://www.mongodb.com/
                <br />
                <br />
                Mongoose: https://mongoosejs.com/
                <br />
                <br />
                Express: https://expressjs.com/
                <br />
                <br />; React: https://react.dev/
                <br />
                <br />
                NodeJS: https://nodejs.org/en
                <br />
                <br />
                Multer: https://www.npmjs.com/package/multer
                <br />
                <br />
                Cloudinary: https://cloudinary.com/
                <br />
                <br />
                <hr />
            </p>
        </div>
    );
}

export default AboutPage;
