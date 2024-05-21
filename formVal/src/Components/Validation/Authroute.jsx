import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Authroute = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("pass");
  console.log(email);

  const isAdmin = email && password && userData.find((admin) => admin.email === email && admin.password === password)

  return isAdmin && email && password? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace />
  );
}

export default Authroute