import React from "react";
import "./Label.css";
const Label = (props) => {
  return (
    <div className="label">
      <label>{props.label}</label>
    </div>
  );
};

export default Label;
