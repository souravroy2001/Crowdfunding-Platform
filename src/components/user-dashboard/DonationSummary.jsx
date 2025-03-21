import React from "react";
import { useSelector } from "react-redux";

const DonationSummary = () => {
    const theme = useSelector((state) => state.theme.darkMode);

  const summary = {
    monthlyTotal: 2500,
    lastMonth: 2000,
    percentageChange: 25,
    yearlyTotal: 15000,
    donationsByCategory: [
      { category: "Environment", amount: 1200, percentage: 48 },
      { category: "Education", amount: 800, percentage: 32 },
      { category: "Healthcare", amount: 500, percentage: 20 },
    ],
    recentDonations: [
      {
        id: 1,
        campaign: "Save the Ocean",
        amount: 500,
        date: "2025-03-20",
        donor: {
          name: "Sarah Johnson",
          avatar: "https://i.pravatar.cc/40?img=1"
        },
      },
      {
        id: 2,
        campaign: "Education for All",
        amount: 300,
        date: "2025-03-18",
        donor: {
          name: "Mike Chen",
          avatar: "https://i.pravatar.cc/40?img=2",
        },
      },
      {
        id: 3,
        campaign: "Save the Ocean",
        amount: 200,
        date: "2025-03-15",
        donor: {
          name: "Emma Wilson",
          avatar: "https://i.pravatar.cc/40?img=3",
        },
      },
    ],
  };

  const getCategoryColor = (category) => {
    if (theme) {
      switch (category) {
        case "Environment":
          return "bg-green-100 text-green-600";
        case "Education":
          return "bg-blue-100 text-blue-600";
        case "Healthcare":
          return "bg-purple-100 text-purple-600";
        default:
          return "bg-gray-100 text-gray-600";
      }
    } else {
      switch (category) {
        case "Environment":
          return "bg-green-900/30 text-green-400";
        case "Education":
          return "bg-blue-900/30 text-blue-400";
        case "Healthcare":
          return "bg-purple-900/30 text-purple-400";
        default:
          return "bg-gray-700 text-gray-400";
      }
    }
  };

  return (
    <div
      className={`rounded-xl transition-all duration-300 animate-fadeIn ${
        theme
          ? "bg-white shadow-md hover:shadow-lg"
          : "bg-gray-800 shadow-md hover:shadow-gray-700/50"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-xl font-semibold ${
              theme ? "text-gray-800" : "text-gray-100"
            }`}
          >
            Donation Summary
          </h2>
          <select
            className={`text-sm rounded-lg px-3 py-1.5 border transition-colors duration-300 ${
              theme
                ? "border-gray-200 bg-gray-50 text-gray-700 hover:border-[#00bfa5]"
                : "border-gray-700 bg-gray-700 text-gray-200 hover:border-[#00bfa5]"
            }`}
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
          </select>
        </div>

        {/* Monthly Stats */}
        <div
          className={`grid grid-cols-2 gap-4 p-4 rounded-lg mb-6 ${
            theme ? "bg-gray-50" : "bg-gray-700"
          }`}
        >
          <div>
            <p
              className={`text-sm mb-1 ${
                theme ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Monthly Total
            </p>
            <h3
              className={`text-2xl font-bold ${
                theme ? "text-[#00bfa5]" : "text-[#00bfa5]"
              }`}
            >
              ${summary.monthlyTotal}
            </h3>
            <div
              className={`inline-flex items-center mt-1 text-sm ${
                summary.percentageChange >= 0
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              <span>{summary.percentageChange >= 0 ? "↑" : "↓"}</span>
              <span className="ml-1">
                {Math.abs(summary.percentageChange)}%
              </span>
              <span
                className={`ml-1 text-xs ${
                  theme ? "text-gray-500" : "text-gray-400"
                }`}
              >
                vs last month
              </span>
            </div>
          </div>
          <div>
            <p
              className={`text-sm mb-1 ${
                theme ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Yearly Total
            </p>
            <h3
              className={`text-2xl font-bold ${
                theme ? "text-gray-800" : "text-gray-100"
              }`}
            >
              ${summary.yearlyTotal}
            </h3>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="mb-6">
          <h3
            className={`text-sm font-medium mb-3 ${
              theme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Distribution by Category
          </h3>
          <div className="space-y-3">
            {summary.donationsByCategory.map((item) => (
              <div key={item.category}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${getCategoryColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        theme ? "text-[#00bfa5]" : "text-[#00bfa5]"
                      }`}
                    >
                      ${item.amount}
                    </span>
                  </div>
                  <span
                    className={`text-xs ${
                      theme ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      theme ? "bg-[#00bfa5]" : "bg-[#00bfa5]"
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Donations */}
        <div>
          <h3
            className={`text-sm font-medium mb-3 ${
              theme ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Recent Donations
          </h3>
          <div className="space-y-3">
            {summary.recentDonations.map((donation) => (
              <div
                key={donation.id}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  theme
                    ? "bg-gray-50 hover:bg-gray-100"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={donation.donor.avatar}
                    alt={donation.donor.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        theme ? "text-gray-800" : "text-gray-100"
                      }`}
                    >
                      {donation.donor.name}
                    </p>
                    <p
                      className={`text-xs ${
                        theme ? "text-[#00bfa5]" : "text-[#00bfa5]"
                      }`}
                    >
                      {donation.campaign}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-medium ${
                      theme ? "text-gray-800" : "text-gray-100"
                    }`}
                  >
                    ${donation.amount}
                  </p>
                  <p
                    className={`text-xs ${
                      theme ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {donation.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`w-full mt-4 py-2 px-4 rounded-lg text-sm font-medium text-center transition-all duration-300 ${
            theme
              ? "text-[#00bfa5] hover:text-[#009688]"
              : "text-[#00bfa5] hover:text-[#009688]"
          }`}
        >
          View Full Report
        </button>
      </div>
    </div>
  );
};

export default DonationSummary;
