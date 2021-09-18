import React from "react";
import Input from "../UI/Input";
import { Button } from "../UI/Button";
import "./Form.css";
export const UpdateForm = (props) => {
  return (
    <div className="update-form-container">
      <div className="update-form-inner-container">
        <h3 className="update-title">Updating Member's Information</h3>
        <div className="update-form">
          <div className="input-label-container">
            <Input placeholder="Name" />
          </div>
          <div className="input-label-container">
            <Input placeholder="ID" />
          </div>
          <div className="input-label-container">
            <Input placeholder="Base" />
          </div>
          <div className="input-label-container">
            <Input placeholder="Phone" />
          </div>
          <div className="input-label-container">
            <Input placeholder="Email" />
          </div>
        </div>
        <Button value="Update" />
      </div>
    </div>
  );
};
export const RegisterForm = (props) => {
  return (
    <div className="update-form-container">
      <div className="update-form-inner-container">
        <h3 className="update-title">Registering New Member</h3>
        <div className="update-form">
          <div className="input-label-container">
            <Input placeholder="Name" />
          </div>
          <div className="input-label-container">
            <Input placeholder="ID" />
          </div>
          <div className="input-label-container">
            <Input placeholder="Base" />
          </div>
          <div className="input-label-container">
            <Input placeholder="Phone" />
          </div>
          <div className="input-label-container">
            <Input placeholder="Email" />
          </div>
        </div>
        <Button value="Register" />
      </div>
    </div>
  );
};
