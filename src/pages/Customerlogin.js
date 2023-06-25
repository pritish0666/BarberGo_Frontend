import { auth } from "../config/firebase";
import { provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
export const Customerlogin = () => {
  const navigate = useNavigate();
  const Signin = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/salons");
  };

  return (
    <div className="saloonloginpage">
      <h1 className="wel-sal">Welcome to BarberGo</h1>
      <br />
      <h3 className="p">Sign in with Google to get started...</h3>
      <br />
      <button className="slbtn" onClick={Signin}>
        <img
          className="google"
          width="28"
          height="28"
          src="https://img.icons8.com/color/48/google-logo.png"
          alt="google-logo"
        />
        sign in
      </button>
    </div>
  );
};
