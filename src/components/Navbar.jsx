import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { LuCloudMoon, LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { LuCloudSun } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/features/themeSlice";
import { logoutUser } from "../redux/features/authSlice";
import { logoutAdmin } from "../redux/features/adminSlice";
import { logoutCompany } from "../redux/features/companySlice";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { admin } = useSelector((state) => state.admin);
  const { company } = useSelector((state) => state.company);
  const { user } = useSelector((state) => state.auth);
  const [logUser, setLogUser] = useState(null);

  useEffect(() => {
    setIsLoggedIn(!!admin || !!company || !!user);
    if (admin) {
      setLogUser("admin");
    } else if (company) {
      setLogUser("company");
    } else if (user) {
      setLogUser("user-dashboard");
    }
  }, [admin, company, user]);

  function handleLogout() {
    if (admin) {
      dispatch(logoutAdmin());
    } else if (company) {
      dispatch(logoutCompany());
    } else if (user) {
      dispatch(logoutUser());
    }
  }

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
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleLogout}
                  className={`flex cursor-pointer items-center text-sm font-medium  gap-1.5 ${
                    theme
                      ? "text-gray-900 hover:text-gray-800"
                      : "text-white hover:text-gray-100"
                  }`}
                >
                  {" "}
                  <LuLogOut /> Logout
                </button>
                <Link to={logUser}>
                  <button
                    className={`flex cursor-pointer items-center text-sm font-medium  gap-1.5 ${
                      theme
                        ? "text-white hover:text-gray-50 rounded-2xl bg-gray-500 p-4"
                        : "text-gray-900 hover:text-gray-800 rounded-2xl bg-gray-100 p-4"
                    }`}
                  >
                    {" "}
                    <LuLayoutDashboard /> Dashboard
                  </button>
                </Link>
              </>
            ) : (
              <>
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
              </>
            )}

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
