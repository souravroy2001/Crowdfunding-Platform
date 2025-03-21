import React from "react";
import { useSelector } from "react-redux";
import { FaCheckCircle, FaClock, FaHourglassHalf } from "react-icons/fa";

const milestoneData = [
  {
    title: "Initial Goal",
    amount: "$50,000",
    description: "Launch campaign and secure initial backers",
    status: "completed",
    date: "Feb 15, 2024",
    progress: 100,
  },
  {
    title: "Community Growth",
    amount: "$75,000",
    description: "Expand community reach and engagement",
    status: "in-progress",
    date: "Mar 20, 2024",
    progress: 65,
  },
  {
    title: "Platform Development",
    amount: "$100,000",
    description: "Begin core platform development phase",
    status: "upcoming",
    date: "Apr 15, 2024",
    progress: 0,
  },
];

const CampaignMilestones = () => {
  const theme = useSelector((state) => state.theme.darkMode);

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <FaCheckCircle className="text-green-500" />;
      case "in-progress":
        return <FaHourglassHalf className="text-blue-500" />;
      default:
        return <FaClock className="text-gray-400" />;
    }
  };

  return (
    <div className="p-6">
      <h3
        className={`text-lg font-semibold ${
          theme ? "text-gray-900" : "text-white"
        } mb-6`}
      >
        Campaign Milestones
      </h3>
      <div className="space-y-6">
        {milestoneData.map((milestone, index) => (
          <div
            key={index}
            className={`${
              theme ? "bg-gray-50" : "bg-gray-700"
            } rounded-lg p-4 transition-all duration-200 hover:shadow-md`}
          >
            <div className="flex items-start space-x-4">
              <div className="mt-1">{getStatusIcon(milestone.status)}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4
                      className={`font-medium ${
                        theme ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {milestone.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        theme ? "text-gray-500" : "text-gray-300"
                      }`}
                    >
                      {milestone.description}
                    </p>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      theme ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {milestone.amount}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className={theme ? "text-gray-600" : "text-gray-300"}>
                      Progress
                    </span>
                    <span className={theme ? "text-gray-600" : "text-gray-300"}>
                      {milestone.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        milestone.status === "completed"
                          ? "bg-green-500"
                          : milestone.status === "in-progress"
                          ? "bg-blue-500"
                          : "bg-gray-400"
                      }`}
                      style={{ width: `${milestone.progress}%` }}
                    />
                  </div>
                </div>
                <div className="mt-2 text-xs text-right">
                  <span className={theme ? "text-gray-500" : "text-gray-400"}>
                    {milestone.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignMilestones;
