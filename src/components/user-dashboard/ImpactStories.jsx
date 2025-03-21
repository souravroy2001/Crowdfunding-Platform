import React from "react";
import { useSelector } from "react-redux";

const ImpactStories = () => {
  const theme = useSelector((state) => state.theme);

  const stories = [
    {
      id: 1,
      title: "Ocean Cleanup Success",
      campaign: "Save the Ocean",
      description: "Removed 500kg of plastic waste from coastal areas",
      image: "https://picsum.photos/400/200?random=1",
      date: "2025-03-15",
      impact: {
        metric: "500kg",
        type: "Waste Removed",
        beneficiaries: "1000+ marine species",
      },
      category: "Environment",
    },
    {
      id: 2,
      title: "New School Library",
      campaign: "Education for All",
      description: "Built a library serving 500 students in rural areas",
      image: "https://picsum.photos/400/200?random=2",
      date: "2025-03-10",
      impact: {
        metric: "500+",
        type: "Students Benefited",
        beneficiaries: "3 rural communities",
      },
      category: "Education",
    },
    {
      id: 3,
      title: "Medical Camp Success",
      campaign: "Healthcare Access",
      description: "Provided free medical checkups to underserved communities",
      image: "https://picsum.photos/400/200?random=3",
      date: "2025-03-05",
      impact: {
        metric: "1000+",
        type: "Patients Treated",
        beneficiaries: "5 villages",
      },
      category: "Healthcare",
    },
  ];

  const getCategoryColor = (category) => {
    if (theme) {
      switch (category) {
        case "Environment":
          return "bg-green-100 text-green-600";
        case "Education":
          return "bg-blue-100 text-blue-600";
        case "Healthcare":
          return "bg-purple-100 text-purple-600";
        default:
          return "bg-gray-100 text-gray-600";
      }
    } else {
      switch (category) {
        case "Environment":
          return "bg-green-200/90 text-green-900";
        case "Education":
          return "bg-blue-200/90 text-blue-900";
        case "Healthcare":
          return "bg-purple-200/90 text-purple-900";
        default:
          return "bg-gray-700 text-gray-400";
      }
    }
  };

  return (
    <div
      className={`rounded-xl transition-all duration-300 animate-fadeIn ${
        theme
          ? "bg-white shadow-md hover:shadow-lg"
          : "bg-gray-800 shadow-md hover:shadow-gray-700/50"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-xl font-semibold ${
              theme ? "text-gray-800" : "text-gray-100"
            }`}
          >
            Impact Stories
          </h2>
          <select
            className={`text-sm rounded-lg px-3 py-1.5 border transition-colors duration-300 ${
              theme
                ? "border-gray-200 bg-gray-50 text-gray-700 hover:border-[#00bfa5]"
                : "border-gray-700 bg-gray-700 text-gray-200 hover:border-[#00bfa5]"
            }`}
          >
            <option>All Categories</option>
            <option>Environment</option>
            <option>Education</option>
            <option>Healthcare</option>
          </select>
        </div>

        <div className="space-y-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`overflow-hidden rounded-lg transition-all duration-300 ${
                theme
                  ? "bg-gray-50 hover:bg-gray-100"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              <div className="relative h-48">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm rounded-full ${getCategoryColor(
                      story.category
                    )}`}
                  >
                    {story.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className={`font-semibold mb-1 ${
                        theme ? "text-gray-800" : "text-gray-100"
                      }`}
                    >
                      {story.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        theme ? "text-[#00bfa5]" : "text-[#00bfa5]"
                      }`}
                    >
                      {story.campaign}
                    </p>
                  </div>
                  <p
                    className={`text-xs ${
                      theme ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {story.date}
                  </p>
                </div>

                <p
                  className={`text-sm mb-4 ${
                    theme ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {story.description}
                </p>

                <div
                  className={`p-3 rounded-lg ${
                    theme ? "bg-white" : "bg-gray-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className={`text-2xl font-bold mb-1 ${
                          theme ? "text-[#00bfa5]" : "text-[#00bfa5]"
                        }`}
                      >
                        {story.impact.metric}
                      </p>
                      <p
                        className={`text-xs ${
                          theme ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {story.impact.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-sm font-medium mb-1 ${
                          theme ? "text-gray-800" : "text-gray-100"
                        }`}
                      >
                        Beneficiaries
                      </p>
                      <p
                        className={`text-xs ${
                          theme ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {story.impact.beneficiaries}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`w-full mt-6 mb-0 pb-0 rounded-lg text-sm font-medium text-center transition-all duration-300 ${
            theme
              ? "text-[#00bfa5] hover:text-[#009688]"
              : "text-[#00bfa5] hover:text-[#009688]"
          }`}
        >
          View All Impact Stories
        </button>
      </div>
    </div>
  );
};

export default ImpactStories;
