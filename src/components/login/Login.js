import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "./login.css";
import { Button } from "../UI/Button";
const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailInput = useRef("");
  const passwordInput = useRef("");

  const emailChangeHandler = (e) => {
    setUsername(e.target.value);
    setErrorMessage("");
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || password.trim().length < 6) {
      setErrorMessage("Your Email or Password is not Valid");
      return;
    }
    if (password === "admin123") {
      dispatch({ type: "ADMIN_LOGIN", payload: username });
    }
    dispatch({ type: "LOGIN", payload: username });
    setUsername("");
    setPassword("");
  };
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="login-input-container">
          <div className="login-label-input-container">
            <input
              placeholder="Enter Your Email"
              value={username}
              onChange={emailChangeHandler}
              ref={emailInput}
              className="login-input"
            />
          </div>
          <div>
            <input
              placeholder="Enter Your Password"
              value={password}
              onChange={passwordChangeHandler}
              ref={passwordInput}
              className="login-input"
            />
          </div>
          <div style={{ color: "red" }}>{errorMessage}</div>
          <Button
            onClick={loginHandler}
            className="login-btn"
            type="submit"
            value="Login"
          />

          <span>Not a member ? Call us to JOIN our team at 206 XXX XXXX.</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
