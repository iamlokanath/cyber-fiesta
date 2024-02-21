import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          This wesite is designed and developed by{" "}
          <Link className="lokanath" to="https://lokanath.netlify.app/">
            Lokanath Panda
          </Link>
          <div className="footer-head">@codebreakersgcek</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
