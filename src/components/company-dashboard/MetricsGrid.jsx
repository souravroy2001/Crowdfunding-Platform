import React from "react";
import { useSelector } from "react-redux";
import TotalRaised from "./metrics/TotalRaised";
import Supporters from "./metrics/Supporters";
import DaysLeft from "./metrics/DaysLeft";
import AverageDonation from "./metrics/AverageDonation";

const defaultMetrics = {
    totalRaised: "$124,580",
    supporters: "847",
    daysLeft: "15",
    avgDonation: "$147"
};

const MetricsGrid = ({ metrics = defaultMetrics }) => {
    const theme = useSelector((state) => state.toggleTheme);
    const { totalRaised, supporters, daysLeft, avgDonation } = metrics;

    return (
        <div className={`${theme ? "bg-white" : "bg-gray-800"} rounded-lg shadow-lg p-4 sm:p-6`}>
            <div className="flex flex-col space-y-4">
                <h3 className={`text-lg font-semibold ${theme ? "text-gray-900" : "text-white"}`}>
                    Campaign Overview
                </h3>
                
                <div className="flex flex-wrap gap-4 sm:gap-6">
                    <div className="flex-1 min-w-[240px] transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                        <TotalRaised value={totalRaised} />
                    </div>
                    <div className="flex-1 min-w-[240px] transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                        <Supporters value={supporters} />
                    </div>
                    <div className="flex-1 min-w-[240px] transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                        <DaysLeft value={daysLeft} />
                    </div>
                    <div className="flex-1 min-w-[240px] transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                        <AverageDonation value={avgDonation} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetricsGrid;
