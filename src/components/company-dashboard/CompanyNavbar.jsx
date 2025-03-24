import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LuCloudMoon, LuCloudSun, LuLogOut } from "react-icons/lu";
import { FaBell, FaPlus, FaChartLine, FaUsers } from "react-icons/fa";
import { toggleTheme } from "../../redux/features/themeSlice";
import { logoutCompany } from "../../redux/features/companySlice";

const CompanyNavbar = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <nav
      className={`fixed top-0 p-2 left-0 right-0 z-50 ${
        theme ? "bg-white" : "bg-gray-800"
      } shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between items-center w-100">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/FundHive-logo.png"
                alt="FundHive"
                className="w-[120px]"
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-left space-x-4">
              <Link
                to="/company"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  theme
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <FaChartLine className="inline-block mr-1" />
                Dashboard
              </Link>
              <Link
                to="/company/supporters"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  theme
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <FaUsers className="inline-block mr-1" />
                Supporters
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`p-2 rounded-full ${
                theme
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {theme ? <LuCloudMoon size={20} /> : <LuCloudSun size={20} />}
            </button>

            <Link
              to="/notifications"
              className={`p-2 rounded-full ${
                theme
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FaBell size={20} />
            </Link>
            <button
              onClick={() => dispatch(logoutCompany())}
              className={`flex cursor-pointer items-center text-sm font-medium  gap-1.5 ${
                theme
                  ? "text-gray-900 hover:text-gray-800"
                  : "text-white hover:text-gray-100"
              }`}
            >
              {" "}
              <LuLogOut /> Logout
            </button>

            <Link
              to="/company/create-campaign"
              className="ml-3 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#00bfa5] hover:bg-[#00a693] flex items-center"
            >
              <FaPlus className="mr-1" />
              New Campaign
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CompanyNavbar;
