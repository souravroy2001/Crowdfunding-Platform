import React, { useMemo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProjectCard = ({ project, isFavorite, onToggleFavorite }) => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.darkMode);
  const projects = useSelector((state) => state.projects.projects);

  // Get updated project data from Redux store
  const updatedProject = useMemo(
    () => projects.find((p) => p.id === project.id) || project,
    [projects, project.id]
  );

  // Determine project status
  const { status, statusColor } = useMemo(() => {
    if (updatedProject.daysLeft < 0)
      return { status: "Ended", statusColor: "bg-red-500" };
    if (updatedProject.daysLeft > 30)
      return { status: "Coming Soon", statusColor: "bg-blue-500" };
    return { status: "Active", statusColor: "bg-green-500" };
  }, [updatedProject.daysLeft]);

  // Calculate donation progress
  const progressPercentage = Math.min(
    (updatedProject.raised / updatedProject.goal) * 100,
    100
  );

  // Handle donate button click
  const handleDonateClick = useCallback(
    (e) => {
      e.preventDefault();
      if (updatedProject.daysLeft > 0) {
        navigate(`/donate/${updatedProject.id}`, {
          state: { project: updatedProject },
        });
      }
    },
    [navigate, updatedProject]
  );

  // Handle favorite toggle
  const handleToggleFavorite = useCallback(
    (e) => {
      e.stopPropagation(); // Prevent event bubbling
      onToggleFavorite(updatedProject.id);
    },
    [onToggleFavorite, updatedProject.id]
  );

  return (
    <div
      className={`rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-101 h-full min-h-[350px] flex flex-col ${
        theme
          ? "bg-white shadow-lg hover:shadow-xl"
          : "bg-gray-800 shadow-gray-700/50 hover:shadow-gray-600/50"
      }`}
    >
      {/* Image Section */}
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
          onClick={handleToggleFavorite}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300"
        >
          {isFavorite ? (
            <FaHeart className="text-[#00bfa5]" />
          ) : (
            <FaRegHeart className="text-gray-400" />
          )}
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex flex-wrap justify-between items-start mb-2 gap-2 sm:gap-4">
          <h3
            className={`text-xl font-semibold truncate max-w-[70%] ${
              theme ? "text-gray-900" : "text-white"
            }`}
          >
            <Link to={`/campaign/${updatedProject.id}`}>
              {" "}
              {updatedProject.title}
            </Link>
          </h3>
          <span
            className={`inline-block px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm ${
              theme
                ? "bg-pink-200 text-pink-900"
                : "bg-blue-800/50 text-blue-300"
            }`}
          >
            {updatedProject.category}
          </span>
        </div>

        <p
          className={`text-sm mb-4 flex-grow ${
            theme ? "text-gray-600" : "text-gray-400"
          }`}
        >
          <Link to={`/campaign/${updatedProject.id}`}>
            {" "}
          {updatedProject.description}
          </Link>
        </p>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
          <div
            className="h-full bg-[#00bfa5] rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Raised & Goal Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p
              className={`text-sm ${theme ? "text-gray-600" : "text-gray-400"}`}
            >
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
            <p
              className={`text-sm ${theme ? "text-gray-600" : "text-gray-400"}`}
            >
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

        {/* Bottom Section */}
        <div className="mt-auto flex justify-between items-center">
          <span
            className={`text-sm ${theme ? "text-gray-600" : "text-gray-400"}`}
          >
            {updatedProject.daysLeft > 0
              ? `${updatedProject.daysLeft} days left`
              : "Campaign ended"}
          </span>
          <button
            onClick={handleDonateClick}
            className={`px-4 py-2 cursor-pointer rounded-lg whitespace-nowrap font-medium transition-colors duration-300 ${
              updatedProject.raised >= updatedProject.goal ||
              updatedProject.daysLeft <= 0
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-[#00bfa5] hover:bg-[#009688] text-white"
            }`}
            disabled={
              updatedProject.raised >= updatedProject.goal ||
              updatedProject.daysLeft <= 0
            }
          >
            {updatedProject.raised >= updatedProject.goal
              ? "Goal Reached!"
              : updatedProject.daysLeft > 0
              ? "Donate Now"
              : "Ended"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
