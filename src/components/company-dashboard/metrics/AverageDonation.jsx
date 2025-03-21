import React from "react";
import { useSelector } from "react-redux";
import { FaHandHoldingHeart } from "react-icons/fa";

const AverageDonation = ({ value = "$147" }) => {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`p-4 rounded-lg ${
        theme ? "bg-gray-50" : "bg-gray-700"
      } h-full`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="p-2 bg-purple-100 rounded-lg dark:bg-purple-800/20">
            <FaHandHoldingHeart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <dt
            className={`text-sm font-medium ${
              theme ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Avg. Donation
          </dt>
          <dd className="mt-1 text-lg font-bold text-purple-600 dark:text-purple-400">
            {value}
          </dd>
        </div>
      </div>
    </div>
  );
};

export default AverageDonation;
