import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const theme = useSelector((state) => state.theme.darkMode);

  const backgroundColor = theme ? "#e9ebef" : "#1f2937";
  const textColor = theme ? "#1f2937" : "#e9ebef";
  const cardBackgroundColor = theme ? "#ffffff" : "#101828";
  const cardTextColor = theme ? "#4b5563" : "#d1d5db";
  const buttonBackgroundColor = theme ? "#ffffff" : "#374151";
  const buttonTextColor = theme ? "#1f2937" : "#e9ebef";

  return (
    <main style={{ backgroundColor }}>
      {/* Hero Section */}
      <div className="relative mt-10 overflow-hidden">
        <div className="max-w-8xl mx-auto">
          <div
            className={`relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32`}
            style={{ backgroundColor }}
          >
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1
                  className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl"
                  style={{ color: textColor }}
                >
                  <span className="block">Empowering Ideas.</span>
                  <span className="block text-custom">
                    Building a Better Future
                  </span>
                </h1>
                <p
                  className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                  style={{ color: cardTextColor }}
                >
                  FundHive is more than a crowdfunding platform. We are a
                  movement to empower innovators, dreamers, and changemakers
                  worldwide. Join our community of creators and backers making
                  positive changes in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div
        className="overflow-hidden"
        style={{ backgroundColor: theme ? "#f3f4f6" : "#111827" }}
      >
        <div className="py-16" style={{ backgroundColor }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2
                className="text-3xl font-extrabold sm:text-4xl"
                style={{ color: textColor }}
              >
                How It Works
              </h2>
              <p className="mt-4 text-lg" style={{ color: cardTextColor }}>
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
                <div key={stepData.step} className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-custom bg-opacity-10 mx-auto">
                    <span className="text-2xl bg-[#ccccccf3] w-10 h-10 text-center flex justify-center items-center rounded-[50%] text-custom">
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
        <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: textColor }}
            >
              Our Story
            </h2>
          </div>
          <div className="mt-12">
            <div className="flex justify-center space-x-4 mb-8">
              {["All Stories", "Tech", "Health", "Social Causes"].map(
                (category) => (
                  <button
                    key={category}
                    className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50"
                    style={{
                      color: textColor,
                      backgroundColor: buttonBackgroundColor,
                    }}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  id: 1,
                  title: "Revolutionizing Education",
                  amount: "Raised $250,000",
                  description:
                    "A platform to provide free education to underprivileged children in rural areas.",
                  image: "https://picsum.photos/400/200?random=1",
                },
                {
                  id: 2,
                  title: "Clean Water for All",
                  amount: "Raised $500,000",
                  description:
                    "A project to build clean water wells in drought-affected regions of Africa.",
                  image: "https://picsum.photos/400/200?random=2",
                },
                {
                  id: 3,
                  title: "Sustainable Energy Solutions",
                  amount: "Raised $150,000",
                  description:
                    "Developing solar-powered solutions for off-grid communities.",
                  image: "https://picsum.photos/400/200?random=3",
                },
              ].map((story) => (
                <div key={story.id} className="pt-6">
                  <div
                    className="flow-root rounded-lg px-6 pb-8"
                    style={{ backgroundColor: cardBackgroundColor }}
                  >
                    <img
                      src={story.image}
                      className="w-full h-48 object-cover rounded-t-lg"
                      alt={story.title}
                    />
                    <div className="p-6">
                      <h3
                        className="text-lg font-medium"
                        style={{ color: textColor }}
                      >
                        {story.title}
                      </h3>
                      <p
                        className="mt-2 text-sm"
                        style={{ color: cardTextColor }}
                      >
                        {story.amount}
                      </p>
                      <p
                        className="mt-3 text-base"
                        style={{ color: cardTextColor }}
                      >
                        {story.description}
                      </p>
                      <div className="mt-4">
                        <Link
                          to="#"
                          className="text-[#12a495] hover:text-opacity-90"
                        >
                          Read Full Story →
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
              color: buttonTextColor,
            }}
            className="text-3xl w-[70%] font-extrabold tracking-tight text-white sm:text-4xl"
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
                  backgroundColor: buttonBackgroundColor,
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
                }}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium bg-opacity-60 hover:bg-opacity-70"
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

export default AboutUs;
