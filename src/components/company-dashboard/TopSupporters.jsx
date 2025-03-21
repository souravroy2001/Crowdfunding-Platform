import React from "react";
import { useSelector } from "react-redux";
import { FaCrown, FaStar, FaAward } from "react-icons/fa";

const supportersData = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "Tech Entrepreneur",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        amount: "$15,000",
        badge: "Gold Supporter",
        badgeIcon: <FaCrown className="h-4 w-4" />,
        badgeColor: "text-yellow-500",
        badgeBg: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
        id: 2,
        name: "Michael Torres",
        role: "Angel Investor",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5",
        amount: "$12,500",
        badge: "Silver Supporter",
        badgeIcon: <FaStar className="h-4 w-4" />,
        badgeColor: "text-gray-400",
        badgeBg: "bg-gray-50 dark:bg-gray-800/40",
    },
    {
        id: 3,
        name: "Emma Wilson",
        role: "Business Owner",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        amount: "$10,000",
        badge: "Bronze Supporter",
        badgeIcon: <FaAward className="h-4 w-4" />,
        badgeColor: "text-orange-500",
        badgeBg: "bg-orange-50 dark:bg-orange-900/20",
    },
];

const TopSupporters = () => {
    const theme = useSelector((state) => state.toggleTheme);

    return (
        <div
            className={`${theme ? "bg-white" : "bg-gray-800"} rounded-xl shadow-lg`}
        >
            <div className="flex flex-col space-y-4 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                    <h3
                        className={`text-lg font-semibold ${
                            theme ? "text-gray-900" : "text-white"
                        }`}
                    >
                        Top Supporters
                    </h3>
                    <button
                        className={`text-sm font-medium ${
                            theme
                                ? "text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100"
                                : "text-blue-400 hover:text-blue-300 bg-blue-900/20 hover:bg-blue-900/30"
                        } transition-all duration-200`}
                    >
                        View All
                    </button>
                </div>

                <div className="flex flex-col space-y-4">
                    {supportersData.map((supporter) => (
                        <div
                            key={supporter.id}
                            className={`flex items-center p-4 rounded-lg transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                                theme
                                    ? "bg-gray-50 hover:bg-gray-100"
                                    : "bg-gray-700 hover:bg-gray-600"
                            }`}
                        >
                            <img
                                src={supporter.avatar}
                                alt={supporter.name}
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <div className="ml-4 flex-1">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4
                                            className={`font-medium ${
                                                theme ? "text-gray-900" : "text-white"
                                            }`}
                                        >
                                            {supporter.name}
                                        </h4>
                                        <p
                                            className={`text-sm ${
                                                theme ? "text-gray-500" : "text-gray-400"
                                            }`}
                                        >
                                            {supporter.role}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p
                                            className={`font-medium ${
                                                theme ? "text-gray-900" : "text-white"
                                            }`}
                                        >
                                            {supporter.amount}
                                        </p>
                                        <div className="flex items-center mt-1">
                                            <span
                                                className={`mr-1 ${supporter.badgeColor}`}
                                            >
                                                {supporter.badgeIcon}
                                            </span>
                                            <span
                                                className={`text-xs ${
                                                    theme ? "text-gray-500" : "text-gray-400"
                                                }`}
                                            >
                                                {supporter.badge}
                                            </span>
                                        </div>
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

export default TopSupporters;
