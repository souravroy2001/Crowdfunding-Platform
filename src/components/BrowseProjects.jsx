import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProjectCard from "./browse-projects/ProjectCard";
import { toggleFavorite } from "../redux/features/favoritesSlice";
import { useSelector, useDispatch } from "react-redux";

const BrowseProjects = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const projectsFromRedux = useSelector((state) => state.projects.projects);
  const favoriteProjects = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  // Extract unique categories dynamically
  const categories = [
    "All",
    ...new Set(projectsFromRedux.map((p) => p.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [statusFilters, setStatusFilters] = useState({
    active: false,
    comingSoon: false,
    ended: false,
  });
  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  // Handle toggle favorite using Redux
  const onToggleFavorite = (projectId) => {
    dispatch(toggleFavorite(projectId));
  };

  // Filter projects based on category, search query, and status
  const filteredProjects = projectsFromRedux.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      (!statusFilters.active || project.status === "Active") &&
      (!statusFilters.comingSoon || project.status === "Coming Soon") &&
      (!statusFilters.ended || project.status === "Ended");
    return matchesCategory && matchesSearch && matchesStatus;
  });

  // Sort Projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "Most Funded") return b.funding - a.funding;
    if (sortBy === "Trending") return b.trendingScore - a.trendingScore;
    if (sortBy === "Ending Soon")
      return new Date(a.endDate) - new Date(b.endDate);
    return new Date(b.startDate) - new Date(a.startDate); // Default: Newest
  });

  const featuredProjects = sortedProjects.filter((project) => project.featured);

  // Pagination Logic
  const totalPages = Math.ceil(sortedProjects.length / perPage);
  const displayedProjects = sortedProjects.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div
      className={`min-h-screen mt-[80px] ${
        theme ? "bg-gray-50" : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={`text-4xl font-bold mb-4 ${
              theme ? "text-gray-900" : "text-white"
            }`}
          >
            Discover Projects
          </h1>
          <p className={`text-lg ${theme ? "text-gray-600" : "text-gray-400"}`}>
            Find and support innovative projects that inspire you
          </p>
        </div>

        {/* Featured Campaigns */}
        <div className="mb-12">
          <h2
            className={`text-2xl font-semibold mb-4 ${
              theme ? "text-gray-900" : "text-white"
            }`}
          >
            Featured Campaigns
          </h2>
          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No featured campaigns available.</p>
          )}
        </div>

        {/* Filters & All Campaigns */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <aside
            className={`md:w-1/4 p-6 rounded-xl h-fit shadow-sm ${
              theme ? "bg-white text-gray-900" : "bg-gray-800 text-white"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#00bfa5] ${
                  theme
                    ? "border-gray-300 bg-white text-gray-900"
                    : "border-gray-600 bg-gray-700 text-white"
                }`}
              />
              <FaSearch
                className={`absolute left-3 top-3 ${
                  theme ? "text-gray-400" : "text-gray-300"
                }`}
              />
            </div>
            <label
              className={`block mt-4 text-sm font-medium ${
                theme ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`w-full mt-1 p-2 border rounded-lg ${
                theme
                  ? "border-gray-300 bg-white text-gray-900"
                  : "border-gray-600 bg-gray-700 text-white"
              }`}
            >
              <option>Newest</option>
              <option>Most Funded</option>
              <option>Trending</option>
              <option>Ending Soon</option>
            </select>
            <label
              className={`block mt-4 text-sm font-medium ${
                theme ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`w-full mt-1 p-2 border rounded-lg ${
                theme
                  ? "border-gray-300 bg-white text-gray-900"
                  : "border-gray-600 bg-gray-700 text-white"
              }`}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <div className="mt-4">
              <label
                className={`block text-sm font-medium mb-2 ${
                  theme ? "text-gray-700" : "text-gray-300"
                }`}
              >
                Campaign Status
              </label>
              {Object.keys(statusFilters).map((key) => (
                <div key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={statusFilters[key]}
                    onChange={() =>
                      setStatusFilters({
                        ...statusFilters,
                        [key]: !statusFilters[key],
                      })
                    }
                    className={`mr-2 border ${
                      theme
                        ? "border-gray-300 bg-white text-gray-900"
                        : "border-gray-600 bg-gray-700 text-white"
                    }`}
                  />
                  <span className={theme ? "text-gray-900" : "text-white"}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </aside>

          {/* All Campaigns */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2
                className={`text-2xl font-semibold ${
                  theme ? "text-gray-900" : "text-white"
                }`}
              >
                All Campaigns
              </h2>
              <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className={`border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#00bfa5] ${
                  theme
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
              >
                <option value="6">6 per page</option>
                <option value="12">12 per page</option>
                <option value="18">18 per page</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isFavorite={favoriteProjects.includes(project.id)}
                  onToggleFavorite={() => onToggleFavorite(project.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseProjects;
