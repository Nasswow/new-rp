import React from "react";
import "./Button.css";
export const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`bigButton ${props.className}`}
        type={props.type}
      >
        {props.value}
      </button>
    </div>
  );
};
export const SmallButton = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`smallButton ${props.className}`}
        type={props.type}
      >
        {props.value}
      </button>
    </div>
  );
};
