import React, { useState } from "react";
import "./signUp.css";
import flag from "./flag.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { SpinnerCircular } from 'spinners-react';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowComfirmPass] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, type: "", msg: "" });
  const [changeColor,setChangeColor] = useState (false);
  const [isVendor,setIsVendor] = useState (false);
  console.log(isVendor);
  const nav = useNavigate()

  const users = JSON.parse(localStorage.getItem("user")) || []
  // console.log(users);

  const handleColor = ()=>{
    setChangeColor(true)
  }

  const navMe =()=>{
    nav("/signin")
  }
  const handleForm = (e)=>{
    e.preventDefault()
    if(!firstName){
      setError({isError: true, type: "firstName", msg: "Input Name"})
    }else if(firstName.length > 20){
      setError({isError: true, type: "firstNameLength", msg: "Too Large"})
    }else if(!lastName){
      setError({isError: true, type: "lastName", msg: "Input Surname"})
    }else if(!email){
      setError({isError: true, type: "email", msg: "Input Your Email"})
    }else if(!email.includes("@")){
      setError({isError: true, type: "email@", msg: "Your Email must include @"})
    }else if(!phoneNumber){
      setError({isError: true, type: "phoneNumber", msg: "Input Phone no."})
    }else if(!password){
      setError({isError: true, type: "pass", msg: "Input Your Password"})
    }else if(!confirmPassword){
      setError({isError: true, type: "confirmPass", msg: "You can't leave this blank"})
    }else if((confirmPassword!==password)){
      setError({isError: true, type: "passMatch", msg: "Passwords do not Match"})
    }else{
      setError({isError: false, type: "", msg: ""})
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
      const newData={
        email:email,
        password:password,
        isAdmin:false,
        isTutor: isVendor
      };                              
      console.log(newData);

      // const userData=users.concat(newData);
      const userData=[...users, newData];
      localStorage.setItem("user",JSON.stringify(userData));
      // localStorage.setItem("user", JSON.stringify(users.concat(newData)));
      // console.log(userData);
      console.log(users);
      nav("/signin")  
    }
    }

  return (
    <div className="signUp-body">
      <div className="field signUp-holder">
        <div className="field nameHolder">
          <div className="firstName">
            <div className="labelHolder">
              <label>First Name</label>
              { error.isError && error.type==="firstName"? <div className="errorMssg"> {error.msg} </div>:null}
              { error.isError && error.type==="firstNameLength+"? <div className="errorMssg"> {error.msg} </div>:null}
            </div>
            <input
              type="text"
              placeholder="Input First Name"
              className={changeColor? "color":null}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onClick={handleColor}
            />
          </div>
          <div className="secondName">
            <div className="labelHolder">
              <label>Last Name</label>
              { error.isError && error.type==="lastName" ? <div className="errorMssg"> {error.msg} </div>:null}
            </div>
            <input
              type="text"
              placeholder="Input Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="inputBox">
            <input type="checkbox" name="" id=""  checked={isVendor} onClick={() => setIsVendor(!isVendor)}/>
            <label>Are you a Tutor</label>
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
        <div className="field phoneNumHolder">
          <div className="labelHolder">
            <label>Phone Number</label>
            { error.isError && error.type==="phoneNumber" ? <div className="errorMssg"> {error.msg} </div>:null}
            { error.isError && error.type==="phoneNumberLength" ? <div className="errorMssg"> {error.msg} </div>:null}
          </div>
          <div className="phoneNum-wrapper">
            <div className="icon">
              <div className="iconHolder">
                <img src={flag} alt="flag" />
              </div>
              <div className="countryCode">+234</div>
            </div>
            <input
              type="number"
              placeholder="Input Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
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
        <div className="field createAcc" onClick={handleForm}>{ loading? <SpinnerCircular size={20} color="#fff"/>:"Create Account" }</div>
        <div className="field createAcc" onClick={navMe}>Sign-in</div>
      </div>
    </div>
  );
};

export default SignUp;
