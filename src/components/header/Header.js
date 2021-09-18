import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import logo from "../../images/ETEA-logos_transparent.png";
const Header = (props) => {
  const isAuth = useSelector((state) => state.isAuth);
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
        <div onClick={logoutHandler} className="header-btn">
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
