import React from "react";
import "./Input.css";
const Input = (props) => {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.inputHandler}
        className={`input ${props.calssName}`}
      />
    </div>
  );
};

export default Input;
