import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileExport,
  faFilter,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

const AdminDonations = () => {
  const toggleTheme = useSelector((state) => state.theme.darkMode);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const donations = [
    {
      id: 1,
      donor: {
        name: 'John Smith',
        email: 'john.smith@email.com',
      },
      campaign: 'Save the Ocean Campaign',
      amount: '$500',
      date: 'Just now',
      status: 'Completed',
    },
    {
      id: 2,
      donor: {
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
      },
      campaign: 'Local Community Support',
      amount: '$1,000',
      date: '1 hour ago',
      status: 'Completed',
    },
    {
      id: 3,
      donor: {
        name: 'Michael Brown',
        email: 'm.brown@email.com',
      },
      campaign: 'Save the Forest Initiative',
      amount: '$750',
      date: '2 hours ago',
      status: 'Completed',
    },
  ];

  const campaigns = [
    'All Campaigns',
    'Save the Ocean Campaign',
    'Local Community Support',
    'Save the Forest Initiative',
  ];

  const handleViewDetails = (donationId) => {
    navigate(`/admin/donations/${donationId}`);
  };

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div
        className={`bg-white ${
          !toggleTheme ? "dark:bg-gray-800" : ""
        } rounded-lg shadow`}
      >
        <div className="p-6">
          {/* Search and Filter Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Search donations..."
                className={`border rounded-lg px-4 py-2 ${
                  !toggleTheme
                    ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  !toggleTheme ? "focus:ring-[#bb86fc]" : "focus:ring-[#00bfa5]"
                }`}
              />
              <select
                className={`border rounded-lg px-4 py-2 ${
                  !toggleTheme
                    ? "bg-gray-700 border-gray-600 text-gray-200"
                    : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  !toggleTheme ? "focus:ring-[#00bfa5]" : "focus:ring-[#00bfa5]"
                }`}
              >
                {campaigns.map((campaign) => (
                  <option key={campaign} value={campaign}>
                    {campaign}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-4">
              <button
                className={`rounded-lg px-4 py-2 flex items-center ${
                  !toggleTheme
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-colors duration-300`}
              >
                <FontAwesomeIcon icon={faFileExport} className="mr-2" />
                Export CSV
              </button>
              <button
                className={`rounded-lg px-4 py-2 flex items-center text-white ${
                  !toggleTheme
                    ? "bg-[#00bfa5] hover:bg-[#009688]"
                    : "bg-[#00bfa5] hover:bg-[#009688]"
                } transition-colors duration-300`}
              >
                <FontAwesomeIcon icon={faFilter} className="mr-2" />
                Filter
              </button>
            </div>
          </div>

          {/* Donations Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className={!toggleTheme ? "bg-gray-700" : "bg-gray-50"}>
                <tr>
                  {[
                    "Donor",
                    "Campaign",
                    "Amount",
                    "Date",
                    "Status",
                    "Actions",
                  ].map((header) => (
                    <th
                      key={header}
                      className={`px-6 py-3 text-left text-xs font-medium ${
                        !toggleTheme ? "text-gray-300" : "text-gray-500"
                      } uppercase tracking-wider`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody
                className={`divide-y divide-gray-200 ${
                  !toggleTheme ? "bg-gray-800" : "bg-white"
                }`}
              >
                {donations.map((donation) => (
                  <tr key={donation.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className={`text-sm font-medium ${
                          !toggleTheme ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        {donation.donor.name}
                      </div>
                      <div
                        className={`text-sm ${
                          !toggleTheme ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {donation.donor.email}
                      </div>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm ${
                        !toggleTheme ? "text-gray-200" : "text-gray-900"
                      }`}
                    >
                      <div className="text-sm">{donation.campaign}</div>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm ${
                        !toggleTheme ? "text-gray-200" : "text-gray-900"
                      }`}
                    >
                      <div className="text-sm">{donation.amount}</div>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm ${
                        !toggleTheme ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {donation.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(
                          donation.status
                        )}`}
                      >
                        {donation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleViewDetails(donation.id)}
                        className={`text-sm flex items-center ${
                          !toggleTheme
                            ? "text-[#00bfa5] hover:text-[#009688]"
                            : "text-[#00bfa5] hover:text-[#009688]"
                        } transition-colors duration-300`}
                      >
                        <FontAwesomeIcon icon={faEye} className="mr-2" />
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex items-center justify-between">
            <div
              className={`text-sm ${
                !toggleTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Showing 1 to 3 of 97 results
            </div>
            <div className="flex-1 flex justify-center">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                {["Previous", "1", "2", "3", "Next"].map((page, index) => (
                  <button
                    key={page}
                    className={`relative inline-flex items-center px-4 py-2 border ${
                      !toggleTheme
                        ? "border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600"
                        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    } text-sm font-medium transition-colors duration-300 ${
                      index === 0
                        ? "rounded-l-md"
                        : index === 4
                        ? "rounded-r-md"
                        : ""
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDonations;
