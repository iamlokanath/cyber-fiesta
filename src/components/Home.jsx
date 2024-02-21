import React from "react";
import Navbar from "./Navbar";
import Event from "./Event.jsx";
import Righthome from "../Image/home1-removebg-preview.png";
import "./css/Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-container">
          <div className="home-left">
            <div className="home-left-container">
              <div className="left-heading">
                Welcome to Insprano 2K24: Unleashing Innovation at GCEK's
                <span className="left-home-span">Cyber-Fiesta!</span>
              </div>
              <div className="left-para">
                Welcome to Insprano 2K24 at GCEK's Cyber-Fiesta! Explore
                cutting-edge tech, thrilling competitions, and inspiring talks.
                Unleash your creativity and join us in celebrating innovation.
                Let's ignite the future together!
              </div>
              <div className="left-button">
                <Link to="/navbar" className="left-buttonlink">
                  Register Now
                </Link>
              </div>
            </div>
          </div>

          <div className="home-right">
            <div className="home-right-container">
              <img src={Righthome} alt="right home" />
            </div>
          </div>
        </div>
      </div>
      <Event />
      <Footer/>
    </>
  );
};

export default Home;
