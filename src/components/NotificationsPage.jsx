import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaDollarSign,
  FaBullhorn,
  FaComment,
  FaBell,
  FaFilter,
  FaEye,
  FaEyeSlash,
  FaCheck,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  markAsRead,
  updateFilters,
} from "../redux/features/notificationsSlice";
import Navbar from "./Navbar";

const NotificationIcon = ({ type }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const iconConfig = {
    donation: {
      icon: <FaDollarSign />,
      className: darkMode
        ? "text-green-600 bg-green-100"
        : "text-green-400 bg-green-900 bg-opacity-30",
    },
    milestone: {
      icon: <FaBullhorn />,
      className: darkMode
        ? "text-blue-600 bg-blue-100"
        : "text-blue-400 bg-blue-900 bg-opacity-30",
    },
    comment: {
      icon: <FaComment />,
      className: darkMode
        ? "text-amber-600 bg-amber-100"
        : "text-amber-400 bg-amber-900 bg-opacity-30",
    },
  };

  const config = iconConfig[type] || {
    icon: null,
    className: darkMode
      ? "bg-gray-100 text-gray-500"
      : "bg-gray-700 text-gray-400",
  };

  return (
    <div
      className={`h-10 w-10 rounded-full flex items-center justify-center ${config.className}`}
    >
      {config.icon}
    </div>
  );
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
    return days === 1 ? "Yesterday" : `${days} days ago`;
  };

  return (
    <span className="text-sm text-gray-500 font-medium">
      {getTimeAgo(time)}
    </span>
  );
};

const Badge = ({ count }) => {
  if (!count) return null;
  return (
    <span className="absolute left-73 top-25 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
      {count > 99 ? "99+" : count}
    </span>
  );
};

