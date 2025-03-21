import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faClock,
  faTimes,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

const CompanyDetail = () => {
  const toggleTheme = useSelector((state) => state.theme.toggleTheme);

  const companyData = {
    name: 'Tech Corp Ltd.',
    info: {
      industry: 'Technology',
      size: '250-500',
      founded: '2015',
    },
    contact: {
      email: 'contact@techcorp.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
    },
    campaign: {
      status: 'Approved',
      startDate: '2024-03-01',
      duration: '3 months',
    },
    budget: {
      total: '$50,000',
      spent: '$15,000',
      roi: '+25%',
    },
    history: [
      {
        name: 'Summer Promotion',
        startDate: '2024-02-01',
        endDate: '2024-04-30',
        status: 'Approved',
        performance: '+32% CTR',
      },
      {
        name: 'Spring Sale',
        startDate: '2023-11-01',
        endDate: '2024-01-31',
        status: 'Completed',
        performance: '+28% CTR',
      },
    ],
  };

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Action Buttons */}
        <div className="flex justify-end mb-6 space-x-4">
          <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none">
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            Approve
          </button>
          <button className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            Pending
          </button>
          <button className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none">
            <FontAwesomeIcon icon={faTimes} className="mr-2" />
            Reject
          </button>
        </div>

        {/* Company Name */}
        <h2 className="text-2xl font-bold mb-8 text-gray-800">{companyData.name}</h2>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Company Info */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800">Company Info</h3>
            <div className="mt-4 space-y-3">
              {Object.entries(companyData.info).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800">Contact Details</h3>
            <div className="mt-4 space-y-3">
              {Object.entries(companyData.contact).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Status */}
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800">Campaign Status</h3>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Status:</span>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(companyData.campaign.status)}`}>
                  {companyData.campaign.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Start Date:</span>
                <span className="text-gray-900">{companyData.campaign.startDate}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Duration:</span>
                <span className="text-gray-900">{companyData.campaign.duration}</span>
              </div>
            </div>
          </div>

          {/* Budget & ROI */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800">Budget & ROI</h3>
            <div className="mt-4 space-y-3">
              {Object.entries(companyData.budget).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">
                    {key === 'roi' ? 'ROI' : key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>
                  <span className={key === 'roi' ? 'text-green-600' : 'text-gray-900'}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Campaign History */}
        <div className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Campaign History</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaign Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">End Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {companyData.history.map((campaign, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campaign.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.endDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(campaign.status)}`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{campaign.performance}</td>
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

export default CompanyDetail;
