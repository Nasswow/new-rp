import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import logo from "../../images/ETEA-logos_transparent.png";

const Header = (props) => {
  const isAuth = useSelector((state) => state.isAuth);
  const loggedMember = useSelector((state) => state.loggedMember);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        {isAuth && (
          <ul className="header-list-container">
            <li className="header-list">Home</li>
            <li className="header-list">Departments</li>
            <li className="header-list">Members</li>
            <li className="header-list">More Info</li>
          </ul>
        )}
        {isAuth && (
          <div onClick={logoutHandler} className="header-btn">
            Logout
          </div>
        )}
      </div>
      {!isAuth && (
        <h1 style={{ color: "#44cbb1", fontStyle: "italic" }}>
          Ethiopian Transit Employees Association{" "}
        </h1>
      )}

      <div style={{ padding: "0 20px" }}>
        {isAuth && <div className="member-info">Welcome, {loggedMember}!</div>}
        <div className="greenLine"></div>
        <div className="yellowLine"></div>
        <div className="redLine"></div>
      </div>
    </div>
  );
};

export default Header;
