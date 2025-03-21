import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CreateCampaign = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link
          to="/admin/campaigns"
          className={`mr-4 p-2 rounded-lg ${
            !isDarkMode
              ? 'hover:bg-gray-700/50 text-gray-300'
              : 'hover:bg-gray-100 text-gray-600'
          } transition-colors duration-300`}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2 className={`text-2xl font-bold ${
          !isDarkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          Create New Campaign
        </h2>
      </div>

      {/* Form */}
      <div className={`rounded-xl ${
        !isDarkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-lg p-6`}>
        <form className="space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className={`block text-sm font-medium mb-2 ${
                !isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Campaign Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className={`w-full px-4 py-2 rounded-lg ${
                !isDarkMode
                  ? 'bg-gray-700/50 focus:bg-gray-700 text-gray-100 border-gray-600'
                  : 'bg-white focus:bg-gray-50 text-gray-900 border-gray-200'
              } border focus:outline-none focus:ring-2 ${
                !isDarkMode ? 'focus:ring-[#bb86fc]' : 'focus:ring-[#00bfa5]'
              } transition-colors duration-300`}
              placeholder="Enter campaign title"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className={`block text-sm font-medium mb-2 ${
                !isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className={`w-full px-4 py-2 rounded-lg ${
                !isDarkMode
                  ? 'bg-gray-700/50 focus:bg-gray-700 text-gray-100 border-gray-600'
                  : 'bg-white focus:bg-gray-50 text-gray-900 border-gray-200'
              } border focus:outline-none focus:ring-2 ${
                !isDarkMode ? 'focus:ring-[#bb86fc]' : 'focus:ring-[#00bfa5]'
              } transition-colors duration-300`}
              placeholder="Enter campaign description"
            />
          </div>

          {/* Goal Amount */}
          <div>
            <label
              htmlFor="goal"
              className={`block text-sm font-medium mb-2 ${
                !isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Goal Amount ($)
            </label>
            <input
              type="number"
              id="goal"
              name="goal"
              className={`w-full px-4 py-2 rounded-lg ${
                !isDarkMode
                  ? 'bg-gray-700/50 focus:bg-gray-700 text-gray-100 border-gray-600'
                  : 'bg-white focus:bg-gray-50 text-gray-900 border-gray-200'
              } border focus:outline-none focus:ring-2 ${
                !isDarkMode ? 'focus:ring-[#bb86fc]' : 'focus:ring-[#00bfa5]'
              } transition-colors duration-300`}
              placeholder="Enter goal amount"
            />
          </div>

          {/* End Date */}
          <div>
            <label
              htmlFor="endDate"
              className={`block text-sm font-medium mb-2 ${
                !isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className={`w-full px-4 py-2 rounded-lg ${
                !isDarkMode
                  ? 'bg-gray-700/50 focus:bg-gray-700 text-gray-100 border-gray-600'
                  : 'bg-white focus:bg-gray-50 text-gray-900 border-gray-200'
              } border focus:outline-none focus:ring-2 ${
                !isDarkMode ? 'focus:ring-[#bb86fc]' : 'focus:ring-[#00bfa5]'
              } transition-colors duration-300`}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className={`block text-sm font-medium mb-2 ${
                !isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Campaign Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className={`w-full px-4 py-2 rounded-lg ${
                !isDarkMode
                  ? 'bg-gray-700/50 focus:bg-gray-700 text-gray-100 border-gray-600'
                  : 'bg-white focus:bg-gray-50 text-gray-900 border-gray-200'
              } border focus:outline-none focus:ring-2 ${
                !isDarkMode ? 'focus:ring-[#bb86fc]' : 'focus:ring-[#00bfa5]'
              } transition-colors duration-300`}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`px-6 py-2 rounded-lg ${
                !isDarkMode
                  ? 'bg-[#bb86fc] hover:bg-[#9c64fb]'
                  : 'bg-[#00bfa5] hover:bg-[#009688]'
              } text-white transition-colors duration-300`}
            >
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
