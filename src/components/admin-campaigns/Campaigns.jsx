import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

const Campaigns = () => {
  const toggleTheme = useSelector((state) => state.theme.toggleTheme);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample campaign data - Replace with actual API call
  const campaign = [
    {
      id: 1,
      title: 'Save the Ocean Campaign',
      creator: 'EcoGroup',
      status: 'active',
      raised: 15000,
      goal: 25000,
      daysLeft: 15,
      image: 'https://images.unsplash.com/photo-1583842761824-63a88b5020bd?w=500'
    },
    {
      id: 2,
      title: 'Tech Education for All',
      creator: 'EduTech Foundation',
      status: 'pending',
      raised: 5000,
      goal: 50000,
      daysLeft: 30,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500'
    },
    {
      id: 3,
      title: 'Community Art Center',
      creator: 'ArtSpace',
      status: 'completed',
      raised: 10000,
      goal: 10000,
      daysLeft: 0,
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=500'
    }
  ];

  const filteredCampaigns = campaign.filter((campaign) => {
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.creator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || campaign.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return {
          bg: toggleTheme ? 'bg-green-900/20' : 'bg-green-50',
          text: toggleTheme ? 'text-green-400' : 'text-green-800'
        };
      case 'pending':
        return {
          bg: toggleTheme ? 'bg-yellow-900/20' : 'bg-yellow-50',
          text: toggleTheme ? 'text-yellow-400' : 'text-yellow-800'
        };
      case 'completed':
        return {
          bg: toggleTheme ? 'bg-blue-900/20' : 'bg-blue-50',
          text: toggleTheme ? 'text-blue-400' : 'text-blue-800'
        };
      default:
        return {
          bg: toggleTheme ? 'bg-gray-900/20' : 'bg-gray-50',
          text: toggleTheme ? 'text-gray-400' : 'text-gray-800'
        };
    }
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className={`relative ${toggleTheme ? 'text-gray-100' : 'text-gray-900'}`}>
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                toggleTheme
                  ? 'bg-gray-700/50 focus:bg-gray-700'
                  : 'bg-white focus:bg-gray-50'
              } border ${
                toggleTheme ? 'border-gray-600' : 'border-gray-200'
              } focus:outline-none focus:ring-2 ${
                toggleTheme ? 'focus:ring-[#bb86fc]' : 'focus:ring-[#00bfa5]'
              } transition-colors duration-300`}
            />
          </div>
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className={`px-4 py-2 rounded-lg ${
            toggleTheme
              ? 'bg-gray-700/50 text-gray-100 border-gray-600'
              : 'bg-white text-gray-900 border-gray-200'
          } border focus:outline-none focus:ring-2 ${
            toggleTheme ? 'focus:ring-[#bb86fc]' : 'focus:ring-[#00bfa5]'
          } transition-colors duration-300`}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Campaign Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCampaigns.map((campaign) => {
          const statusColors = getStatusColor(campaign.status);
          return (
            <div
              key={campaign.id}
              className={`rounded-xl overflow-hidden ${
                toggleTheme ? 'bg-gray-800' : 'bg-white'
              } shadow-lg transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-semibold ${
                    toggleTheme ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {campaign.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    statusColors.bg
                  } ${statusColors.text}`}>
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </span>
                </div>
                <p className={`text-sm ${
                  toggleTheme ? 'text-gray-400' : 'text-gray-500'
                } mb-4`}>
                  by {campaign.creator}
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className={toggleTheme ? 'text-gray-300' : 'text-gray-600'}>
                      Progress
                    </span>
                    <span className={toggleTheme ? 'text-gray-300' : 'text-gray-600'}>
                      {Math.round((campaign.raised / campaign.goal) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        toggleTheme ? 'bg-[#bb86fc]' : 'bg-[#00bfa5]'
                      } rounded-full`}
                      style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className={toggleTheme ? 'text-gray-300' : 'text-gray-600'}>
                      ${campaign.raised.toLocaleString()}
                    </span>
                    <span className={toggleTheme ? 'text-gray-300' : 'text-gray-600'}>
                      ${campaign.goal.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${
                    toggleTheme ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {campaign.daysLeft > 0 ? `${campaign.daysLeft} days left` : 'Ended'}
                  </span>
                  <div className="flex gap-2">
                    <Link
                      to={`details/${campaign.id}`}
                      className={`p-2 rounded-lg ${
                        toggleTheme ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      } transition-colors duration-300`}
                    >
                      <FontAwesomeIcon icon={faEye} className={toggleTheme ? 'text-gray-300' : 'text-gray-600'} />
                    </Link>
                    <Link
                      to={`edit/${campaign.id}`}
                      className={`p-2 rounded-lg ${
                        toggleTheme ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      } transition-colors duration-300`}
                    >
                      <FontAwesomeIcon icon={faEdit} className={toggleTheme ? 'text-gray-300' : 'text-gray-600'} />
                    </Link>
                    <button
                      className={`p-2 rounded-lg ${
                        toggleTheme ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      } transition-colors duration-300`}
                    >
                      <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Campaigns;
