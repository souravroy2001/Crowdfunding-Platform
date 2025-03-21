import React from "react";
import { useSelector } from "react-redux";
import {
  FaNewspaper,
  FaUserPlus,
  FaChartLine,
  FaBullhorn,
} from "react-icons/fa";

const updatesData = [
  {
    id: 1,
    type: "milestone",
    title: "Reached 80% of Funding Goal",
    description:
      "We're thrilled to announce that we've reached 80% of our funding goal! Thank you to all our supporters.",
    date: "Mar 20, 2024",
    icon: <FaChartLine />,
    color: "text-green-500",
  },
  {
    id: 2,
    type: "announcement",
    title: "New Platform Features",
    description:
      "We're rolling out new features to enhance user experience and security.",
    date: "Mar 18, 2024",
    icon: <FaBullhorn />,
    color: "text-blue-500",
  },
  {
    id: 3,
    type: "community",
    title: "Community Milestone",
    description:
      "Our community has grown to over 800 supporters! Join our upcoming virtual meetup.",
    date: "Mar 15, 2024",
    icon: <FaUserPlus />,
    color: "text-purple-500",
  },
  {
    id: 4,
    type: "news",
    title: "Media Coverage",
    description:
      "FundHive featured in TechCrunch's 'Emerging Platforms to Watch'",
    date: "Mar 12, 2024",
    icon: <FaNewspaper />,
    color: "text-orange-500",
  },
];

const CampaignUpdates = () => {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3
          className={`text-lg font-semibold ${
            theme ? "text-gray-900" : "text-white"
          }`}
        >
          Campaign Updates
        </h3>
        <button
          className={`text-sm font-medium ${
            theme
              ? "text-blue-600 hover:text-blue-700"
              : "text-blue-400 hover:text-blue-300"
          } transition-colors duration-200`}
        >
          View All
        </button>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
        <div className="space-y-6">
          {updatesData.map((update) => (
            <div key={update.id} className="relative flex items-start">
              <div
                className={`absolute left-0 p-2 rounded-full ${
                  theme ? "bg-white" : "bg-gray-800"
                } shadow-md z-10`}
              >
                <div className={`${update.color}`}>{update.icon}</div>
              </div>
              <div
                className={`ml-16 p-4 rounded-lg ${
                  theme
                    ? "bg-gray-50 hover:bg-gray-100"
                    : "bg-gray-700 hover:bg-gray-600"
                } transition-all duration-200 w-full cursor-pointer`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4
                    className={`text-sm font-medium ${
                      theme ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {update.title}
                  </h4>
                  <span
                    className={`text-xs ${
                      theme ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {update.date}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    theme ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {update.description}
                </p>
                <div className="mt-3 flex items-center space-x-4">
                  <button
                    className={`text-xs font-medium ${
                      theme
                        ? "text-blue-600 hover:text-blue-700"
                        : "text-blue-400 hover:text-blue-300"
                    } transition-colors duration-200`}
                  >
                    Read More
                  </button>
                  <div
                    className={`flex items-center text-xs ${
                      theme ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    <span className="mr-2">•</span>
                    <span className="capitalize">{update.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignUpdates;
