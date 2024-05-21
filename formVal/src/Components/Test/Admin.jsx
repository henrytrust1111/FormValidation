import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Admin = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("pass");
  const isAdmin = userData.find((admin) => admin.email === email && admin.password === password)


    return (
      <div className='home'>
        Admin
        <Link to={"/home"} className="link">Home</Link>
        <Link to={"/tutor"} className="link">Tutor</Link>
        <Link to={"/signin"} className="link">Logout</Link>
      </div>
    );

  
};

export default Admin;
