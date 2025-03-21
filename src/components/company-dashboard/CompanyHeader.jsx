import React from "react";
import { useSelector } from "react-redux";
import { FaRegClock, FaUsers, FaChartLine } from "react-icons/fa";

const defaultData = {
  companyName: "FundHive",
  campaignTitle: "Revolutionizing crowdfunding through blockchain technology",
  description:
    "FundHive is a blockchain-based crowdfunding platform that empowers creators to raise funds for their projects.",
  raised: 124580,
  goal: 150000,
  daysLeft: 15,
  supporters: 847,
  avgDonation: 147,
  teamMembers: [
    {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80",
      name: "Sarah Chen",
      role: "Founder",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80",
      name: "Michael Torres",
      role: "CTO",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80",
      name: "David Kim",
      role: "CMO",
    },
  ],
};

const CompanyHeader = ({
  companyName = defaultData.companyName,
  campaignTitle = defaultData.campaignTitle,
  description = defaultData.description,
  raised = defaultData.raised,
  goal = defaultData.goal,
  daysLeft = defaultData.daysLeft,
  supporters = defaultData.supporters,
  avgDonation = defaultData.avgDonation,
  teamMembers = defaultData.teamMembers,
}) => {
  const theme = useSelector((state) => state.theme.darkMode);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const progress = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div
      className={`rounded-xl ${
        theme ? "bg-white" : "bg-gray-800"
      } shadow-sm overflow-hidden`}
    >
      <div className="p-6">
        {/* Company and Campaign Info */}
        <div className="space-y-2">
          <h1
            className={`text-2xl font-bold ${
              theme ? "text-gray-900" : "text-white"
            }`}
          >
            {companyName}
          </h1>
          <h2
            className={`text-xl ${theme ? "text-gray-700" : "text-gray-300"}`}
          >
            {campaignTitle}
          </h2>
          <p className={`text-sm ${theme ? "text-gray-600" : "text-gray-400"}`}>
            {description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span
              className={`text-sm font-medium ${
                theme ? "text-gray-700" : "text-gray-300"
              }`}
            >
              {formatCurrency(raised)} of {formatCurrency(goal)}
            </span>
            <span
              className={`text-sm font-medium ${
                theme ? "text-gray-700" : "text-gray-300"
              }`}
            >
              {progress}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="h-2 rounded-full bg-[#00bfa5]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-lg ${
                theme ? "bg-blue-100" : "bg-blue-800/20"
              }`}
            >
              <FaChartLine
                className={`h-5 w-5 ${
                  theme ? "text-blue-600" : "text-blue-400"
                }`}
              />
            </div>
            <div>
              <p
                className={`text-sm font-medium ${
                  theme ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Average Donation
              </p>
              <p
                className={`text-lg font-semibold ${
                  theme ? "text-gray-900" : "text-white"
                }`}
              >
                {formatCurrency(avgDonation)}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-lg ${
                theme ? "bg-green-100" : "bg-green-800/20"
              }`}
            >
              <FaUsers
                className={`h-5 w-5 ${
                  theme ? "text-green-600" : "text-green-400"
                }`}
              />
            </div>
            <div>
              <p
                className={`text-sm font-medium ${
                  theme ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Total Supporters
              </p>
              <p
                className={`text-lg font-semibold ${
                  theme ? "text-gray-900" : "text-white"
                }`}
              >
                {supporters.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-lg ${
                theme ? "bg-purple-100" : "bg-purple-800/20"
              }`}
            >
              <FaRegClock
                className={`h-5 w-5 ${
                  theme ? "text-purple-600" : "text-purple-400"
                }`}
              />
            </div>
            <div>
              <p
                className={`text-sm font-medium ${
                  theme ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Days Left
              </p>
              <p
                className={`text-lg font-semibold ${
                  theme ? "text-gray-900" : "text-white"
                }`}
              >
                {daysLeft}
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-6">
          <h3
            className={`text-sm font-medium ${
              theme ? "text-gray-700" : "text-gray-300"
            } mb-3`}
          >
            Team Members
          </h3>
          <div className="flex flex-wrap gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center space-x-2">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-8 w-8 rounded-full"
                />
                <div>
                  <p
                    className={`text-sm font-medium ${
                      theme ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {member.name}
                  </p>
                  <p
                    className={`text-xs ${
                      theme ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
