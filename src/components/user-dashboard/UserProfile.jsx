import { useSelector } from "react-redux";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import {
  FaUser,
  FaEdit,
  FaHeart,
  FaHandHoldingHeart,
  FaTrophy,
} from "react-icons/fa";

const defaultUser = {
  name: "Sarah Johnson",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
  impactPoints: 2450,
  campaignsSupported: 12,
  totalDonated: 850,
  achievements: 8,
};

const UserProfile = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const [user] = useState(defaultUser);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    avatar: user.avatar,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <div
      className={`h-full flex flex-col rounded-xl ${
        theme ? "bg-white" : "bg-gray-800"
      } shadow-sm overflow-hidden transition-colors duration-300`}
    >
      <div className="flex-1">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6 pl-4 pr-4 pt-4">
          <div className="flex-shrink-0">
            {formData.avatar ? (
              <img
                src={formData.avatar}
                alt={formData.name}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-[#00bfa5]"
              />
            ) : (
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700">
                <FaUser className="h-8 w-8 text-gray-400" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h2
              className={`text-lg font-semibold truncate ${
                theme ? "text-gray-900" : "text-white"
              }`}
            >
              {formData.name}
            </h2>
            <p
              className={`text-sm ${theme ? "text-gray-500" : "text-gray-400"}`}
            >
              Community Member
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="pl-4 pr-4">
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="w-full py-2.5 px-4 rounded-lg text-sm font-medium bg-[#00bfa5] hover:bg-[#00a392] text-white flex items-center justify-center gap-2">
                <FaEdit className="w-4 h-4" />
                Edit Profile
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                className="w-80 bg-white p-4 shadow-lg rounded-lg border border-gray-200"
                side="bottom"
                align="center"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Edit Profile
                </h3>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />

                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />

                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <Popover.Close asChild>
                    <button className="px-4 py-2 bg-gray-300 rounded-md">
                      Cancel
                    </button>
                  </Popover.Close>
                  <Popover.Close asChild>
                    <button className="px-4 py-2 bg-[#00bfa5] text-white rounded-md">
                      Save
                    </button>
                  </Popover.Close>
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 mt-6 w-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg flex items-center bg-${stat.color}-100 dark:bg-${stat.color}-800`}
            >
              <stat.icon
                className={`h-6 w-6 text-${stat.color}-500 dark:text-${stat.color}-300`}
              />
              <div className="ml-3">
                <p
                  className={`text-sm font-medium text-${stat.color}-500 dark:text-${stat.color}-300`}
                >
                  {stat.label}
                </p>
                <p
                  className={`text-sm text-${stat.color}-500 dark:text-${stat.color}-300`}
                >
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
