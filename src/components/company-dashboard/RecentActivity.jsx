import React from "react";
import { useSelector } from "react-redux";

const defaultActivities = [
    {
        type: "donation",
        user: {
            name: "Sarah Chen",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80",
        },
        amount: "$500",
        message: "Keep up the amazing work!",
        time: "2 hours ago",
        isRecurring: true
    },
    {
        type: "milestone",
        title: "75% Funding Goal Reached!",
        description: "Campaign has reached 75% of its funding goal ($124,580)",
        time: "5 hours ago",
        icon: "flag-checkered",
        color: "blue"
    },
    {
        type: "update",
        title: "New Product Demo",
        description: "Watch our latest product demonstration video showcasing key features",
        time: "1 day ago",
        icon: "video",
        color: "purple"
    },
    {
        type: "donation",
        user: {
            name: "Michael Torres",
            avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80",
        },
        amount: "$1,000",
        message: "Excited to be part of this journey!",
        time: "1 day ago",
        isRecurring: false
    },
    {
        type: "engagement",
        title: "Growing Community",
        description: "Over 500 new followers this week across social platforms",
        time: "2 days ago",
        icon: "users",
        color: "yellow"
    }
];

const RecentActivity = ({ activities = defaultActivities }) => {
    const theme = useSelector((state) => state.toggleTheme);

    const getActivityIcon = (activity) => {
        if (activity.type === "donation") {
            return "hand-holding-usd";
        }
        return activity.icon || "circle";
    };

    const getActivityColor = (activity) => {
        if (activity.type === "donation") {
            return "text-[#15AD4E]";
        }
        switch (activity.color) {
            case "blue":
                return "text-blue-500";
            case "purple":
                return "text-purple-500";
            case "yellow":
                return "text-yellow-500";
            default:
                return "text-gray-500";
        }
    };

    return (
        <div className={`${theme ? "bg-white" : "bg-gray-800"} rounded-lg shadow h-full`}>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className={`text-lg font-semibold ${theme ? "text-gray-900" : "text-white"}`}>
                            Recent Activity
                        </h2>
                        <p className={`text-sm ${theme ? "text-gray-500" : "text-gray-300"} mt-1`}>
                            Latest updates and interactions
                        </p>
                    </div>
                    <button className={`text-sm font-medium ${theme ? "text-gray-600" : "text-gray-300"} hover:underline`}>
                        View all
                    </button>
                </div>

                <div className="space-y-6">
                    {activities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            {activity.type === "donation" ? (
                                <img
                                    src={activity.user.avatar}
                                    alt={activity.user.name}
                                    className="w-8 h-8 rounded-full ring-2 ring-white"
                                />
                            ) : (
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full ${
                                    theme ? "bg-gray-100" : "bg-gray-700"
                                } flex items-center justify-center`}>
                                    <i className={`fas fa-${getActivityIcon(activity)} ${getActivityColor(activity)}`}></i>
                                </div>
                            )}

                            <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium ${theme ? "text-gray-900" : "text-white"}`}>
                                    {activity.type === "donation" ? (
                                        <>
                                            {activity.user.name} donated {activity.amount}
                                            {activity.isRecurring && (
                                                <span className={`ml-2 text-xs ${theme ? "text-gray-500" : "text-gray-400"}`}>
                                                    <i className="fas fa-sync-alt mr-1"></i>
                                                    Recurring
                                                </span>
                                            )}
                                        </>
                                    ) : (
                                        activity.title
                                    )}
                                </p>
                                <p className={`text-sm ${theme ? "text-gray-500" : "text-gray-300"} mt-0.5`}>
                                    {activity.type === "donation" ? activity.message : activity.description}
                                </p>
                                <span className={`text-xs ${theme ? "text-gray-400" : "text-gray-400"} mt-1 block`}>
                                    {activity.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;
