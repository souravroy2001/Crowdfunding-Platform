import React from "react";
import { useSelector } from "react-redux";
import { FaUsers } from "react-icons/fa";

const Supporters = ({ value = "847" }) => {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`p-4 rounded-lg ${
        theme ? "bg-gray-50" : "bg-gray-700"
      } h-full`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div
            className={`p-2 rounded-lg ${
              theme ? "bg-blue-100" : "bg-blue-800/20"
            }`}
          >
            <FaUsers
              className={`h-5 w-5 ${theme ? "text-blue-600" : "text-blue-400"}`}
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <dt
            className={`text-sm font-medium ${
              theme ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Supporters
          </dt>
          <dd
            className={`mt-1 text-lg font-bold ${
              theme ? "text-blue-600" : "text-blue-400"
            }`}
          >
            {value}
          </dd>
        </div>
      </div>
    </div>
  );
};

export default Supporters;
