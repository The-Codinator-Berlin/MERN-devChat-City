const UserStatusfromToken = () => {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    console.log("%cUser logged in! :>>", "color:green");
    return storedToken;
  } else {
    console.log("%cNo stored token! :>>", "color:red");
  }
};

export default UserStatusfromToken;
