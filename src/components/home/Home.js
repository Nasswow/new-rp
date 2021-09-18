import React from "react";
import "./Home.css";
import homeBg from "../../images/ETEA-logos_transparent.png";
const Home = () => {
  return (
    <div className="home-bg-container">
      <img className="home-bg" src={homeBg} alt="homepage" />
    </div>
  );
};

export default Home;
