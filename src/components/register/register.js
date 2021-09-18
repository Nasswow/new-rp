import React, { useState, useRef } from "react";
import "./register.css";
import { Button, SmallButton } from "../UI/Button";
const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [base, setBase] = useState("");
  const [password, setPassword] = useState("");
  const [newRegisteredMember, setNewRegisteredMember] = useState({});
  const nameInput = useRef("");
  const emailInput = useRef("");
  const idInput = useRef("");
  const baseInput = useRef("");
  const passwordInput = useRef("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const baseChangeHandler = (e) => {
    setBase(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const idChangeHandler = (e) => {
    setId(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      id.trim().length === 0 ||
      email.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length < 6
    ) {
      return;
    }
    console.log(name, email, password);
    setNewRegisteredMember({ name, id, base });
    console.log(newRegisteredMember);
    props.addNewMember(() => newRegisteredMember);

    setName("");
    setEmail("");
    setPassword("");
    setId("");
    setBase("");
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <div className="register-input-container">
          <div className="register-label-input-container">
            {/* <label className="register-label">Enter your full name</label> */}
            <input
              placeholder="Enter Your Name"
              value={name}
              onChange={nameChangeHandler}
              ref={nameInput}
              className="register-input"
            />
          </div>

          <div className="register-label-input-container">
            <input
              placeholder="Enter Your ID"
              value={id}
              onChange={idChangeHandler}
              ref={idInput}
              className="register-input"
            />
          </div>
          <div className="register-label-input-container">
            <input
              placeholder="Enter Your Base"
              value={base}
              onChange={baseChangeHandler}
              ref={baseInput}
              className="register-input"
            />
          </div>
          <div className="register-label-input-container">
            <input
              placeholder="Enter Your Email"
              value={email}
              onChange={emailChangeHandler}
              ref={emailInput}
              className="register-input"
            />
          </div>
          <div>
            <input
              placeholder="Enter Your Password"
              value={password}
              onChange={passwordChangeHandler}
              ref={passwordInput}
              className="register-input"
            />
          </div>
          <Button
            onClick={submitHandler}
            className="register-btn"
            type="submit"
            value="Register"
          />

          <span>
            Not a member ?{" "}
            <SmallButton
              onClick={props.alreadyMember}
              className="log-btn"
              type="button"
              value="Login"
            />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
