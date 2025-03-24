import { color } from "echarts";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Impact = () => {
  const theme = useSelector((state) => state.theme.darkMode); // true = light mode, false = dark mode

  // Theme colors
  const backgroundColor = theme ? "bg-[#e9ebef]" : "bg-[#1f2937]";
  const textColor = theme ? "text-[#101828]" : "text-white";
  const cardBackgroundColor = theme ? "bg-white" : "bg-[#101828]";
  const cardTextColor = theme ? "text-gray-600" : "text-gray-300";
  const buttonBackgroundColor = theme ? "bg-white" : "bg-[#1f2937]";
  const buttonTextColor = theme ? "text-custom" : "text-white";

  return (
    <main className={backgroundColor}>
      {/* Hero Section */}
      <div className="relative mt-10 overflow-hidden">
        <div className="max-w-8xl mx-auto">
          <div
            className={`relative z-10 pb-8 ${backgroundColor} sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32`}
          >
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:w-[50%] lg:text-left">
                <h1
                  className={`text-4xl tracking-tight font-bold ${textColor} sm:text-5xl md:text-6xl`}
                >
                  <span className="block">Changing Lives,</span>
                  <span className="block text-custom mt-2">
                    One Campaign at a Time
                  </span>
                </h1>
                <p
                  className={`mt-4 text-base ${cardTextColor} sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0`}
                >
                  See how FundHive is making a difference globally through
                  community-driven crowdfunding.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    style={{
                      backgroundColor: theme ? "#1f2937" : "#e9ebef",
                      color: theme ? "#e9ebef" : "#1f2937",
                    }}
                    to="/register"
                    className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom`}
                  >
                    Start a Campaign
                  </Link>
                  <Link
                    style={{
                      backgroundColor: theme ? "#1f2937" : "#e9ebef",
                      color: theme ? "#e9ebef" : "#1f2937",
                    }}
                    to="/about-us"
                    className={`inline-flex items-center justify-center px-6 py-3 border border-custom text-base font-medium rounded-md shadow-sm bg-transparent ${textColor} hover:bg-custom hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            {/* Hero Image */}
            <div className="lg:absolute p-3 lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
              <img
                className="h-56 w-full rounded-2xl object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:object-cover"
                src="/Impact-hero.jpg"
                alt="Impact Hero"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`py-12 ${backgroundColor}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className={`text-4xl font-bold ${textColor} mb-2`}>
                $25M+
              </div>
              <div className={cardTextColor}>Total Funds Raised</div>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold ${textColor} mb-2`}>
                1,200+
              </div>
              <div className={cardTextColor}>Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold ${textColor} mb-2`}>50+</div>
              <div className={cardTextColor}>Active Global Causes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Impact Section */}
      <div className={`py-16 ${theme ? "bg-gray-50" : "bg-[#101828]"}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${textColor}`}>
            Our Global Impact
          </h2>
          <div className="relative h-[600px] bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src="/Impact-map.jpeg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Global Impact Map"
            />
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className={`py-16 ${backgroundColor}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${textColor}`}>
            Success Stories
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: "Building Schools in Rural Areas",
                description:
                  "Provided education access to 500+ children through new school construction in underserved communities.",
                image: "/Impact-Success Stories-3.jpg",
                raised: "$150,000 Raised",
              },
              {
                title: "Healthcare for All Initiative",
                description:
                  "Established 3 community health centers providing care to over 10,000 people annually.",
                image: "/Impact-Success Stories-1.jpg",
                raised: "$300,000 Raised",
              },
              {
                title: "Sustainable Farming Project",
                description:
                  "Empowered 200 farmers with modern agricultural techniques and equipment.",
                image: "/Impact-Success Stories-2.jpg",
                raised: "$200,000 Raised",
              },
            ].map((story, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm overflow-hidden ${cardBackgroundColor}`}
              >
                <img
                  className="h-48 w-full object-cover"
                  src={story.image}
                  alt={story.title}
                />
                <div className="p-6">
                  <h3
                    style={{ color: theme ? "#101828" : "#101828" }}
                    className={`text-xl font-semibold mb-2`}
                  >
                    {story.title}
                  </h3>
                  <p className={`text-gray-600 mb-4 ${cardTextColor}`}>
                    {story.description}
                  </p>
                  <span className="text-custom font-medium">
                    {story.raised}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-custom">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2
              style={{ color: theme ? "#101828" : "#fff" }}
              className="text-3xl font-bold mb-4"
            >
              Make an Impact Today
            </h2>
            <p
              style={{ color: theme ? "#101828" : "#ccc" }}
              className=" mb-8 max-w-2xl mx-auto"
            >
              Join our global community of changemakers and help create lasting
              positive change in communities worldwide.
            </p>
            <div className="space-x-4">
              <Link to="/company/create-campaign">
                <button
                  style={{
                    backgroundColor: theme ? "#1f2937" : "#e9ebef",
                    color: theme ? "#e9ebef" : "#1f2937",
                  }}
                  className={`!rounded-button px-8 py-3 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
                >
                  Start a Campaign
                </button>
              </Link>
              <Link to={`/donate/:id`}>
                <button
                  style={{
                    backgroundColor: theme ? "#1f2937" : "#e9ebef",
                    color: theme ? "#e9ebef" : "#1f2937",
                  }}
                  className={`border-2 !rounded-button px-8 py-3 font-medium hover:bg-white hover:text-custom focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
                >
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Impact;
