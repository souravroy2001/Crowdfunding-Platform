import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFlag, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const RecentActivities = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const activities = [
    {
      icon: faPlus,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "New campaign created",
      description: "Save the Ocean Campaign by EcoGroup",
      time: "2 minutes ago",
    },
    {
      icon: faFlag,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      title: "Content reported",
      description: "Inappropriate content in Campaign #1234",
      time: "15 minutes ago",
    },
    {
      icon: faCheck,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Campaign approved",
      description: "Local Community Support Fund",
      time: "1 hour ago",
    },
  ];

  return (
    <div
      className={`${
        theme ? "bg-white text-gray-900" : "bg-gray-800 text-white"
      } rounded-lg shadow`}
    >
      <div className="p-6">
        <h2 className="text-lg font-medium">Recent Activities</h2>
        <div className="mt-4 space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <span
                  className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${activity.iconBg}`}
                >
                  <FontAwesomeIcon
                    icon={activity.icon}
                    className={activity.iconColor}
                  />
                </span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
