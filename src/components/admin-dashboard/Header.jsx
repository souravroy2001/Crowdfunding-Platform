import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faHome,
  faBullhorn,
  faUsers,
  faChartLine,
  faFlag,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { toggleTheme } from "../../redux/features/themeSlice";
import { LuCloudMoon, LuCloudSun } from "react-icons/lu";

const Header = () => {
  const location = useLocation();
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/admin") return "Dashboard Overview";
    if (path === "/admin/campaigns") return "Campaign Management";
    if (path === "/admin/campaigns/create") return "Create Campaign";
    if (path.match(/^\/admin\/campaigns\/edit\/\d+$/)) return "Edit Campaign";
    if (path.match(/^\/admin\/campaigns\/details\/\d+$/))
      return "Campaign Details";
    if (path === "/admin/users") return "User Management";
    if (path === "/admin/analytics") return "Analytics";
    if (path === "/admin/reports") return "Reports";
    if (path === "/admin/settings") return "Settings";
    return "Admin Dashboard";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 ${
        !isDarkMode ? "bg-gray-800" : "bg-white border-b"
      } shadow-lg z-40 transition-colors duration-300`}
    >
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Page Title */}
          <h1
            className={`text-xl font-semibold hidden lg:block ${
              !isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {getPageTitle()}
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button
            className={`p-2 rounded-full transition-colors duration-300 ${
              !isDarkMode
                ? "hover:bg-gray-700 text-gray-300"
                : "hover:bg-gray-100 text-gray-600"
            }`}
            onClick={() => dispatch(toggleTheme())}
          >
            {!isDarkMode ? <LuCloudMoon size={30} /> : <LuCloudSun size={30} />}
          </button>
          <button
            className={`p-2 rounded-full transition-colors duration-300 ${
              !isDarkMode
                ? "hover:bg-gray-700 text-gray-300"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <FontAwesomeIcon icon={faBell} />
            <span className="absolute top-3 right-[72px] h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <button
              className={`p-2 rounded-full transition-colors duration-300 ${
                !isDarkMode
                  ? "bg-[#bb86fc]/20 text-[#bb86fc]"
                  : "bg-[#00bfa5]/10 text-[#00bfa5]"
              }`}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            <div className="hidden sm:block">
              <p
                className={`text-sm font-medium ${
                  !isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Admin User
              </p>
              <p
                className={`text-xs ${
                  !isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                admin@fundhive.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
