import { auth } from "../config/firebase";
import { provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
// import { useAuthState } from "react-firebase-hooks/auth";

export const SalonLogin = () => {
  const navigate = useNavigate();
  const Signin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const salonname = result.user.displayName;
      console.log(salonname);

      await axios.post("http://localhost:5001/api/users", {
        name: salonname,
      });

      navigate("/addslots");
    } catch (error) {
      console.error(error);
    }
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
