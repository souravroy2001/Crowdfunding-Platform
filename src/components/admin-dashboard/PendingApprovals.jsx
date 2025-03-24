import React from "react";
import { useSelector } from "react-redux";

const PendingApprovals = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const approvals = [
    {
      campaign: "Save the Forest Initiative",
      creator: "Green Earth Foundation",
      status: "Pending",
      submitted: "2 hours ago",
    },
    {
      campaign: "Community Food Bank",
      creator: "Local Help Network",
      status: "Pending",
      submitted: "3 hours ago",
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
          <h2 className="text-lg font-medium">Pending Approvals</h2>
          <button className="bg-[#00bfa5] hover:bg-[#009688] text-white px-4 py-2 rounded-lg transition-colors duration-300">
            View All
          </button>
        </div>
        <div className="mt-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
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
                  Creator
                </th>
                <th
                  className={`px-6 py-3 ${
                    theme ? "bg-white" : "bg-gary-900"
                  } text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                >
                  Status
                </th>
                <th
                  className={`px-6 py-3 ${
                    theme ? "bg-white" : "bg-gary-900"
                  } text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                >
                  Submitted
                </th>
                <th
                  className={`px-6 py-3 ${
                    theme ? "bg-white" : "bg-gary-900"
                  } text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody
              className={`${
                theme ? "bg-white text-gray-900" : "bg-gray-800 text-white"
              } divide-y divide-gray-200 `}
            >
              {approvals.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">
                      {item.campaign}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.creator}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.submitted}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-green-600 hover:text-green-900 mr-2 transition-colors duration-300">
                      Approve
                    </button>
                    <button className="text-red-600 hover:text-red-900 transition-colors duration-300">
                      Reject
                    </button>
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

export default PendingApprovals;
