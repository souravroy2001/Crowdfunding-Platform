import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaSearch, FaFilter } from "react-icons/fa";
import ProjectCard from "./browse-projects/ProjectCard";

const categories = [
  "All",
  "Technology",
  "Art",
  "Music",
  "Film",
  "Games",
  "Design",
  "Publishing",
  "Food",
  "Fashion",
];

const defaultProjects = [
  {
    id: 1,
    title: "Next-Gen Solar Technology",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60",
    description: "Revolutionary solar panels with 40% more efficiency",
    raised: 124580,
    goal: 250000,
    daysLeft: 45,
    supporters: 847,
  },
  {
    id: 2,
    title: "Eco-Friendly Fashion Line",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60",
    description: "Sustainable clothing made from recycled materials",
    raised: 89750,
    goal: 150000,
    daysLeft: 30,
    supporters: 623,
  },
  {
    id: 3,
    title: "Indie Game Development",
    category: "Games",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=60",
    description: "A unique puzzle game with stunning visuals",
    raised: 45800,
    goal: 100000,
    daysLeft: 60,
    supporters: 342,
  },
];

const BrowseProjects = () => {
  const theme = useSelector((state) => state.toggleTheme);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [projects] = useState(defaultProjects);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${theme ? "bg-gray-50" : "bg-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${theme ? "text-gray-900" : "text-white"}`}>
            Discover Projects
          </h1>
          <p className={`text-lg ${theme ? "text-gray-600" : "text-gray-400"}`}>
            Find and support innovative projects that inspire you
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className={`p-6 rounded-xl ${theme ? "bg-white" : "bg-gray-800"} shadow-sm mb-8`}>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    theme
                      ? "border-gray-300 bg-white text-gray-900"
                      : "border-gray-600 bg-gray-700 text-white"
                  } focus:outline-none focus:ring-2 focus:ring-[#00bfa5]`}
                />
                <FaSearch className={`absolute left-3 top-3 ${theme ? "text-gray-400" : "text-gray-500"}`} />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <FaFilter className={theme ? "text-gray-400" : "text-gray-500"} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`pl-3 pr-8 py-2 rounded-lg border ${
                  theme
                    ? "border-gray-300 bg-white text-gray-900"
                    : "border-gray-600 bg-gray-700 text-white"
                } focus:outline-none focus:ring-2 focus:ring-[#00bfa5]`}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg font-medium ${theme ? "text-gray-900" : "text-white"}`}>
              No projects found matching your criteria
            </p>
            <p className={`mt-2 ${theme ? "text-gray-600" : "text-gray-400"}`}>
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseProjects;
