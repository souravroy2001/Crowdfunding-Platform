import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditCampaign = () => {
  const { id } = useParams();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="animate-fadeIn">
      <div className={`${
        !isDarkMode ? "bg-gray-800" : "bg-white"
      } rounded-xl shadow-lg transition-colors duration-300 p-6`}>
        <h2 className={`text-2xl font-semibold mb-6 ${
          !isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}>
          Edit Campaign #{id}
        </h2>
        {/* Campaign edit form will be implemented here */}
        <p className={`${!isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Campaign editing form coming soon...
        </p>
      </div>
    </div>
  );
};

export default EditCampaign;
