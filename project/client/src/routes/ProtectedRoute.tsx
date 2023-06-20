import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { user } = useContext(AuthContext);
  const isUserAuth = user !== null;
  console.log("isUserAuth :>> ", isUserAuth);

  return (
    <>
      {isUserAuth ? (
        props.children
      ) : (
        <>
          {alert("Please login to access features")}
          <Navigate to="/devChat-City/api/login" />
        </>
      )}
    </>
  );
}
export default ProtectedRoute;
