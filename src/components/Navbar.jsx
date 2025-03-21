import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { LuCloudMoon } from "react-icons/lu";
import { LuCloudSun } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/features/themeSlice";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <header
      className="header"
      style={{ background: theme ? "#e9ebef" : "#1f2937" }}
    >
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
            <NavLink
              style={{ color: theme ? "#000" : "#fff" }}
              to={"/how-it-works"}
            >
              How It Works
            </NavLink>
            <NavLink
              style={{ color: theme ? "#000" : "#fff" }}
              to={"/browse-projects"}
            >
              Browse Projects
            </NavLink>
            <NavLink
              style={{ color: theme ? "#000" : "#fff" }}
              to={"/success-stories"}
            >
              Success Stories
            </NavLink>
            <NavLink
              style={{ color: theme ? "#000" : "#fff" }}
              to={"/about-us"}
            >
              About Us
            </NavLink>
          </div>
          <div className="nav-actions">
            <Link
              to={"/sign-in"}
              style={{ color: theme ? "#000" : "#fff" }}
              className="sign-in"
            >
              Sign in
            </Link>
            <Link to={"/register"} className="start-campaign">
              Start Campaign
            </Link>
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => dispatch(toggleTheme())}
            >
              {theme ? (
                <LuCloudMoon size={40} color="#000" />
              ) : (
                <LuCloudSun size={40} color="#fff" />
              )}
            </button>
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
