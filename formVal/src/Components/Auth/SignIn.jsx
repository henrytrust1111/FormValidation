import React, { useState } from "react";
import "./signUp.css";
import flag from "./flag.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { SpinnerCircular } from 'spinners-react';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowComfirmPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, type: "", msg: "" });
//   const [changeColor,setChangeColor] = useState (false);
  const nav= useNavigate()

  const Admin=[
    {
        email:"admin@gmail.com",
        password:"admin",
        isAdmin:true,
        isStudent:true,
        isTutor:true
    },
    {
        email:"user1@gmail.com",
        password:"user1",
        isAdmin:false,
        isTutor:false
    },
    {
        email:"user2@gmail.com",
        password:"user2",
        isAdmin:false,
        isTutor:true
    },
]


const userData=JSON.parse(localStorage.getItem("user"))
console.log(userData)

if(!userData){
  localStorage.setItem("user",JSON.stringify(Admin))
}



const isAdmin = userData.find((admin) => admin.email === email && admin.password === password);
console.log(isAdmin)

  localStorage.setItem("email",email)
  localStorage.setItem("pass",password)
  const handleForm = (e)=>{
    e.preventDefault()
    if(!email){
      setError({isError: true, type: "email", msg: "Input Your Email"})
    }else if(!email.includes("@")){
      setError({isError: true, type: "email@", msg: "Your Email must include @"})
    }else if(!password){
      setError({isError: true, type: "pass", msg: "Input Your Password"})
    }else if(!confirmPassword){
      setError({isError: true, type: "confirmPass", msg: "You can't leave this blank"})
    }else if((confirmPassword!==password)){
      setError({isError: true, type: "passMatch", msg: "Passwords do not Match"})
    }else{
      setError({isError: false, type: "", msg: ""})
    if (!isAdmin) {
      alert("You are not a verified user, please signup");
      
    } else {
      setError({ isError: false, type: "", msg: "" });
    
      if (isAdmin.isAdmin) {
        nav("/admin");
      } else if(isAdmin.isTutor){
        nav("/tutor")
      }else{
        nav("/home")
      }
      localStorage.setItem("admin", JSON.stringify(isAdmin))
    }
    }
  }

  const signUp = ()=>{
    nav("/")
  }

  return (
    <div className="signUp-body">
      <div className="field signUp-holder">
        <div className="field nameHolder">
        </div>
        <div className="field emailHolder">
          <div className="labelHolder">
            <label>Email Address</label>
            { error.isError && error.type==="email" ? <div className="errorMssg"> {error.msg} </div>:null}
            { error.isError && error.type==="email@" ? <div className="errorMssg"> {error.msg} </div>:null}
          </div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field passwordHolder">
          <div className="labelHolder">
            <label>Password</label>
            { error.isError && error.type==="pass" ? <div className="errorMssg"> {error.msg} </div>:null}
          </div>
          <div className="passwordWrapper">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Input Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="eye">
              {showPass ? (
                <IoMdEye
                  className="eyeIcon"
                  onClick={() => setShowPass(false)}
                />
              ) : (
                <IoMdEyeOff
                  className="eyeIcon"
                  onClick={() => setShowPass(true)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="field confirmPasswordHolder">
          <div className="labelHolder">
            <label>Confirm Password</label>
            { error.isError && error.type==="confirmPass" ? <div className="errorMssg"> {error.msg} </div>:null}
            { error.isError && error.type==="passMatch" ? <div className="errorMssg"> {error.msg} </div>:null}
          </div>
          <div className="passwordWrapper">
            <input
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="eye">
              {showConfirmPass ? (
                <IoMdEye
                  className="eyeIcon"
                  onClick={() => setShowComfirmPass(false)}
                />
              ) : (
                <IoMdEyeOff
                  className="eyeIcon"
                  onClick={() => setShowComfirmPass(true)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="field createAcc" onClick={handleForm}>{ loading? <SpinnerCircular size={20} color="#fff"/>:"Login" }</div>
        <div className="field createAcc" onClick={signUp}>SignUp</div>
      </div>
    </div>
  );
};

export default SignIn;
