import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaDollarSign, FaBullhorn, FaComment, FaHeart } from "react-icons/fa";
import { markAsRead } from "../../redux/features/notificationsSlice";

const NotificationIcon = ({ type }) => {
  switch (type) {
    case "donation":
      return (
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 transition-colors duration-300">
          <FaDollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
      );
    case "milestone":
      return (
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/20 transition-colors duration-300">
          <FaBullhorn className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
      );
    case "comment":
      return (
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 transition-colors duration-300">
          <FaComment className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
      );
    case "impact":
      return (
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-rose-100 dark:bg-rose-900/20 transition-colors duration-300">
          <FaHeart className="h-5 w-5 text-rose-600 dark:text-rose-400" />
        </div>
      );
    default:
      return null;
  }
};

const Notifications = () => {
    const theme = useSelector((state) => state.theme.darkMode);
  const { notifications } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  return (
    <div className={`h-full flex flex-col rounded-xl ${theme ? "bg-white" : "bg-gray-800"} shadow-sm overflow-hidden transition-colors duration-300`}>
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-lg font-semibold ${theme ? "text-gray-900" : "text-white"}`}>
            Recent Notifications
          </h2>
          <span className={`inline-flex items-center justify-center px-2.5 py-1 text-xs font-medium rounded-full ${
            theme ? "bg-gray-100 text-gray-600" : "bg-gray-700 text-gray-300"
          }`}>
            {notifications.filter(n => !n.isRead).length} unread
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleMarkAsRead(notification.id)}
              className={`group flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                notification.isRead
                  ? theme
                    ? "bg-gray-50 hover:bg-gray-100"
                    : "bg-gray-700/50 hover:bg-gray-700"
                  : theme
                  ? "bg-blue-50 hover:bg-blue-100"
                  : "bg-blue-900/20 hover:bg-blue-900/30"
              }`}
            >
              <NotificationIcon type={notification.type} />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <p className={`text-sm font-medium ${theme ? "text-gray-900" : "text-white"} line-clamp-1`}>
                    {notification.title}
                  </p>
                  <span className={`flex-shrink-0 text-xs whitespace-nowrap ${theme ? "text-gray-500" : "text-gray-400"}`}>
                    {new Date(notification.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className={`mt-1 text-sm ${theme ? "text-gray-600" : "text-gray-300"} line-clamp-2`}>
                  {notification.message}
                </p>
                {notification.campaign && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                      theme
                        ? "bg-gray-100 text-gray-600"
                        : "bg-gray-700 text-gray-300"
                    }`}>
                      {notification.campaign}
                    </span>
                  </div>
                )}
              </div>
              {!notification.isRead && (
                <div className="flex-shrink-0">
                  <span className="block h-2.5 w-2.5 bg-[#00bfa5] rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="flex items-center justify-center py-8">
            <p className={`text-sm font-medium ${theme ? "text-gray-500" : "text-gray-400"}`}>
              No notifications yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
