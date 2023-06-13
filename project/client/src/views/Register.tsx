import devChatLogo from "../assets/devChatLogo.jpeg";
import '../index.css'

function Register() {


    return (

        <div className="flex flex-col justify-around min-h-screen bg-black text-white">
            <div className="flex justify-center items-center sm:flex-wraptext-center slide-in h-1/3">
                <h1 className="text-center font-Monoton md:text-6xl sm:text-xs">
                    Register
                </h1>
            </div>
            <div>
                <form className="imageUploadBox h-40 w-100% text-center">
                    <div className="w-40 h-40 rounded-full">

                    </div>
                    <input className="flex-col" type="file" name="avatar" id="avatar" />
                </form>
                <form className="flex-col h-15">
                    <div className="flex justify-around text-black pb-4">
                        <input className="bg-orange-500 w-60 h-10 rounded-full text-center placeholder-black" type="userName" name="userName" id="userName" placeholder="Username" />
                        <input className="bg-orange-500 w-60 h-10 rounded-full text-center placeholder-black" type="email" name="email" id="email" placeholder="email" />
                        <input className="bg-orange-500 w-60 h-10 rounded-full text-center placeholder-black" type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className="flex justify-center">
                        <input className="text-sky-400" type="button" value="Submit" />
                    </div>


                </form>
            </div>
            <div className="h-70 flex justify-center">
                <img
                    className="md:w-40 h-40 rounded-b-full"
                    src={devChatLogo}
                    alt="Image"
                />
            </div>
        </div>
    )
}

export default Register