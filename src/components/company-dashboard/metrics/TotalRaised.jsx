import React from "react";
import { useSelector } from "react-redux";
import { FaChartLine } from "react-icons/fa";

const TotalRaised = ({ value = "$124,580" }) => {
    const theme = useSelector((state) => state.toggleTheme);
    
    return (
        <div className={`p-4 rounded-lg ${theme ? "bg-gray-50" : "bg-gray-700"} h-full`}>
            <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                    <div className={`p-2 rounded-lg ${theme ? "bg-green-100" : "bg-green-800/20"}`}>
                        <FaChartLine className={`h-5 w-5 ${theme ? "text-green-600" : "text-green-400"}`} />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <dt className={`text-sm font-medium ${theme ? "text-gray-500" : "text-gray-400"}`}>
                        Total Raised
                    </dt>
                    <dd className={`mt-1 text-lg font-bold ${theme ? "text-green-600" : "text-green-400"}`}>
                        {value}
                    </dd>
                </div>
            </div>
        </div>
    );
};

export default TotalRaised;
