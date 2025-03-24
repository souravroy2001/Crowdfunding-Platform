import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CommunityGuidelines = () => {
  const theme = useSelector((state) => state.theme.darkMode); // true = light mode, false = dark mode

  const backgroundColor = theme ? "bg-[#e9ebef]" : "bg-[#1f2937]";
  const textColor = theme ? "text-gray-900" : "text-white";
  const cardBackgroundColor = theme ? "bg-white" : "bg-[#101828]";
  const cardTextColor = theme ? "text-gray-600" : "text-gray-300";
  const buttonBackgroundColor = theme ? "bg-custom" : "bg-[#1f2937]";
  const buttonTextColor = theme ? "text-white" : "text-white";

  return (
    <main className={`${backgroundColor} mt-20 font-['Inter'] min-h-screen`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold ${textColor} mb-4`}>
            Community & Campaign Guidelines
          </h1>
          <p className={`text-xl ${cardTextColor} max-w-3xl mx-auto`}>
            Ensure your campaign aligns with FundHive's policies and best
            practices for a smooth experience.
          </p>
        </div>

        {/* Recommended Practices and Prohibited Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Recommended Practices */}
          <div className={`${cardBackgroundColor} rounded-lg shadow-sm p-8`}>
            <h2
              className={`text-2xl font-semibold ${textColor} mb-6 flex items-center`}
            >
              <i className="fas fa-check-circle text-green-500 mr-3"></i>
              Recommended Practices
            </h2>
            <ul className="space-y-4">
              {[
                "Provide clear, detailed project descriptions with realistic goals and timelines",
                "Maintain regular communication with your backers through updates",
                "Set achievable funding goals with transparent budget breakdowns",
                "Include high-quality images and videos of your project",
                "Respond promptly to backer questions and concerns",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span className={cardTextColor}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prohibited Actions */}
          <div className={`${cardBackgroundColor} rounded-lg shadow-sm p-8`}>
            <h2
              className={`text-2xl font-semibold ${textColor} mb-6 flex items-center`}
            >
              <i className="fas fa-times-circle text-red-500 mr-3"></i>
              Prohibited Actions
            </h2>
            <ul className="space-y-4">
              {[
                "Misrepresenting project details or making false promises",
                "Promoting illegal activities or prohibited items",
                "Using copyrighted material without permission",
                "Creating multiple accounts for the same project",
                "Engaging in harassment or discriminatory behavior",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-times text-red-500 mt-1 mr-3"></i>
                  <span className={cardTextColor}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Eligibility Checklist */}
        <div
          className={`${cardBackgroundColor} rounded-lg shadow-sm p-8 mb-16`}
        >
          <h2 className={`text-2xl font-semibold ${textColor} mb-6`}>
            Eligibility Checklist
          </h2>
          <div className="space-y-4">
            {[
              "You are at least 18 years old",
              "Your project complies with all applicable laws",
              "Your project is original and doesn't infringe on any intellectual property",
              "You can complete the project and fulfill rewards",
              "All information provided is truthful and accurate",
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`check-${index}`}
                  className="h-5 w-5 text-custom border-gray-300 rounded"
                />
                <label
                  htmlFor={`check-${index}`}
                  className={`ml-3 ${cardTextColor}`}
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Report Violations */}
        <div
          className={`${cardBackgroundColor} rounded-lg shadow-sm p-8 mb-16`}
        >
          <h2 className={`text-2xl font-semibold ${textColor} mb-6`}>
            Report Violations
          </h2>
          <p className={`${cardTextColor} mb-6`}>
            Help maintain the integrity of our community by reporting any
            violations of our guidelines.
          </p>
          <button
            className={`bg-red-100 text-red-700 px-6 py-3 rounded-lg font-medium inline-flex items-center`}
          >
            <i className="fas fa-flag mr-2"></i>
            Report a Violation
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            style={{
              backgroundColor: theme ? "#1f2937" : "#e9ebef",
              color: theme ? "#e9ebef" : "#1f2937",
            }}
            className={`${buttonBackgroundColor} ${buttonTextColor} px-8 py-4 rounded-lg font-medium inline-flex items-center cursor-pointer mb-4`}
          >
            <i className="fas fa-book mr-2"></i>
            Review Full Guidelines
          </button>
          <div className="flex justify-center space-x-6">
            <Link
              to="#"
              className={`${cardTextColor} hover:text-custom flex items-center`}
            >
              <i className="fas fa-download mr-2"></i>
              Download PDF
            </Link>
            <Link
              to="/help-center"
              className={`${cardTextColor} hover:text-custom flex items-center`}
            >
              <i className="fas fa-question-circle mr-2"></i>
              Visit Help Center
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommunityGuidelines;
