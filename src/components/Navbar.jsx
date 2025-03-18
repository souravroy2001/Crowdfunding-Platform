import React, { useState } from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <Link to={"/"}>
              <img src="/FundHive-logo.png" alt="FundHive-logo" />
            </Link>
          </div>
          <div
            className={isActive ? "nav-links active" : "nav-links"}
            id="nav-links"
          >
            <NavLink to={"/how-it-works"}>How It Works</NavLink>
            <NavLink to={"/browse-projects"}>Browse Projects</NavLink>
            <NavLink to={"/success-stories"}>Success Stories</NavLink>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </div>
          <div className="nav-actions">
            <Link to={"/sign-in"} className="sign-in">
              Sign in
            </Link>
            <Link to={"/register"} className="start-campaign">
              Start Campaign
            </Link>
          </div>
          <div
            className="hamburger"
            id="hamburger"
            onClick={() => setIsActive(!isActive)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
