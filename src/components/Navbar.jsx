import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import GCEK from "../Image/logo.png";
import Insprano from "../Image/inspranologo.png";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <Link to="/" className="inspranologo">
            <img src={Insprano} alt="insprano" />
          </Link>
          <Link to={"https://www.gcekbpatna.ac.in/"} className="gcek">
            <img src={GCEK} alt="gcek" />
          </Link>
          <Link to="/" className="cyberlogo">
            CYBER <span className="cyberlogospan">FIESTA</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
