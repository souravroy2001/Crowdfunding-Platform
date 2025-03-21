import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaLeaf, FaGraduationCap, FaHandHoldingHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const defaultCampaigns = [
  {
    id: 1,
    title: "Clean Energy Initiative",
    category: "Environment",
    progress: 75,
    goal: 10000,
    raised: 7500,
    icon: FaLeaf,
    color: "green",
  },
  {
    id: 2,
    title: "Education for All",
    category: "Education",
    progress: 45,
    goal: 5000,
    raised: 2250,
    icon: FaGraduationCap,
    color: "blue",
  },
  {
    id: 3,
    title: "Healthcare Access",
    category: "Healthcare",
    progress: 60,
    goal: 15000,
    raised: 9000,
    icon: FaHandHoldingHeart,
    color: "sky",
  },
];

// Tailwind safe class mapping for colors
const colorClasses = {
  green: {
    bgLight: "bg-green-100",
    bgDark: "bg-green-900/20",
    textLight: "text-green-600",
    textDark: "text-green-400",
    progress: "bg-green-500",
  },
  blue: {
    bgLight: "bg-blue-100",
    bgDark: "bg-blue-900/20",
    textLight: "text-blue-600",
    textDark: "text-blue-400",
    progress: "bg-blue-500",
  },
  sky: {
    bgLight: "bg-sky-100",
    bgDark: "bg-sky-900/20",
    textLight: "text-sky-600",
    textDark: "text-sky-400",
    progress: "bg-sky-500",
  },
};

const ActiveCampaigns = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const [campaigns] = useState(defaultCampaigns);

  return (
    <div
      className={`h-full flex flex-col rounded-xl ${
        theme ? "bg-white" : "bg-gray-900"
      } shadow-lg overflow-hidden transition-all duration-300 p-6`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2
          className={`text-lg font-bold ${
            theme ? "text-gray-900" : "text-white"
          }`}
        >
          Active Campaigns
        </h2>
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            theme ? "bg-gray-200 text-gray-700" : "bg-gray-700 text-gray-300"
          }`}
        >
          {campaigns.length} active
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {campaigns.map((campaign) => {
          const colorClass = colorClasses[campaign.color] || colorClasses.green;

          return (
            <div
              key={campaign.id}
              className={`p-4 rounded-lg shadow-md transition-all duration-300 ${
                theme ? colorClass.bgLight : colorClass.bgDark
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-full ${
                    theme ? colorClass.bgLight : colorClass.bgDark
                  }`}
                >
                  <campaign.icon
                    className={`h-6 w-6 ${
                      theme ? colorClass.textLight : colorClass.textDark
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className={`text-sm font-medium ${
                        theme ? "text-gray-900" : "text-white"
                      } truncate`}
                    >
                      {campaign.title}
                    </h3>
                    <span
                      className={`text-xs ${
                        theme ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {campaign.category}
                    </span>
                  </div>

                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span
                        className={`font-semibold ${
                          theme ? colorClass.textLight : colorClass.textDark
                        }`}
                      >
                        ${campaign.raised.toLocaleString()}
                      </span>
                      <span
                        className={`${
                          theme ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        ${campaign.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="relative h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 rounded-full transition-all duration-300 ${colorClass.progress}`}
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {campaigns.length === 0 && (
        <div className="flex items-center justify-center py-8">
          <p
            className={`text-sm font-medium ${
              theme ? "text-gray-500" : "text-gray-400"
            }`}
          >
            No active campaigns
          </p>
        </div>
      )}

      <div className="mt-6">
        <Link to="/create-campaign" className="block w-full">
          <button className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 bg-[#00bfa5] hover:bg-[#00a392] text-white">
            Create Campaign
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ActiveCampaigns;
