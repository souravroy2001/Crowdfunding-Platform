import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCampaigns = ({ theme, projects }) => {
  // Get the top 3 projects with highest raised percentage
  const featuredProjects = projects
    .sort((a, b) => (b.raised / b.goal) - (a.raised / a.goal))
    .slice(0, 3);

  return (
    <div className={`w-full mb-8 ${theme ? "bg-white" : "bg-gray-800"} shadow-md rounded-xl p-6`}>
      <h2 className={`text-2xl font-bold mb-6 ${theme ? "text-gray-800" : "text-gray-100"}`}>
        Featured Campaigns
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map(project => (
          <Link
            key={project.id}
            to={`/campaign/${project.id}`}
            className={`group rounded-lg overflow-hidden transition-all duration-300 ${
              theme ? "bg-gray-50 hover:bg-gray-100" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute bottom-0 left-0 right-0 p-4 ${
                theme ? "bg-white/80" : "bg-black/80"
              }`}>
                <h3 className={`text-lg font-semibold ${theme ? "text-gray-800" : "text-gray-100"}`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${theme ? "text-gray-600" : "text-gray-400"}`}>
                  {project.company}
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm font-medium ${theme ? "text-gray-600" : "text-gray-400"}`}>
                  Progress
                </span>
                <span className={`text-sm ${theme ? "text-gray-800" : "text-gray-200"}`}>
                  {Math.round((project.raised / project.goal) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#00bfa5] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(project.raised / project.goal) * 100}%` }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCampaigns;
