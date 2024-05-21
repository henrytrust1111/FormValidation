// import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("pass");
  console.log(email);

  const isAdmin = email && password && userData.find((admin) => admin.email === email && admin.password === password)
  console.log(isAdmin);
  if(!isAdmin){
   return <Navigate to="/signin" />
  }else{
    if(isAdmin.isAdmin){
  return <Outlet />
    }else{
    //  alert("You are not an Admin")
    //  return null;
   return isAdmin.isTutor? <Navigate to="/tutor" />:<Navigate to="/home" />
    }
  }
};

export default PrivateRoute;