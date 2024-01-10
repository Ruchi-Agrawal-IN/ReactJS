import "./LoginSignup.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useState } from "react";
function LoginSignup() {
  const [action, setAction] = useState("Sign up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="UserName" className="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="Email" className="" />
          <input type="email" placeholder="Email id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="password" className="" />
          <input type="password" placeholder="Password" />
        </div>
        {action === "Sign up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click here!</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Sign up" ? "submit" : "submit gray"}
            onClick={() => {
              setAction("Sign up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Login" ? "submit" : "submit gray"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