const NotificationsPage = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { notifications, filters } = useSelector(
    (state) => state.notifications
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const filteredNotifications = notifications.filter(
    ({ category, isRead }) =>
      filters.categories.includes(category) &&
      (filters.status === "All" ||
        (filters.status === "Unread" && !isRead) ||
        (filters.status === "Read" && isRead))
  );

  const groupedNotifications = filteredNotifications.reduce(
    (groups, notification) => {
      const date = new Date(notification.time).toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      if (!groups[date]) groups[date] = [];
      groups[date].push(notification);
      return groups;
    },
    {}
  );

  const handleMarkAllAsRead = () => {
    filteredNotifications
      .filter((n) => !n.isRead)
      .forEach((n) => dispatch(markAsRead(n.id)));
  };

  const FiltersSidebar = ({ isMobile = false }) => (
    <div
      className={`rounded-xl ${
        !darkMode ? "bg-gray-800" : "bg-white"
      } p-6 shadow-sm ${isMobile ? "" : "sticky top-[100px]"}`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2
          className={`text-lg font-semibold ${
            !darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Filters
        </h2>
        {isMobile && (
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="text-gray-500"
          >
            ✕
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Status Filter */}
        <div>
          <h3
            className={`text-sm font-medium ${
              !darkMode ? "text-gray-300" : "text-gray-700"
            } mb-3`}
          >
            Status
          </h3>
          <div className="flex flex-wrap gap-2">
            {["All", "Unread", "Read"].map((status) => (
              <button
                key={status}
                onClick={() => dispatch(updateFilters({ status }))}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  filters.status === status
                    ? !darkMode
                      ? "bg-blue-900 bg-opacity-50 text-blue-200"
                      : "bg-blue-100 text-blue-800"
                    : !darkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {status === "Unread" && (
                  <FaEyeSlash className="inline-block mr-1.5 text-xs" />
                )}
                {status === "Read" && (
                  <FaEye className="inline-block mr-1.5 text-xs" />
                )}
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Filter */}
        <div>
          <h3
            className={`text-sm font-medium ${
              !darkMode ? "text-gray-300" : "text-gray-700"
            } mb-3`}
          >
            Categories
          </h3>
          <div className="space-y-3">
            {[
              {
                id: "Campaign Updates",
                icon: (
                  <FaBullhorn
                    className={!darkMode ? "text-blue-400" : "text-blue-500"}
                  />
                ),
              },
              {
                id: "Donations Received",
                icon: (
                  <FaDollarSign
                    className={!darkMode ? "text-green-400" : "text-green-500"}
                  />
                ),
              },
              {
                id: "New Comments",
                icon: (
                  <FaComment
                    className={!darkMode ? "text-amber-400" : "text-amber-500"}
                  />
                ),
              },
            ].map((category) => (
              <label
                key={category.id}
                className={`flex items-center ${
                  !darkMode ? "text-gray-300" : "text-gray-700"
                } cursor-pointer group`}
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.id)}
                  onChange={() => {
                    dispatch(
                      updateFilters({
                        categories: filters.categories.includes(category.id)
                          ? filters.categories.filter((c) => c !== category.id)
                          : [...filters.categories, category.id],
                      })
                    );
                  }}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 mr-3 flex items-center justify-center rounded border ${
                    filters.categories.includes(category.id)
                      ? "bg-blue-600 border-blue-600"
                      : !darkMode
                      ? "border-gray-600 group-hover:border-blue-500"
                      : "border-gray-300 group-hover:border-blue-400"
                  }`}
                >
                  {filters.categories.includes(category.id) && (
                    <FaCheck className="text-white text-xs" />
                  )}
                </div>
                <span className="flex items-center gap-2">
                  {category.icon}
                  {category.id}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen pt-20 ${
        !darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Navbar />
      {/* Mobile Filters Overlay */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={`fixed inset-y-0 left-0 z-50 w-full max-w-xs p-4 ${
                !darkMode ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              <FiltersSidebar isMobile={true} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <h1
            className={`text-2xl font-bold ${
              !darkMode ? "text-white" : "text-gray-900"
            } flex items-center`}
          >
            <FaBell className="mr-3 text-blue-500" />
            Notifications
            <Badge count={unreadCount} />
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={handleMarkAllAsRead}
              disabled={!filteredNotifications.some((n) => !n.isRead)}
              className={`text-sm font-medium ${
                !darkMode
                  ? "text-[#000] bg-gray-100 p-3 rounded-2xl hover:text-[#000] disabled:text-gray-600"
                  : "text-[#fff] bg-gray-900 p-3 rounded-2xl hover:text-[#fff] disabled:text-gray-400"
              } disabled:cursor-not-allowed hidden sm:block`}
            >
              Mark all as read
            </button>

            <button
              onClick={() => setMobileFiltersOpen(true)}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg shadow-sm border hover:bg-opacity-90 lg:hidden ${
                !darkMode
                  ? "bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              <FaFilter />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 pb-12">
          {/* Desktop Filters Sidebar */}
          <aside className="lg:w-80 hidden lg:block">
            <FiltersSidebar />
          </aside>

          {/* Notifications List */}
          <div className="flex-1">
            {filteredNotifications.length === 0 ? (
              <div
                className={`flex flex-col items-center justify-center ${
                  !darkMode ? "bg-gray-800" : "bg-white"
                } rounded-xl shadow-sm p-12 text-center`}
              >
                <div
                  className={`w-14 h-16 ${
                    !darkMode ? "bg-gray-700" : "bg-gray-100"
                  } rounded-full flex items-center justify-center mb-4`}
                >
                  <FaBell className="text-gray-400 text-xl" />
                </div>
                <h3
                  className={`text-lg font-medium ${
                    !darkMode ? "text-white" : "text-gray-900"
                  } mb-1`}
                >
                  No notifications
                </h3>
                <p className="text-gray-500 max-w-md">
                  {filters.status !== "All" || filters.categories.length < 3
                    ? "Try changing your filters to see more notifications."
                    : "You're all caught up! Check back later for new updates."}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <button
                  onClick={handleMarkAllAsRead}
                  disabled={!filteredNotifications.some((n) => !n.isRead)}
                  className={`w-full py-3 text-sm font-medium text-center rounded-lg disabled:cursor-not-allowed sm:hidden ${
                    !darkMode
                      ? "bg-gray-800 text-[#00a392] hover:bg-gray-700 disabled:text-gray-600 disabled:bg-gray-800"
                      : "bg-blue-50 text-[#00a392] hover:bg-blue-100 disabled:text-gray-400 disabled:bg-gray-100"
                  }`}
                >
                  Mark all as read
                </button>

                {Object.entries(groupedNotifications).map(
                  ([date, notifications]) => (
                    <div
                      key={date}
                      className={`${
                        !darkMode ? "bg-gray-800" : "bg-white"
                      } rounded-xl shadow-sm`}
                    >
                      <div
                        className={`px-6 py-3 ${
                          !darkMode
                            ? "bg-gray-800 border-gray-700"
                            : "bg-gray-50 border-gray-200"
                        } border-b`}
                      >
                        <div
                          className={`text-sm font-medium ${
                            !darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {date}
                        </div>
                      </div>
                      <div
                        className={`divide-y ${
                          !darkMode ? "divide-gray-700" : "divide-gray-200"
                        }`}
                      >
                        {notifications.map((notification) => (
                          <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex items-start gap-4 p-5 transition-colors ${
                              !notification.isRead
                                ? !darkMode
                                  ? "bg-blue-900 bg-opacity-20"
                                  : "bg-blue-50"
                                : ""
                            }`}
                          >
                            <NotificationIcon type={notification.category} />
                            <div className="flex-1 min-w-0">
                              <p
                                className={`${
                                  !darkMode ? "text-white" : "text-gray-900"
                                } ${
                                  !notification.isRead ? "font-medium" : ""
                                } break-words`}
                              >
                                {notification.message}
                              </p>
                              <div className="flex items-center mt-1 flex-wrap">
                                <TimeAgo time={notification.time} />
                                {!notification.isRead && (
                                  <span
                                    className={`inline-flex ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                                      !darkMode
                                        ? "bg-blue-900 text-blue-200"
                                        : "bg-blue-100 text-blue-800"
                                    }`}
                                  >
                                    New
                                  </span>
                                )}
                              </div>
                            </div>
                            {!notification.isRead && (
                              <button
                                onClick={() =>
                                  dispatch(markAsRead(notification.id))
                                }
                                className={`mt-1 p-1.5 rounded-full transition-colors shrink-0 ${
                                  !darkMode
                                    ? "text-gray-400 hover:text-gray-200 hover:bg-gray-700"
                                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                }`}
                                aria-label="Mark as read"
                              >
                                <FaCheck className="w-4 h-4" />
                              </button>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
