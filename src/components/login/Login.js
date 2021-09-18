import React, { useState, useRef } from "react";
import "./login.css";
import { Button, SmallButton } from "../UI/Button";
const Login = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInput = useRef("");
  const passwordInput = useRef("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length < 6) {
      return;
    }
    if (password === "admin123") {
      props.isAdmin(true);
    }
    props.isAuth(true);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="login-input-container">
          <div className="login-label-input-container">
            {/* <label className="login-label">Enter your email</label> */}
            <input
              placeholder="Enter Your Email"
              value={email}
              onChange={emailChangeHandler}
              ref={emailInput}
              className="login-input"
            />
          </div>
          <div>
            {/* <label className="login-label">Enter your password</label> */}
            <input
              placeholder="Enter Your Password"
              value={password}
              onChange={passwordChangeHandler}
              ref={passwordInput}
              className="login-input"
            />
          </div>
          <Button
            onClick={loginHandler}
            className="login-btn"
            type="submit"
            value="Login"
          />

          <span>
            Not a member ?{" "}
            <SmallButton
              onClick={props.notMemberHandler}
              className="reg-btn"
              type="button"
              value="Register"
            />
            {/* <button onClick={props.notMemberHandler}>Register</button> */}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
