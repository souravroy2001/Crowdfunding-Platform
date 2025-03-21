import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const CampaignDetail = () => {
  const { id } = useParams();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="animate-fadeIn">
      <div className={`${
        !isDarkMode ? "bg-gray-800" : "bg-white"
      } rounded-xl shadow-lg transition-colors duration-300 p-6`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-semibold ${
            !isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}>
            Campaign Details
          </h2>
          <Link
            to={`/admin/campaigns/edit/${id}`}
            className={`inline-flex items-center px-4 py-2 rounded-lg ${
              !isDarkMode
                ? "bg-[#bb86fc] hover:bg-[#9c64fb]"
                : "bg-[#00bfa5] hover:bg-[#009688]"
            } text-white transition-colors duration-300`}
          >
            <FontAwesomeIcon icon={faPencilAlt} className="mr-2" />
            Edit Campaign
          </Link>
        </div>
        {/* Campaign details will be implemented here */}
        <p className={`${!isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Detailed campaign information coming soon...
        </p>
      </div>
    </div>
  );
};

export default CampaignDetail;
