import { useState } from "react";
import "./members.css";
import Input from "../UI/Input";
import { Button } from "../UI/Button";

const Members = (props) => {
  const [updatedMember, setUpdatedMember] = useState(props.member);

  const updateSubmitHandler = (e) => {
    e.preventDefault();
    if (JSON.stringify(props.member) === JSON.stringify(updatedMember)) {
      props.closeUpdateForm();
    } else if (
      updatedMember.name === "" ||
      updatedMember.id === "" ||
      updatedMember.base === "" ||
      updatedMember.phone === "" ||
      updatedMember.email === ""
    ) {
      alert("Please Enter All Required Inputs");
    } else {
      props.addUpdatedMember(updatedMember);
      props.closeUpdateForm();
    }
  };
  const calcelUpdate = () => {
    props.closeUpdateForm();
  };
  return (
    <>
      {(props.isUpdating || props.isAdding) && (
        <div className="update-form-container">
          <div className="update-form-inner-container">
            <h3 className="update-title">Updating Member's Information</h3>
            <div className="update-form">
              <div className="input-label-container">
                <Input
                  inputHandler={props.changeHandler.nameChangeHandler}
                  placeholder="Name"
                  value={updatedMember.name}
                />
              </div>
              <div className="input-label-container">
                <Input
                  inputHandler={props.idChangeHandler}
                  placeholder="ID"
                  value={updatedMember.id}
                />
              </div>
              <div className="input-label-container">
                <Input
                  inputHandler={props.baseChangeHandler}
                  placeholder="Base"
                  value={updatedMember.base}
                />
              </div>
              <div className="input-label-container">
                <Input
                  inputHandler={props.phoneChangeHandler}
                  placeholder="Phone"
                  value={updatedMember.phone}
                />
              </div>
              <div className="input-label-container">
                <Input
                  inputHandler={props.emailChangeHandler}
                  placeholder="Email"
                  value={updatedMember.email}
                />
              </div>
            </div>
            <div className="update-cancel-btn">
              {props.isAdding && (
                <Button
                  onClick={updateSubmitHandler}
                  value="Register"
                  type="submit"
                />
              )}
              {props.isUpdating && (
                <Button
                  onClick={updateSubmitHandler}
                  value="Update"
                  type="submit"
                />
              )}
              <Button onClick={calcelUpdate} value="Cancel" type="submit" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Members;
