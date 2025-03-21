import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaChartLine, FaPlus } from "react-icons/fa";
import Campaigns from "./Campaigns";
import CreateCampaign from "./CreateCampaign";
import EditCampaign from "./EditCampaign";
import CampaignDetail from "./CampaignDetail";

const AdminCampaigns = () => {
  const toggleTheme = useSelector((state) => state.theme.toggleTheme);

  return (
    <div
      className={`min-h-screen ${
        toggleTheme ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <Routes>
        <Route
          index
          element={
            <>
              {/* Admin Header */}
              <div
                className={`p-6 ${
                  toggleTheme ? "bg-gray-800" : "bg-white"
                } shadow-md mb-6`}
              >
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          toggleTheme ? "bg-gray-700" : "bg-gray-100"
                        }`}
                      >
                        <FaChartLine
                          className={`text-xl ${
                            toggleTheme ? "text-[#bb86fc]" : "text-[#00bfa5]"
                          }`}
                        />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold">Campaign Management</h1>
                        <p
                          className={`text-sm ${
                            toggleTheme ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Manage and monitor all fundraising campaigns
                        </p>
                      </div>
                    </div>
                    <Link
                      to="create"
                      className={`inline-flex items-center px-4 py-2 rounded-lg ${
                        toggleTheme
                          ? "bg-[#bb86fc] hover:bg-[#9c64fb]"
                          : "bg-[#00bfa5] hover:bg-[#009688]"
                      } text-white transition-colors duration-300`}
                    >
                      <FaPlus className="mr-2" />
                      New Campaign
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Campaigns />
              </div>
            </>
          }
        />
        <Route
          path="create"
          element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CreateCampaign />
            </div>
          }
        />
        <Route
          path="edit/:id"
          element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <EditCampaign />
            </div>
          }
        />
        <Route
          path="details/:id"
          element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CampaignDetail />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default AdminCampaigns;
