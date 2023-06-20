const UserStatusfromToken = () => {
  const storedToken: Token = localStorage.getItem("token");

  if (storedToken) {
    console.log("%cUser logged in! :>>", "color:green");
    return storedToken;
  } else {
    console.log("%cNo stored token! :>>", "color:red");
    return null;
  }
};

export default UserStatusfromToken;
