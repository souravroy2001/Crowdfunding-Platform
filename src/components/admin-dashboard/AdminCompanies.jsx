import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHome,
  faBullhorn,
  faUsers,
  faChartLine,
  faFlag,
  faCog,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const AdminCompanies = () => {
  const toggleTheme = useSelector((state) => state.theme.toggleTheme);
  const navigate = useNavigate();

  const approvedCompanies = [
    { id: 1, name: "Tech Corp Ltd.", date: "2024-02-15" },
    { id: 2, name: "Innovation Inc.", date: "2024-02-14" },
    { id: 3, name: "Future Systems", date: "2024-02-13" },
  ];

  const pendingCompanies = [
    { id: 4, name: "Global Solutions", date: "2024-02-15" },
    { id: 5, name: "Smart Tech Co.", date: "2024-02-14" },
    { id: 6, name: "Digital Dynamics", date: "2024-02-13" },
  ];

  const rejectedCompanies = [
    { id: 7, name: "Alpha Industries", date: "2024-02-15" },
    { id: 8, name: "Beta Corp", date: "2024-02-14" },
    { id: 9, name: "Omega Systems", date: "2024-02-13" },
  ];

  const allCompanies = [
    { id: 1, name: "Tech Corp Ltd.", status: "Approved", date: "2024-02-15" },
    { id: 4, name: "Global Solutions", status: "Pending", date: "2024-02-15" },
    { id: 7, name: "Alpha Industries", status: "Rejected", date: "2024-02-15" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleViewDetails = (companyId) => {
    navigate(`/admin/companies/${companyId}`);
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className={`max-w-7xl mx-auto bg-white ${toggleTheme ? 'dark:bg-gray-800' : ''} rounded-lg shadow-lg p-8`}>
        <h2 className={`text-2xl font-bold mb-8 ${toggleTheme ? 'text-gray-100' : 'text-gray-800'}`}>
          Companies Status Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Approved Companies */}
          <div className={`bg-green-50 ${toggleTheme ? 'dark:bg-green-900/20' : ''} p-6 rounded-lg`}>
            <div className="flex justify-between items-center">
              <h3 className={`text-lg font-medium ${toggleTheme ? 'text-green-400' : 'text-green-800'}`}>
                Approved
              </h3>
              <span className={`text-2xl font-bold ${toggleTheme ? 'text-green-400' : 'text-green-600'}`}>
                24
              </span>
            </div>
            <div className="mt-4">
              <div className="space-y-3">
                {approvedCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className={toggleTheme ? 'text-green-400' : 'text-green-700'}>
                      {company.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className={toggleTheme ? 'text-green-500' : 'text-green-600'}>
                        {company.date}
                      </span>
                      <button
                        onClick={() => handleViewDetails(company.id)}
                        className={`p-2 rounded-full hover:bg-green-200 ${toggleTheme ? 'text-green-400 hover:bg-green-800' : 'text-green-700'} transition-colors duration-300`}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pending Companies */}
          <div className={`bg-yellow-50 ${toggleTheme ? 'dark:bg-yellow-900/20' : ''} p-6 rounded-lg`}>
            <div className="flex justify-between items-center">
              <h3 className={`text-lg font-medium ${toggleTheme ? 'text-yellow-400' : 'text-yellow-800'}`}>
                Pending
              </h3>
              <span className={`text-2xl font-bold ${toggleTheme ? 'text-yellow-400' : 'text-yellow-600'}`}>
                12
              </span>
            </div>
            <div className="mt-4">
              <div className="space-y-3">
                {pendingCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className={toggleTheme ? 'text-yellow-400' : 'text-yellow-700'}>
                      {company.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className={toggleTheme ? 'text-yellow-500' : 'text-yellow-600'}>
                        {company.date}
                      </span>
                      <button
                        onClick={() => handleViewDetails(company.id)}
                        className={`p-2 rounded-full hover:bg-yellow-200 ${toggleTheme ? 'text-yellow-400 hover:bg-yellow-800' : 'text-yellow-700'} transition-colors duration-300`}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rejected Companies */}
          <div className={`bg-red-50 ${toggleTheme ? 'dark:bg-red-900/20' : ''} p-6 rounded-lg`}>
            <div className="flex justify-between items-center">
              <h3 className={`text-lg font-medium ${toggleTheme ? 'text-red-400' : 'text-red-800'}`}>
                Rejected
              </h3>
              <span className={`text-2xl font-bold ${toggleTheme ? 'text-red-400' : 'text-red-600'}`}>
                8
              </span>
            </div>
            <div className="mt-4">
              <div className="space-y-3">
                {rejectedCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className={toggleTheme ? 'text-red-400' : 'text-red-700'}>
                      {company.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className={toggleTheme ? 'text-red-500' : 'text-red-600'}>
                        {company.date}
                      </span>
                      <button
                        onClick={() => handleViewDetails(company.id)}
                        className={`p-2 rounded-full hover:bg-red-200 ${toggleTheme ? 'text-red-400 hover:bg-red-800' : 'text-red-700'} transition-colors duration-300`}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Companies Table */}
        <div className="mt-8">
          <h3 className={`text-lg font-medium mb-4 ${toggleTheme ? 'text-gray-100' : 'text-gray-800'}`}>
            All Companies
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className={toggleTheme ? 'bg-gray-700' : 'bg-gray-50'}>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${toggleTheme ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Company Name
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${toggleTheme ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Status
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${toggleTheme ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Date
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${toggleTheme ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y divide-gray-200 ${toggleTheme ? 'bg-gray-800' : 'bg-white'}`}>
                {allCompanies.map((company) => (
                  <tr key={company.id}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${toggleTheme ? 'text-gray-300' : 'text-gray-900'}`}>
                      {company.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(company.status)}`}>
                        {company.status}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${toggleTheme ? 'text-gray-300' : 'text-gray-500'}`}>
                      {company.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleViewDetails(company.id)}
                        className={`text-sm px-4 py-2 rounded-md ${
                          toggleTheme
                            ? 'bg-[#bb86fc] text-white hover:bg-[#9c64fb]'
                            : 'bg-[#00bfa5] text-white hover:bg-[#009688]'
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
        </div>
      </div>
    </div>
  );
};

export default AdminCompanies;
