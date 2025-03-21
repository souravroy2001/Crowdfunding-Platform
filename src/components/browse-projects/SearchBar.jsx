import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ searchTerm, setSearchTerm, theme }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search projects..."
        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
          theme
            ? "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            : "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
        } focus:outline-none focus:ring-2 focus:ring-[#00bfa5] transition-colors duration-300`}
      />
      <FiSearch
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
          theme ? "text-gray-400" : "text-gray-500"
        }`}
      />
    </div>
  );
};

export default SearchBar;
