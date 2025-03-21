import React from 'react';
import { useSelector } from 'react-redux';

const CompaniesOverview = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const companies = {
    approved: [
      { name: 'Tech Corp Ltd.', date: '2024-02-15' },
      { name: 'Innovation Inc.', date: '2024-02-14' },
      { name: 'Future Systems', date: '2024-02-13' }
    ],
    pending: [
      { name: 'Global Solutions', date: '2024-02-15' },
      { name: 'Smart Tech Co.', date: '2024-02-14' },
      { name: 'Digital Dynamics', date: '2024-02-13' }
    ],
    rejected: [
      { name: 'Alpha Industries', date: '2024-02-15' },
      { name: 'Beta Corp', date: '2024-02-14' },
      { name: 'Omega Systems', date: '2024-02-13' }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return {
          bg: !isDarkMode ? 'bg-green-900/20' : 'bg-green-50',
          text: !isDarkMode ? 'text-green-400' : 'text-green-800',
          badge: 'bg-green-100 text-green-800'
        };
      case 'Pending':
        return {
          bg: !isDarkMode ? 'bg-yellow-900/20' : 'bg-yellow-50',
          text: !isDarkMode ? 'text-yellow-400' : 'text-yellow-800',
          badge: 'bg-yellow-100 text-yellow-800'
        };
      case 'Rejected':
        return {
          bg: !isDarkMode ? 'bg-red-900/20' : 'bg-red-50',
          text: !isDarkMode ? 'text-red-400' : 'text-red-800',
          badge: 'bg-red-100 text-red-800'
        };
      default:
        return {};
    }
  };

  return (
    <div className={`max-w-7xl mx-auto ${!isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-8`}>
      <h2 className={`text-2xl font-bold mb-8 ${!isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
        Companies Status Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Approved Companies */}
        <div className={`${getStatusColor('Approved').bg} p-6 rounded-lg`}>
          <div className="flex justify-between items-center">
            <h3 className={`text-lg font-medium ${getStatusColor('Approved').text}`}>Approved</h3>
            <span className={`text-2xl font-bold ${getStatusColor('Approved').text}`}>24</span>
          </div>
          <div className="mt-4">
            <div className="space-y-3">
              {companies.approved.map((company, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className={getStatusColor('Approved').text}>{company.name}</span>
                  <span className={getStatusColor('Approved').text}>{company.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Companies */}
        <div className={`${getStatusColor('Pending').bg} p-6 rounded-lg`}>
          <div className="flex justify-between items-center">
            <h3 className={`text-lg font-medium ${getStatusColor('Pending').text}`}>Pending</h3>
            <span className={`text-2xl font-bold ${getStatusColor('Pending').text}`}>12</span>
          </div>
          <div className="mt-4">
            <div className="space-y-3">
              {companies.pending.map((company, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className={getStatusColor('Pending').text}>{company.name}</span>
                  <span className={getStatusColor('Pending').text}>{company.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rejected Companies */}
        <div className={`${getStatusColor('Rejected').bg} p-6 rounded-lg`}>
          <div className="flex justify-between items-center">
            <h3 className={`text-lg font-medium ${getStatusColor('Rejected').text}`}>Rejected</h3>
            <span className={`text-2xl font-bold ${getStatusColor('Rejected').text}`}>8</span>
          </div>
          <div className="mt-4">
            <div className="space-y-3">
              {companies.rejected.map((company, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className={getStatusColor('Rejected').text}>{company.name}</span>
                  <span className={getStatusColor('Rejected').text}>{company.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Companies Table */}
      <div className="mt-6">
        <table className={`min-w-full divide-y ${!isDarkMode ? 'divide-gray-700' : 'divide-gray-200'} shadow-sm rounded-lg overflow-hidden`}>
          <thead className={!isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}>
            <tr>
              <th className={`px-6 py-3 text-left text-xs font-medium ${!isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                Company Name
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${!isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                Status
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${!isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                Date
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${!isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={`${!isDarkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
            {[...companies.approved, ...companies.pending, ...companies.rejected].slice(0, 3).map((company, index) => (
              <tr key={index}>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${!isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {company.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    index === 0 ? getStatusColor('Approved').badge :
                    index === 1 ? getStatusColor('Pending').badge :
                    getStatusColor('Rejected').badge
                  }`}>
                    {index === 0 ? 'Approved' : index === 1 ? 'Pending' : 'Rejected'}
                  </span>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${!isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  {company.date}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${!isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  <button className={`text-[#00bfa5] hover:text-[#009688] transition-colors duration-300`}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompaniesOverview;
