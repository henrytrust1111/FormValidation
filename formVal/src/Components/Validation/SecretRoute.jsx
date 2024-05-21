import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const SecretRoute = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("pass");
    console.log(email);
  
    const isAdmin = email && password && userData.find((admin) => admin.email === email && admin.password === password)
  
    return isAdmin.isAdmin || isAdmin.isTutor? (
      <Outlet />
    ) : (
      <Navigate to="/signin" replace />
    );
}

export default SecretRoute
