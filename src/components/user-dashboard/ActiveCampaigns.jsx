import React from "react";
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
    color: "rose",
  },
];

const ActiveCampaigns = () => {
  const theme = useSelector((state) => state.toggleTheme);
  const [campaigns] = React.useState(defaultCampaigns);

  return (
    <div className={`h-full flex flex-col rounded-xl ${theme ? "bg-white" : "bg-gray-800"} shadow-sm overflow-hidden transition-colors duration-300`}>
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-lg font-semibold ${theme ? "text-gray-900" : "text-white"}`}>
            Active Campaigns
          </h2>
          <span className={`inline-flex items-center justify-center px-2.5 py-1 text-xs font-medium rounded-full ${
            theme ? "bg-gray-100 text-gray-600" : "bg-gray-700 text-gray-300"
          }`}>
            {campaigns.length} active
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className={`group flex flex-col p-4 rounded-lg transition-colors duration-300 ${
                theme
                  ? `bg-${campaign.color}-50 hover:bg-${campaign.color}-100/80`
                  : `bg-${campaign.color}-900/20 hover:bg-${campaign.color}-900/30`
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 flex items-center justify-center p-2 rounded-full ${
                  theme
                    ? `bg-${campaign.color}-100`
                    : `bg-${campaign.color}-900/30`
                }`}>
                  <campaign.icon className={`h-5 w-5 ${
                    theme
                      ? `text-${campaign.color}-600`
                      : `text-${campaign.color}-400`
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className={`text-sm font-medium ${theme ? "text-gray-900" : "text-white"} line-clamp-1`}>
                      {campaign.title}
                    </h3>
                    <span className={`text-xs ${theme ? "text-gray-500" : "text-gray-400"}`}>
                      {campaign.category}
                    </span>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className={`font-medium ${theme ? `text-${campaign.color}-600` : `text-${campaign.color}-400`}`}>
                        ${campaign.raised.toLocaleString()}
                      </span>
                      <span className={`${theme ? "text-gray-500" : "text-gray-400"}`}>
                        ${campaign.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="relative h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 transition-all duration-300 rounded-full ${
                          theme
                            ? `bg-${campaign.color}-500`
                            : `bg-${campaign.color}-400`
                        }`}
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {campaigns.length === 0 && (
          <div className="flex items-center justify-center py-8">
            <p className={`text-sm font-medium ${theme ? "text-gray-500" : "text-gray-400"}`}>
              No active campaigns
            </p>
          </div>
        )}

        <div className="mt-6">
          <Link to="/create-campaign" className="block w-full">
            <button
              className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 ${
                theme
                  ? "bg-[#00bfa5] hover:bg-[#00a392] text-white"
                  : "bg-[#00bfa5] hover:bg-[#00a392] text-white"
              }`}
            >
              Create Campaign
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActiveCampaigns;
