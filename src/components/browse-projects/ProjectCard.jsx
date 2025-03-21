import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProjectCard = ({ project, isFavorite, onToggleFavorite }) => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.toggleTheme);
  // Get updated project data from Redux store
  const projects = useSelector((state) => state.projects.projects);
  const updatedProject = projects.find(p => p.id === project.id) || project;

  // Calculate campaign status and its color
  let status = "Active";
  let statusColor = "bg-green-500";

  if (updatedProject.daysLeft < 0) {
    status = "Ended";
    statusColor = "bg-red-500";
  } else if (updatedProject.daysLeft > 30) {
    status = "Coming Soon";
    statusColor = "bg-blue-500";
  }

  const progressPercentage = Math.min(
    (updatedProject.raised / updatedProject.goal) * 100,
    100
  );

  const handleDonateClick = (e) => {
    e.preventDefault();
    if (updatedProject.daysLeft > 0) {
      navigate(`/donate/${updatedProject.id}`, { state: { project: updatedProject } });
    }
  };

  return (
    <div
      className={`rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
        theme
          ? "bg-white shadow-lg hover:shadow-xl"
          : "bg-gray-800 shadow-gray-700/50 hover:shadow-gray-600/50"
      }`}
    >
      <div className="relative">
        <img
          src={updatedProject.image}
          alt={updatedProject.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-2 py-1 text-xs text-white rounded-full ${statusColor}`}
          >
            {status}
          </span>
        </div>
        <button
          onClick={() => onToggleFavorite(updatedProject.id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300"
        >
          {isFavorite ? (
            <FaHeart className="text-[#00bfa5]" />
          ) : (
            <FaRegHeart className="text-gray-400" />
          )}
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3
            className={`text-xl font-semibold ${
              theme ? "text-gray-900" : "text-white"
            }`}
          >
            {updatedProject.title}
          </h3>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
              theme
                ? "bg-primary-100 text-primary-800"
                : "bg-primary-900/20 text-primary-300"
            }`}
          >
            {updatedProject.category}
          </span>
        </div>

        <p
          className={`text-sm mb-4 ${
            theme ? "text-gray-600" : "text-gray-400"
          }`}
        >
          {updatedProject.description}
        </p>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
          <div
            className="h-full bg-[#00bfa5] rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className={`text-sm ${theme ? "text-gray-600" : "text-gray-400"}`}>
              Raised
            </p>
            <p
              className={`text-lg font-bold ${
                theme ? "text-gray-900" : "text-white"
              }`}
            >
              ${updatedProject.raised.toLocaleString()}
            </p>
          </div>
          <div>
            <p className={`text-sm ${theme ? "text-gray-600" : "text-gray-400"}`}>
              Goal
            </p>
            <p
              className={`text-lg font-bold ${
                theme ? "text-gray-900" : "text-white"
              }`}
            >
              ${updatedProject.goal.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span
            className={`text-sm ${theme ? "text-gray-600" : "text-gray-400"}`}
          >
            {updatedProject.daysLeft > 0
              ? `${updatedProject.daysLeft} days left`
              : "Campaign ended"}
          </span>
          <button
            onClick={handleDonateClick}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
              updatedProject.daysLeft > 0 && updatedProject.raised < updatedProject.goal
                ? "bg-[#00bfa5] hover:bg-[#009688] text-white"
                : "bg-gray-400 cursor-not-allowed text-white"
            }`}
            disabled={updatedProject.raised >= updatedProject.goal || updatedProject.daysLeft <= 0}
          >
            {updatedProject.raised >= updatedProject.goal ? "Goal Reached!" : updatedProject.daysLeft > 0 ? "Donate Now" : "Ended"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
