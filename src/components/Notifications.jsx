import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaDollarSign, FaBullhorn, FaComment } from "react-icons/fa";
import {
    markAsRead,
    markAllAsRead,
    updateFilters,
} from "../../redux/features/notificationsSlice";

const NotificationIcon = ({ type, theme }) => {
    switch (type) {
        case "donation":
            return (
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <FaDollarSign className="text-green-600" />
                </div>
            );
        case "milestone":
            return (
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <FaBullhorn className="text-purple-600" />
                </div>
            );
        case "comment":
            return (
                <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <FaComment className="text-yellow-600" />
                </div>
            );
        default:
            return null;
    }
};

const TimeAgo = ({ time }) => {
    const getTimeAgo = (timestamp) => {
        const seconds = Math.floor((Date.now() - timestamp) / 1000);
        if (seconds < 60) return "Just now";
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        if (days === 1) return "Yesterday";
        return `${days} days ago`;
    };

    return <span className="text-sm text-gray-500">{getTimeAgo(time)}</span>;
};

const Notifications = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.toggleTheme);
    const { notifications, filters } = useSelector((state) => state.notifications);

    const handleMarkAllAsRead = () => {
        dispatch(markAllAsRead());
    };

    const handleCategoryChange = (category) => {
        const updatedCategories = filters.categories.includes(category)
            ? filters.categories.filter((c) => c !== category)
            : [...filters.categories, category];
        dispatch(updateFilters({ categories: updatedCategories }));
    };

    const filteredNotifications = notifications.filter((notification) => {
        if (!filters.categories.includes(notification.category)) return false;
        if (filters.status === "Unread" && notification.isRead) return false;
        if (filters.status === "Read" && !notification.isRead) return false;
        return true;
    });

    const groupedNotifications = filteredNotifications.reduce((groups, notification) => {
        const date = new Date(notification.time).toLocaleDateString();
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(notification);
        return groups;
    }, {});

    return (
        <div className={`min-h-screen mt-[80px] mb-8 ${isLightTheme ? "bg-gray-50" : "bg-gray-900"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Filters Sidebar */}
                    <aside className="lg:w-80 flex-shrink-0">
                        <div className={`sticky top-[100px] rounded-xl shadow-sm overflow-hidden ${isLightTheme ? "bg-white" : "bg-gray-800"
                            }`}>
                            <div className={`p-6 border-b ${isLightTheme ? "border-gray-100" : "border-gray-700"}`}>
                                <h2 className={`text-lg font-semibold ${isLightTheme ? "text-gray-900" : "text-white"}`}>
                                    Filters
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-6">
                                    {/* Categories */}
                                    <div>
                                        <label className={`block text-sm font-medium mb-3 ${isLightTheme ? "text-gray-700" : "text-gray-300"
                                            }`}>
                                            Categories
                                        </label>
                                        <div className="space-y-3">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={filters.categories.length === ["Campaign Updates", "Donations Received", "New Comments"].length}
                                                    onChange={() => {
                                                        const allCategories = ["Campaign Updates", "Donations Received", "New Comments"];
                                                        dispatch(updateFilters({
                                                            categories: filters.categories.length === allCategories.length ? [] : allCategories
                                                        }));
                                                    }}
                                                    className={`rounded border-gray-300 text-[#00bfa5] focus:ring-[#00bfa5] focus:ring-offset-0 ${isLightTheme ? "bg-white" : "bg-gray-700 border-gray-600"
                                                        }`}
                                                />
                                                <span className={`ml-2 text-sm font-medium ${isLightTheme ? "text-gray-900" : "text-white"
                                                    }`}>
                                                    All Categories
                                                </span>
                                            </label>
                                            <div className="ml-6 space-y-3 pt-2">
                                                {["Campaign Updates", "Donations Received", "New Comments"].map((category) => (
                                                    <label key={category} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={filters.categories.includes(category)}
                                                            onChange={() => handleCategoryChange(category)}
                                                            className={`rounded border-gray-300 text-[#00bfa5] focus:ring-[#00bfa5] focus:ring-offset-0 ${isLightTheme ? "bg-white" : "bg-gray-700 border-gray-600"
                                                                }`}
                                                        />
                                                        <span className={`ml-2 text-sm ${isLightTheme ? "text-gray-600" : "text-gray-300"
                                                            }`}>
                                                            {category}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date Range */}
                                    <div>
                                        <label className={`block text-sm font-medium mb-2 ${isLightTheme ? "text-gray-700" : "text-gray-300"
                                            }`}>
                                            Date Range
                                        </label>
                                        <select
                                            value={filters.dateRange}
                                            onChange={(e) => dispatch(updateFilters({ dateRange: e.target.value }))}
                                            className={`w-full rounded-lg border py-2 px-3 text-sm focus:ring-[#00bfa5] focus:border-[#00bfa5] focus:ring-offset-0 ${isLightTheme
                                                    ? "border-gray-300 bg-white text-gray-900"
                                                    : "border-gray-600 bg-gray-700 text-white"
                                                }`}
                                        >
                                            <option>Last 7 days</option>
                                            <option>Last 30 days</option>
                                            <option>Last 3 months</option>
                                            <option>All time</option>
                                        </select>
                                    </div>

                                    {/* Status */}
                                    <div>
                                        <label className={`block text-sm font-medium mb-2 ${isLightTheme ? "text-gray-700" : "text-gray-300"
                                            }`}>
                                            Status
                                        </label>
                                        <select
                                            value={filters.status}
                                            onChange={(e) => dispatch(updateFilters({ status: e.target.value }))}
                                            className={`w-full rounded-lg border py-2 px-3 text-sm focus:ring-[#00bfa5] focus:border-[#00bfa5] focus:ring-offset-0 ${isLightTheme
                                                    ? "border-gray-300 bg-white text-gray-900"
                                                    : "border-gray-600 bg-gray-700 text-white"
                                                }`}
                                        >
                                            <option>All</option>
                                            <option>Unread</option>
                                            <option>Read</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Notifications List */}
                    <div className="lg:flex-1">
                        <div className={`rounded-xl shadow-sm overflow-hidden ${isLightTheme ? "bg-white" : "bg-gray-800"
                            }`}>
                            <div className="divide-y divide-gray-200">
                                {Object.entries(groupedNotifications).map(([date, notifications]) => (
                                    <React.Fragment key={date}>
                                        <div className={`p-6 ${isLightTheme ? "bg-gray-50" : "bg-gray-700"} flex items-center justify-between`}>
                                            <div className="flex items-center space-x-2">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${date === new Date().toLocaleDateString()
                                                        ? "bg-blue-100 text-blue-800"
                                                        : "bg-gray-100 text-gray-800"
                                                    }`}>
                                                    {date === new Date().toLocaleDateString()
                                                        ? "Today"
                                                        : date === new Date(Date.now() - 86400000).toLocaleDateString()
                                                            ? "Yesterday"
                                                            : date}
                                                </span>
                                            </div>
                                        </div>

                                        {notifications.map((notification) => (
                                            <div
                                                key={notification.id}
                                                className={`p-6 hover:bg-gray-50 ${isLightTheme ? "" : "hover:bg-gray-700"
                                                    }`}
                                            >
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <NotificationIcon type={notification.type} theme={isLightTheme} />
                                                    </div>
                                                    <div className="ml-4 flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <p className={`text-sm font-medium ${isLightTheme ? "text-gray-900" : "text-white"
                                                                }`}>
                                                                {notification.title}
                                                            </p>
                                                            <TimeAgo time={notification.time} />
                                                        </div>
                                                        <p className={`mt-1 text-sm ${isLightTheme ? "text-gray-500" : "text-gray-400"
                                                            }`}>
                                                            {notification.message}
                                                        </p>
                                                        <div className="mt-2">
                                                            <button
                                                                onClick={() => dispatch(markAsRead(notification.id))}
                                                                className={`rounded-lg text-[#00bfa5] hover:bg-[#00bfa5] hover:text-white border border-[#00bfa5] px-3 py-1 text-xs font-medium transition-colors duration-200 ${isLightTheme ? "" : "border-opacity-50"
                                                                    }`}
                                                            >
                                                                {notification.actionLabel}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {!notification.isRead && (
                                                        <div className="ml-4 flex-shrink-0">
                                                            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
