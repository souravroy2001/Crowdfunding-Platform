import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const AdminSettings = () => {
  const toggleTheme = useSelector((state) => state.theme.darkMode);
  const [formData, setFormData] = useState({
    siteName: "Admin Dashboard",
    adminEmail: "admin@example.com",
    timeZone: "UTC",
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    newPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log("Saving settings:", formData);
  };

  const pendingApprovals = [
    {
      campaign: "Save the Forest Initiative",
      creator: "Green Earth Foundation",
      status: "Pending",
      submitted: "2 hours ago",
    },
    {
      campaign: "Community Food Bank",
      creator: "Local Help Network",
      status: "Pending",
      submitted: "3 hours ago",
    },
  ];

  return (
    <div className="p-6 animate-fadeIn">
      <div className="grid grid-cols-1 gap-6">
        {/* General Settings */}
        <div
          className={`${
            !toggleTheme ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300`}
        >
          <h2
            className={`text-xl font-bold ${
              !toggleTheme ? "text-gray-100" : "text-gray-900"
            } mb-6`}
          >
            General Settings
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <label
                  className={`block text-sm font-medium ${
                    !toggleTheme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Site Name
                </label>
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  name="siteName"
                  value={formData.siteName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg border ${
                    !toggleTheme
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  } shadow-sm focus:border-custom focus:ring-custom transition-colors duration-200`}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <label
                  className={`block text-sm font-medium ${
                    !toggleTheme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Admin Email
                </label>
              </div>
              <div className="col-span-2">
                <input
                  type="email"
                  name="adminEmail"
                  value={formData.adminEmail}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg border ${
                    !toggleTheme
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  } shadow-sm focus:border-custom focus:ring-custom transition-colors duration-200`}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <label
                  className={`block text-sm font-medium ${
                    !toggleTheme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Time Zone
                </label>
              </div>
              <div className="col-span-2">
                <select
                  name="timeZone"
                  value={formData.timeZone}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg border ${
                    !toggleTheme
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  } shadow-sm focus:border-custom focus:ring-custom transition-colors duration-200`}
                >
                  {["UTC", "EST", "PST", "GMT"].map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div
          className={`${
            !toggleTheme ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300`}
        >
          <h2
            className={`text-xl font-bold ${
              !toggleTheme ? "text-gray-100" : "text-gray-900"
            } mb-6`}
          >
            Notification Settings
          </h2>
          <div className="space-y-4">
            {[
              {
                name: "emailNotifications",
                label: "Email Notifications",
                description:
                  "Receive email notifications for important updates",
              },
              {
                name: "pushNotifications",
                label: "Push Notifications",
                description: "Receive push notifications in browser",
              },
              {
                name: "smsNotifications",
                label: "SMS Notifications",
                description: "Receive SMS for critical alerts",
              },
            ].map((notification) => (
              <div
                key={notification.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name={notification.name}
                    checked={formData[notification.name]}
                    onChange={handleInputChange}
                    className={`h-4 w-4 rounded border-gray-300 text-custom focus:ring-custom transition-colors duration-200 ${
                      !toggleTheme ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                  <label
                    className={`ml-2 block text-sm ${
                      !toggleTheme ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {notification.label}
                  </label>
                </div>
                <span
                  className={`text-sm ${
                    !toggleTheme ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {notification.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Settings */}
        <div
          className={`${
            !toggleTheme ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300`}
        >
          <h2
            className={`text-xl font-bold ${
              !toggleTheme ? "text-gray-100" : "text-gray-900"
            } mb-6`}
          >
            Security Settings
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <label
                  className={`block text-sm font-medium ${
                    !toggleTheme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Change Password
                </label>
              </div>
              <div className="col-span-2">
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="New Password"
                  className={`mt-1 block w-full rounded-lg border ${
                    !toggleTheme
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  } shadow-sm focus:border-custom focus:ring-custom transition-colors duration-200`}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <label
                  className={`block text-sm font-medium ${
                    !toggleTheme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Two-Factor Authentication
                </label>
              </div>
              <div className="col-span-2">
                <button
                  className={`rounded-lg px-6 py-2.5 text-white font-medium transform hover:scale-105 transition-all duration-300 ${
                    !toggleTheme
                      ? "bg-[#00bfa5] hover:bg-[#009688]"
                      : "bg-[#00bfa5] hover:bg-[#009688]"
                  }`}
                >
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            className={`rounded-lg px-6 py-2.5 font-medium transition-all duration-300 ${
              !toggleTheme
                ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className={`rounded-lg px-6 py-2.5 text-white font-medium transform hover:scale-105 transition-all duration-300 ${
              !toggleTheme
                ? "bg-[#00bfa5] hover:bg-[#009688]"
                : "bg-[#00bfa5] hover:bg-[#009688]"
            }`}
          >
            Save Changes
          </button>
        </div>

        {/* Pending Approvals */}
        <div
          className={`${
            !toggleTheme ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg mt-6 animate-slideUp animation-delay-400`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2
                className={`text-lg font-bold ${
                  !toggleTheme ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Pending Approvals
              </h2>
              <button
                className={`rounded-lg px-4 py-2 text-white font-medium transform hover:scale-105 transition-all duration-300 ${
                  !toggleTheme
                    ? "bg-[#00bfa5] hover:bg-[#009688]"
                    : "bg-[#00bfa5] hover:bg-[#009688]"
                }`}
              >
                View All
              </button>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={!toggleTheme ? "bg-gray-700" : "bg-gray-50"}>
                  <tr>
                    {[
                      "Campaign",
                      "Creator",
                      "Status",
                      "Submitted",
                      "Action",
                    ].map((header) => (
                      <th
                        key={header}
                        className={`px-6 py-3 text-left text-xs font-semibold ${
                          !toggleTheme ? "text-gray-300" : "text-gray-600"
                        } uppercase tracking-wider`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody
                  className={`divide-y ${
                    !toggleTheme ? "divide-gray-700" : "divide-gray-200"
                  }`}
                >
                  {pendingApprovals.map((approval, index) => (
                    <tr
                      key={index}
                      className="hover:bg-opacity-50 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          !toggleTheme ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        {approval.campaign}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          !toggleTheme ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {approval.creator}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {approval.status}
                        </span>
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          !toggleTheme ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {approval.submitted}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button className="inline-flex items-center px-3 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition-colors duration-300">
                          <FontAwesomeIcon icon={faCheck} className="mr-1" />
                          Approve
                        </button>
                        <button className="inline-flex items-center px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors duration-300">
                          <FontAwesomeIcon icon={faTimes} className="mr-1" />
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
