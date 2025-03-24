import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUsers, faDollarSign, faFlag } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const StatCards = () => {
  const toggleTheme = useSelector((state) => state.theme.darkMode);
  const stats = [
    {
      title: 'Active Campaigns',
      value: '247',
      icon: faBullhorn,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Total Users',
      value: '12,847',
      icon: faUsers,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Revenue Today',
      value: '$8,294',
      icon: faDollarSign,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Pending Reports',
      value: '23',
      icon: faFlag,
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${
            toggleTheme ? "bg-white" : "bg-gray-800 text-white"
          } rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300`}
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${stat.bgColor}`}>
              <FontAwesomeIcon
                icon={stat.icon}
                className={`${stat.iconColor}`}
              />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium">{stat.title}</p>
              <p className="text-2xl font-semibold">
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
