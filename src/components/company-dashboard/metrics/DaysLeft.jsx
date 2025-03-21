import React from "react";
import { useSelector } from "react-redux";
import { FaRegClock } from "react-icons/fa";

const DaysLeft = ({ value = "15" }) => {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`p-4 rounded-lg ${
        theme ? "bg-gray-50" : "bg-gray-700"
      } h-full`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="p-2 bg-orange-100 rounded-lg dark:bg-orange-800/20">
            <FaRegClock className="h-5 w-5 text-orange-600 dark:text-orange-400" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <dt
            className={`text-sm font-medium ${
              theme ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Days Left
          </dt>
          <dd className="mt-1 text-lg font-bold text-orange-600 dark:text-orange-400">
            {value}
          </dd>
        </div>
      </div>
    </div>
  );
};

export default DaysLeft;
