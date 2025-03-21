import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const AdminUsers = () => {
  const toggleTheme = useSelector((state) => state.theme.toggleTheme);
  const [currentPage, setCurrentPage] = useState(1);

  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      image: 'https://ui-avatars.com/api/?name=John+Smith&background=random',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'Editor',
      status: 'Active',
      image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=random',
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike@example.com',
      role: 'Viewer',
      status: 'Pending',
      image: 'https://ui-avatars.com/api/?name=Mike+Chen&background=random',
    },
  ];

  const pendingApprovals = [
    {
      id: 1,
      campaign: 'Save the Forest Initiative',
      creator: 'Green Earth Foundation',
      status: 'Pending',
      submitted: '2 hours ago',
    },
    {
      id: 2,
      campaign: 'Community Food Bank',
      creator: 'Local Help Network',
      status: 'Pending',
      submitted: '3 hours ago',
    },
  ];

  const getRoleStyle = (role) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'bg-green-100 text-green-800';
      case 'editor':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Users Table */}
      <div className="grid grid-cols-1 gap-6">
        <div className={`${toggleTheme ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-lg font-medium ${toggleTheme ? 'text-gray-200' : 'text-gray-900'}`}>
                All Users
              </h2>
              <button
                className={`rounded-lg px-4 py-2 text-white ${
                  toggleTheme ? 'bg-[#bb86fc] hover:bg-[#9c64fb]' : 'bg-[#00bfa5] hover:bg-[#009688]'
                } transition-colors duration-300`}
              >
                Add User
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={toggleTheme ? 'bg-gray-700' : 'bg-gray-50'}>
                  <tr>
                    {['User', 'Email', 'Role', 'Status', 'Actions'].map((header) => (
                      <th
                        key={header}
                        className={`px-6 py-3 text-left text-xs font-medium ${
                          toggleTheme ? 'text-gray-300' : 'text-gray-500'
                        } uppercase tracking-wider`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className={`divide-y ${toggleTheme ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img className="h-10 w-10 rounded-full" src={user.image} alt={user.name} />
                          <div className="ml-4">
                            <div className={`text-sm font-medium ${toggleTheme ? 'text-gray-200' : 'text-gray-900'}`}>
                              {user.name}
                            </div>
                            <div className={`text-sm ${toggleTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${toggleTheme ? 'text-gray-300' : 'text-gray-500'}`}>
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleStyle(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          className={`${
                            toggleTheme ? 'text-[#bb86fc] hover:text-[#9c64fb]' : 'text-[#00bfa5] hover:text-[#009688]'
                          } mr-3 transition-colors duration-300`}
                        >
                          <FontAwesomeIcon icon={faEdit} className="mr-1" />
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-900 transition-colors duration-300">
                          <FontAwesomeIcon icon={faTrash} className="mr-1" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className={`text-sm ${toggleTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                Showing 1 to 3 of 50 results
              </div>
              <div className="flex-1 flex justify-end">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  {['Previous', '1', '2', '3', 'Next'].map((page, index) => (
                    <button
                      key={page}
                      className={`relative inline-flex items-center px-4 py-2 border ${
                        toggleTheme
                          ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                      } text-sm font-medium transition-colors duration-300 ${
                        index === 0 ? 'rounded-l-md' : index === 4 ? 'rounded-r-md' : ''
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

      {/* Pending Approvals */}
      <div className="mt-8">
        <div className={`${toggleTheme ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow`}>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className={`text-lg font-medium ${toggleTheme ? 'text-gray-200' : 'text-gray-900'}`}>
                Pending Approvals
              </h2>
              <button
                className={`rounded-lg px-4 py-2 text-white ${
                  toggleTheme ? 'bg-[#bb86fc] hover:bg-[#9c64fb]' : 'bg-[#00bfa5] hover:bg-[#009688]'
                } transition-colors duration-300`}
              >
                View All
              </button>
            </div>
            <div className="mt-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={toggleTheme ? 'bg-gray-700' : 'bg-gray-50'}>
                  <tr>
                    {['Campaign', 'Creator', 'Status', 'Submitted', 'Action'].map((header) => (
                      <th
                        key={header}
                        className={`px-6 py-3 text-left text-xs font-medium ${
                          toggleTheme ? 'text-gray-300' : 'text-gray-500'
                        } uppercase tracking-wider`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className={`divide-y ${toggleTheme ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {pendingApprovals.map((approval) => (
                    <tr key={approval.id}>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${toggleTheme ? 'text-gray-200' : 'text-gray-900'}`}>
                        {approval.campaign}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${toggleTheme ? 'text-gray-300' : 'text-gray-500'}`}>
                        {approval.creator}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {approval.status}
                        </span>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${toggleTheme ? 'text-gray-300' : 'text-gray-500'}`}>
                        {approval.submitted}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-green-600 hover:text-green-900 mr-2 transition-colors duration-300">
                          <FontAwesomeIcon icon={faCheck} className="mr-1" />
                          Approve
                        </button>
                        <button className="text-red-600 hover:text-red-900 transition-colors duration-300">
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

export default AdminUsers;
