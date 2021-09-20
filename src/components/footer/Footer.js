import React from "react";
// import { useSelector } from "react-redux";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-top">
            <div className="footer-address">
              <div>Adress</div>
              <div>3642 33rd ave S </div>
              <div>Seattle WA 98144 </div>
            </div>
            <ul className="footer-link-ul">
              <h4>Important Links</h4>
              <li>
                <a
                  href="https://kingcounty.gov/depts/transportation/metro.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  Metro Website
                </a>
              </li>
              <li>
                <a
                  href="https://atu587.org/login/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ATU 587 Website
                </a>
              </li>
              <li>
                <a
                  href="https://kingcounty.gov/"
                  target="_blank"
                  rel="noreferrer"
                >
                  King Cnounty Website
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-low">
            <p className="footer-disclaimer">
              ETEA is a non profit employees union association for ethiopians
              working at king county metro transit division. The union is open
              for all employees of kung county metro who identified them selves
              as an ethiopian. Joining and leaving the union is upon self will
              and some internal rules apply for the proccess. While being a
              member of ETEA, you agree to have read and accepted our terms of
              use, cookie and privacy policy.
            </p>
            <div className="footer-title">
              Ethiopian Transit Employees Association
            </div>
            <div className="footer-logo">ETEA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
