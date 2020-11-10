import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          className="imageDiscord"
          src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
