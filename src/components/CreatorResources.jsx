import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CreatorResources = () => {
  const theme = useSelector((state) => state.theme.darkMode);

  const backgroundColor = theme ? "bg-[#e9ebef]" : "bg-[#1f2937]";
  const textColor = theme ? "text-gray-900" : "text-white";
  const cardBackgroundColor = theme ? "bg-white" : "bg-[#101828]";
  const cardTextColor = theme ? "text-gray-500" : "text-gray-300";
  const buttonBackgroundColor = theme ? "bg-white" : "bg-[#1f2937]";
  const buttonTextColor = theme ? "text-custom" : "text-white";

  return (
    <main className={backgroundColor} >
      {/* Hero Section */}
      <div className="relative mt-10 overflow-hidden">
        <div className="max-w-8xl mx-auto">
          <div
            className={`relative z-10 pb-8 ${backgroundColor} sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-1/2 lg:pb-28 xl:pb-32`}
          >
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1
                  className={`text-4xl tracking-tight font-bold ${textColor} sm:text-5xl md:text-6xl`}
                >
                  <span className="block">Everything You Need to</span>
                  <span className="block text-custom">
                    Launch a Winning Campaign
                  </span>
                </h1>
                <p
                  className={`mt-3 text-base ${cardTextColor} sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`}
                >
                  Maximize your success with expert tips, tools, and templates
                  to create impactful fundraisers.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/company/create-campaign">
                      <button
                        style={{
                          backgroundColor: theme ? "#1f2937" : "#e9ebef",
                          color: theme ? "#e9ebef" : "#1f2937",
                        }}
                        className={`!rounded-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium md:py-4 md:text-lg md:px-10`}
                      >
                        Start Your Campaign Today
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute p-6 mt-10 lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full rounded-2xl mt-10 object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/creator-resources-hero.jpg"
            alt="Hero image"
          />
        </div>
      </div>

      {/* Resources Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex justify-center space-x-8 border-b border-gray-200">
          {["Guides", "Templates", "Best Practices", "Tools"].map((item) => (
            <button
              key={item}
              style={{
                color: theme ? "#1f2937" : "#e9ebef",
              }}
              className={`px-3 py-4 text-sm font-medium ${
                item === "Guides"
                  ? "text-white border-b-2 border-custom"
                  : `text-white hover:text-gray-200`
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Campaign Strategy Guide",
              description:
                "Learn how to plan and execute successful campaigns with our comprehensive guide.",
              image: "/creator-resources-image-1.jpg",
            },
            {
              title: "Social Media Templates",
              description:
                "Ready-to-use social media templates to promote your campaign effectively.",
              image: "/creator-resources-image-2.jpg",
            },
            {
              title: "Analytics Dashboard",
              description:
                "Track and analyze your campaign performance with our analytics tools.",
              image: "/creator-resources-image-3.jpg",
            },
          ].map((resource, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-sm overflow-hidden ${cardBackgroundColor}`}
            >
              <img
                className="h-48 w-full object-cover"
                src={resource.image}
                alt={resource.title}
              />
              <div className="p-6">
                <h3 className={`text-lg font-semibold ${textColor}`}>
                  {resource.title}
                </h3>
                <p className={`mt-2 text-sm ${cardTextColor}`}>
                  {resource.description}
                </p>
                <button
                  className={`!rounded-button mt-4 inline-flex items-center px-4 py-2 border border-custom text-sm font-medium ${buttonTextColor} ${buttonBackgroundColor} `}
                >
                  {index === 0
                    ? "Download Guide"
                    : index === 1
                    ? "Access Templates"
                    : "View Dashboard"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="mt-16">
          <h2 className={`text-2xl font-bold ${textColor}`}>Success Stories</h2>
          <div className="mt-6">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Tech Startup Founder",
                    testimonial:
                      "The resources provided helped us exceed our campaign goals by 200%. Highly recommended!",
                    image: "/Success Stories-1.jpg",
                  },
                  {
                    name: "John Doe",
                    role: "Non-Profit Organizer",
                    testimonial:
                      "The templates saved us so much time and effort. Great platform!",
                    image: "Success Stories-2.jpg",
                  },
                  {
                    name: "Jane Smith",
                    role: "Creative Entrepreneur",
                    testimonial:
                      "The analytics dashboard gave us valuable insights to improve our campaign.",
                    image: "Success Stories-3.jpg",
                  },
                ].map((story, index) => (
                  <li key={index} className="grid grid-cols-12 gap-4">
                    <div
                      className={`bg-white p-6 rounded-lg shadow-sm ${cardBackgroundColor}`}
                    >
                      <div className="flex items-center">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={story.image}
                          alt={story.name}
                        />
                        <div className="ml-4">
                          <h4 className={`text-lg font-semibold text-gray-900`}>
                            {story.name}
                          </h4>
                          <p className={`text-sm text-gray-500`}>
                            {story.role}
                          </p>
                        </div>
                      </div>
                      <p className={`mt-4 text-gray-700`}>
                        {story.testimonial}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreatorResources;
