import React from "react";

const FilterOptions = ({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  selectedStatus,
  setSelectedStatus,
  theme,
}) => {
  const categories = [
    "Technology",
    "Art & Design",
    "Games",
    "Music",
    "Film & Video",
    "Fashion Tech",
    "Education",
    "Food Tech",
    "Healthcare",
    "Energy",
    "Robotics"
  ];

  const statuses = ["Active", "Coming Soon", "Ended"];

  const sortOptions = [
    { value: "mostFunded", label: "Most Funded" },
    { value: "newest", label: "Newest" },
    { value: "trending", label: "Trending" },
    { value: "endingSoon", label: "Ending Soon" }
  ];

  return (
    <div className={`p-6 rounded-xl ${
      theme ? "bg-white shadow-lg" : "bg-gray-800 shadow-gray-700/50"
    }`}>
      {/* Campaign Status */}
      <div className="mb-8">
        <h3 className={`text-lg font-semibold mb-4 ${
          theme ? "text-gray-900" : "text-white"
        }`}>
          Campaign Status
        </h3>
        <div className="space-y-3">
          {statuses?.map((status) => (
            <label key={status} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="status"
                value={status}
                checked={selectedStatus === status}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className={`w-4 h-4 ${
                  theme
                    ? "text-[#00bfa5] bg-gray-100 border-gray-300"
                    : "text-[#00bfa5] bg-gray-700 border-gray-600"
                }`}
              />
              <span className={`ml-3 ${
                theme ? "text-gray-700" : "text-gray-300"
              }`}>
                {status}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-8">
        <h3 className={`text-lg font-semibold mb-4 ${
          theme ? "text-gray-900" : "text-white"
        }`}>
          Sort By
        </h3>
        <div className="space-y-3">
          {sortOptions?.map((option) => (
            <label key={option.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="sortBy"
                value={option.value}
                checked={sortBy === option.value}
                onChange={(e) => setSortBy(e.target.value)}
                className={`w-4 h-4 ${
                  theme
                    ? "text-[#00bfa5] bg-gray-100 border-gray-300"
                    : "text-[#00bfa5] bg-gray-700 border-gray-600"
                }`}
              />
              <span className={`ml-3 ${
                theme ? "text-gray-700" : "text-gray-300"
              }`}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className={`text-lg font-semibold mb-4 ${
          theme ? "text-gray-900" : "text-white"
        }`}>
          Categories
        </h3>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={`w-full px-4 py-2 rounded-lg border ${
            theme
              ? "bg-white border-gray-300 text-gray-900"
              : "bg-gray-800 border-gray-700 text-white"
          } focus:outline-none focus:ring-2 focus:ring-[#00bfa5] transition-colors duration-300`}
        >
          <option value="All">All Categories</option>
          {categories?.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
