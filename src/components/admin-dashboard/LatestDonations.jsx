import React from "react";
import { useSelector } from "react-redux";

const LatestDonations = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const donations = [
    {
      donor: "John Smith",
      campaign: "Save the Ocean Campaign",
      amount: "$500",
      date: "Just now",
    },
    {
      donor: "Sarah Johnson",
      campaign: "Local Community Support",
      amount: "$1,000",
      date: "1 hour ago",
    },
  ];

  return (
    <div
      className={`${
        theme ? "bg-white text-gray-900" : "bg-gray-800 text-white"
      } rounded-lg shadow`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Latest Donations</h2>
          <button className="bg-[#00bfa5] hover:bg-[#009688] text-white px-4 py-2 rounded-lg transition-colors duration-300">
            View All
          </button>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  className={`px-6 py-3 ${
                    theme ? "bg-white" : "bg-gary-900"
                  } text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                >
                  Donor
                </th>
                <th
                  className={`px-6 py-3 ${
                    theme ? "bg-white" : "bg-gary-900"
                  } text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                >
                  Campaign
                </th>
                <th
                  className={`px-6 py-3 ${
                    theme ? "bg-white" : "bg-gary-900"
                  } text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                >
                  Amount
                </th>
                <th
                  className={`px-6 py-3 ${
                    theme ? "bg-white" : "bg-gary-900"
                  } text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody
              className={`${
                theme ? "bg-white text-gray-900" : "bg-gray-800 text-white"
              } divide-y divide-gray-200 `}
            >
              {donations.map((donation, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">{donation.donor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {donation.campaign}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm ">{donation.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {donation.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestDonations;
