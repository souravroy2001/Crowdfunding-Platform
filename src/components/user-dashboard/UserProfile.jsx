import React from "react";
import { useSelector } from "react-redux";
import { FaUser, FaHeart, FaHandHoldingHeart, FaTrophy } from "react-icons/fa";

const defaultUser = {
  name: "Sarah Johnson",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
  impactPoints: 2450,
  campaignsSupported: 12,
  totalDonated: 850,
  achievements: 8,
};

const UserProfile = () => {
  const theme = useSelector((state) => state.toggleTheme);
  const [user] = React.useState(defaultUser);

  const stats = [
    {
      label: "Impact Points",
      value: user.impactPoints,
      icon: FaHeart,
      color: "rose",
    },
    {
      label: "Campaigns",
      value: user.campaignsSupported,
      icon: FaHandHoldingHeart,
      color: "green",
    },
    {
      label: "Donated",
      value: `$${user.totalDonated}`,
      icon: FaHandHoldingHeart,
      color: "blue",
    },
    {
      label: "Achievements",
      value: user.achievements,
      icon: FaTrophy,
      color: "purple",
    },
  ];

  return (
    <div className={`h-full flex flex-col rounded-xl ${theme ? "bg-white" : "bg-gray-800"} shadow-sm overflow-hidden transition-colors duration-300`}>
      <div className="flex-1 p-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-[#00bfa5]"
              />
            ) : (
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700">
                <FaUser className="h-8 w-8 text-gray-400" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className={`text-lg font-semibold truncate ${theme ? "text-gray-900" : "text-white"}`}>
              {user.name}
            </h2>
            <p className={`text-sm ${theme ? "text-gray-500" : "text-gray-400"}`}>
              Community Member
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`group flex flex-col p-4 rounded-lg transition-colors duration-300 ${
                theme
                  ? `bg-${stat.color}-50 hover:bg-${stat.color}-100/80`
                  : `bg-${stat.color}-900/20 hover:bg-${stat.color}-900/30`
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`flex-shrink-0 flex items-center justify-center p-2 rounded-full ${
                  theme
                    ? `bg-${stat.color}-100`
                    : `bg-${stat.color}-900/30`
                }`}>
                  <stat.icon className={`h-4 w-4 ${
                    theme
                      ? `text-${stat.color}-600`
                      : `text-${stat.color}-400`
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${theme ? "text-gray-600" : "text-gray-300"}`}>
                    {stat.label}
                  </p>
                  <p className={`text-lg font-semibold ${theme ? `text-${stat.color}-600` : `text-${stat.color}-400`}`}>
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <button
            className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 ${
              theme
                ? "bg-[#00bfa5] hover:bg-[#00a392] text-white"
                : "bg-[#00bfa5] hover:bg-[#00a392] text-white"
            }`}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
