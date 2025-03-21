import React from "react";
import { useSelector } from "react-redux";
import { FaHandHoldingHeart, FaCommentDots, FaTrophy, FaShare } from "react-icons/fa";

const defaultActivities = [
  {
    id: 1,
    type: "donation",
    title: "Made a Donation",
    description: "You donated $50 to Clean Energy Initiative",
    time: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    campaign: "Clean Energy Initiative",
  },
  {
    id: 2,
    type: "comment",
    title: "New Comment",
    description: "You commented on Solar Power Project",
    time: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    campaign: "Solar Power Project",
  },
  {
    id: 3,
    type: "achievement",
    title: "Achievement Unlocked",
    description: "First-time supporter badge earned",
    time: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
  },
  {
    id: 4,
    type: "share",
    title: "Campaign Shared",
    description: "You shared Ocean Cleanup Campaign",
    time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
    campaign: "Ocean Cleanup Campaign",
  },
];

const ActivityIcon = ({ type }) => {
  switch (type) {
    case "donation":
      return (
        <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center transition-colors duration-300">
          <FaHandHoldingHeart className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
      );
    case "comment":
      return (
        <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center transition-colors duration-300">
          <FaCommentDots className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
      );
    case "achievement":
      return (
        <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center transition-colors duration-300">
          <FaTrophy className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
      );
    case "share":
      return (
        <div className="h-10 w-10 rounded-full bg-rose-100 dark:bg-rose-900/20 flex items-center justify-center transition-colors duration-300">
          <FaShare className="h-5 w-5 text-rose-600 dark:text-rose-400" />
        </div>
      );
    default:
      return null;
  }
};

const formatTimeAgo = (timestamp) => {
  const now = Date.now();
  const diff = now - new Date(timestamp).getTime();
  
  const minutes = Math.floor(diff / (1000 * 60));
  if (minutes < 60) return `${minutes}m ago`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  
  return new Date(timestamp).toLocaleDateString();
};

const RecentActivity = () => {
  const theme = useSelector((state) => state.toggleTheme);
  const [activities] = React.useState(defaultActivities);

  return (
    <div className={`rounded-xl ${theme ? "bg-white" : "bg-gray-800"} shadow-sm overflow-hidden transition-colors duration-300`}>
      <div className="p-6">
        <h2 className={`text-lg font-semibold mb-6 ${theme ? "text-gray-900" : "text-white"}`}>
          Recent Activity
        </h2>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`flex items-start space-x-4 p-4 rounded-lg transition-colors duration-300 ${
                theme ? "bg-gray-50 hover:bg-gray-100" : "bg-gray-700/50 hover:bg-gray-700"
              }`}
            >
              <ActivityIcon type={activity.type} />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <p className={`text-sm font-medium ${theme ? "text-gray-900" : "text-white"}`}>
                    {activity.title}
                  </p>
                  <span className={`text-xs ${theme ? "text-gray-500" : "text-gray-400"} whitespace-nowrap ml-4`}>
                    {formatTimeAgo(activity.time)}
                  </span>
                </div>
                <p className={`mt-1 text-sm ${theme ? "text-gray-600" : "text-gray-300"} line-clamp-2`}>
                  {activity.description}
                </p>
                {activity.campaign && (
                  <div className="mt-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                      theme
                        ? "bg-gray-100 text-gray-600"
                        : "bg-gray-700 text-gray-300"
                    }`}>
                      {activity.campaign}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {activities.length === 0 && (
          <div className="text-center py-6">
            <p className={`text-sm font-medium ${theme ? "text-gray-500" : "text-gray-400"}`}>
              No recent activity
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentActivity;
