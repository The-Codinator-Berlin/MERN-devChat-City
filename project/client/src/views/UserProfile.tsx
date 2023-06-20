import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import avatar from "../assets/pictures/avatar_default.jpeg";
import logo from "../assets/pictures/devChatLogo.jpeg";
import UserStatusfromToken from "../utilities/UserStatusfromToken";
import { Navigate, useNavigate } from "react-router-dom";

// type Props = {};

function UserProfile() {
  const [user, setUser] = useState<User>({
    userName: "",
    email: "",
    avatar: "",
    token: "",
  });

  const [error, setError] = useState<ResponseError>(null);
  const goTo = useNavigate();

  const loadUserProfile = async () => {
    const storedToken = UserStatusfromToken();

    if (storedToken) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${storedToken}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      try {
        const response = await fetch(
          "http://localhost:5001/api/devChat-City/users/userProfile",
          requestOptions
        );

        if (response.ok) {
          const result: FetchedProfileResult = await response.json();
          setUser(result.user);
          setError(null);
        } else {
          const result: FetchError = await response.json();
          setError(result.error);
          goTo("/devChat-City/api/errorRedirectToLogin");
        }
      } catch (error) {
        console.log("Error :>> ", error);
      }
    }
  };

  useEffect(() => {
    loadUserProfile();
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="h-[100vh]  md:h-screen border-y-[2px] border-white">
        <div className="">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="p-2">
              <h1 className="text-2xl font-Monoton md:text-5xl">myProfile</h1>
              <h1 className="text-2xl font-Monoton md:text-5xl rotate-180	">
                myProfile
              </h1>
            </div>

            <div className="p-2 invisible md:visible">
              <h1 className="font-Monoton md:text-5xl">myProfile</h1>
              <h1 className="font-Monoton md:text-5xl rotate-180	">myProfile</h1>
            </div>
            <div className=" w-full mb-4">
              <NavigationBar />
            </div>
            <div className="w-full">
              {/* avatar box/ username... ------------>*/}
              <div className="md:h-[12em] xl:h-[14] flex flex-wrap border-y-[0.1em] border-white sm:w-full md:flex justify-around [align-items:center]">
                <img
                  className="w-[8em] h-[8em] border-white border-[0.1em] rounded-full"
                  src={avatar}
                  alt="Image"
                />
                <form>
                  <div className="flex flex-col">
                    <input
                      className="h-7 bg-emerald-500 rounded-full font-Poppins font-light"
                      type="file"
                      name="avatar"
                      id="avatar"
                      // onChange={}
                    />

                    <button
                      type="submit"
                      className="text-sky-400 hover:text-orange-500 py-6 text-lg font-extralight"
                    >
                      Change Avatar
                      <hr />
                    </button>
                  </div>
                </form>
                <div className="flex justify-center">
                  <img
                    className="w-[8em] h-[8em] rounded-b-full"
                    src={logo}
                    alt="Image"
                  />
                </div>
                <div className="border-2 border-white flex-col md:flex md:flex-row justify-between md:px-8 [align-items:center] w-[25em] h-[6.5em]">
                  <div className="text-sky-400 flex justify-start flex-col w-[25em]">
                    <div></div>
                    <div className="flex justify-center">
                      <div>
                        <h3>
                          {"<userName/>"}
                          <span className="text-white">
                            &nbsp;&nbsp;:&nbsp;&nbsp;
                          </span>
                        </h3>
                      </div>
                      <div>
                        {user && (
                          <h3 className="text-orange-500">{user.userName}</h3>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div>
                        <h3>
                          {"<email/>"}
                          <span className="text-white">
                            &nbsp;&nbsp;:&nbsp;&nbsp;
                          </span>
                        </h3>
                      </div>
                      <div>
                        {user && (
                          <h3 className="text-orange-500">{user.email}</h3>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div>
                        <h3>
                          {"<gitHub/>"}
                          <span className="text-white">
                            &nbsp;&nbsp;:&nbsp;&nbsp;
                          </span>
                        </h3>
                      </div>
                      {user && (
                        <div>
                          <h3 className="text-orange-500">{user.gitHub}</h3>
                        </div>
                      )}
                      {user && (
                        <div>
                          {
                            <h3 className="text-white">
                              {"No registered gitHub currently"}
                            </h3>
                          }
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* <h3>{"}:</h3>
                    <h3>{"}:</h3>
                    <h3>{"<gitHub/>"}:</h3>
                  </div> */}
                {/* <div>
                    {user && (
                      <div className=" border-white w-80 items-center flex flex-col justify-end">
                        <h3>{user.userName}</h3>
                        <h3></h3>
                        <h3>{user.email}</h3>
                        <h3></h3>
                      </div>
                    )}
                  </div> */}
              </div>
            </div>
            {/* ---------------------------------------> */}
            <div className="flex justify-center font-Poppins text-2xl text-amber-200 font-light">
              <h2>m_y-P_o_s_t_s:</h2>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex-col items-end h-60">
          <div className="grid col-span-full border-2 border-white">
            <div>jhsgjhsgj</div>
          </div>
          
        </div> */}
    </div>
  );
}

export default UserProfile;
