import React from "react";
import "./Test.css";
import { Link } from "react-router-dom";

const Home = () => {
  return <div className="home">
    Home
    <Link to={"/admin"} className="link" aria-disabled>Admin</Link>
    <Link to={"/tutor"} className="link">Tutor</Link>
    <Link to={"/signin"} className="link">Logout</Link>
  </div>;
};

export default Home;
