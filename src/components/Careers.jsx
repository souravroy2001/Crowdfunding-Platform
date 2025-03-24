import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Careers = () => {
  const theme = useSelector((state) => state.theme.darkMode); // true = light mode, false = dark mode

  // Theme colors
  const backgroundColor = theme ? "bg-[#e9ebef]" : "bg-[#1f2937]";
  const textColor = theme ? "text-[#101828]" : "text-white";
  const cardBackgroundColor = theme ? "bg-white" : "bg-[#101828]";
  const cardTextColor = theme ? "text-gray-500" : "text-gray-300";
  const buttonBackgroundColor = theme ? "bg-white" : "bg-[#1f2937]";
  const buttonTextColor = theme ? "text-custom" : "text-white";

  // Data for "Our Story" section
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      location: "San Francisco, CA (Remote)",
      description:
        "Join our engineering team to build the future of crowdfunding platforms.",
      cta: "Apply Now →",
    },
    {
      id: 2,
      title: "Product Marketing Manager",
      location: "New York, NY (Hybrid)",
      description:
        "Drive our product marketing strategy and tell our story to the world.",
      cta: "Apply Now →",
    },
    {
      id: 3,
      title: "Operations Manager",
      location: "London, UK (On-site)",
      description: "Help scale our operations and optimize business processes.",
      cta: "Apply Now →",
    },
  ];

  return (
    <main className={backgroundColor}>
      {/* Hero Section */}
      <div className="relative mt-10 overflow-hidden">
        <div className="max-w-8xl mx-auto">
          <div
            className={`relative z-10 pb-8 ${backgroundColor} sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32`}
          >
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1
                  className={`text-4xl tracking-tight font-bold ${textColor} sm:text-5xl md:text-6xl`}
                >
                  <span className="block">Join FundHive.</span>
                  <span className="block text-custom">
                    Shape the Future of Crowdfunding
                  </span>
                </h1>
                <p
                  className={`mt-3 max-w-md mx-auto text-base ${cardTextColor} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}
                >
                  We are looking for passionate minds to help us grow. Be part
                  of something meaningful and make an impact with your work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div
        className={`py-16 ${
          theme ? "bg-[#e9ebef]" : "bg-[#1f2937]"
        } overflow-hidden`}
      >
        <div className={`py-16 ${backgroundColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2
                className={`text-3xl font-extrabold ${textColor} sm:text-4xl`}
              >
                How It Works
              </h2>
              <p className={`mt-4 text-lg ${cardTextColor}`}>
                Four simple steps to start your crowdfunding journey
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Create Your Campaign",
                  description:
                    "Set up your fundraising page with photos, videos, and your story.",
                },
                {
                  step: 2,
                  title: "Share Your Story",
                  description:
                    "Spread the word through social media and email.",
                },
                {
                  step: 3,
                  title: "Engage Supporters",
                  description: "Keep backers updated on your progress.",
                },
                {
                  step: 4,
                  title: "Receive Funds",
                  description:
                    "Get funds directly to your account when successful.",
                },
              ].map((stepData) => (
                <div
                  key={stepData.step}
                  className="text-center"
                  style={{ color: theme ? "black" : "white" }}
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-custom bg-opacity-10 mx-auto">
                    <span
                      style={{
                        backgroundColor: theme ? "#cccccc" : "#cccccc",
                        color: "black",
                      }}
                      className="text-2xl w-10 h-10 text-center flex justify-center items-center rounded-[50%] text-custom"
                    >
                      {stepData.step}
                    </span>
                  </div>
                  <h3
                    className="mt-4 text-lg font-medium"
                    style={{ color: textColor }}
                  >
                    {stepData.title}
                  </h3>
                  <p
                    className="mt-2 text-base"
                    style={{ color: cardTextColor }}
                  >
                    {stepData.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className={`text-3xl font-extrabold tracking-tight ${textColor} sm:text-4xl`}
            >
              Our Story
            </h2>
          </div>
          <div className="mt-12">
            <div className="flex justify-center space-x-4 mb-8">
              {[
                "All Departments",
                "Engineering",
                "Marketing",
                "Operations",
              ].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium ${
                    category === "All Departments"
                      ? `${textColor} bg-custom hover:bg-opacity-90`
                      : `${textColor} ${buttonBackgroundColor} border border-gray-300 hover:bg-gray-50 hover:text-gray-700`
                  } rounded-md`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {jobOpenings.map((job) => (
                <div key={job.id} className="pt-6">
                  <div
                    className={`flow-root ${cardBackgroundColor} rounded-lg shadow-sm`}
                  >
                    <div className="p-6">
                      <h3 className={`text-xl font-semibold ${textColor}`}>
                        {job.title}
                      </h3>
                      <p className={`mt-2 text-sm ${cardTextColor}`}>
                        {job.location}
                      </p>
                      <p className={`mt-3 text-base ${cardTextColor}`}>
                        {job.description}
                      </p>
                      <div className="mt-4">
                        <Link
                          to="#"
                          style={{
                            color: theme ? "#000000" : "#ffffff",
                          }}
                          className="text-custom hover:text-opacity-90"
                        >
                          {job.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-custom py-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2
            style={{
              color: theme ? "#000000" : "#ffffff",
            }}
            className="text-3xl w-[70%] font-extrabold tracking-tight sm:text-4xl"
          >
            <span className="block">Ready to start your campaign?</span>
            <span className="block">
              Join thousands of successful fundraisers today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to={"/register"}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium hover:bg-gray-50"
                style={{
                  color: buttonTextColor,
                  backgroundColor: "#ffffff",
                }}
              >
                Join the Movement
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="#"
                style={{
                  color: buttonTextColor,
                  backgroundColor: "#ccc",
                }}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-basefont-medium bg-opacity-60 hover:bg-opacity-70"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Careers;
