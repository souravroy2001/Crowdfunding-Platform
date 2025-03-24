import { color } from "echarts";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MediaPressHub = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const emailInputRef = React.useRef(null);

  const backgroundColor = theme ? "bg-[#e9ebef]" : "bg-[#1f2937]";
  const textColor = theme ? "text-[#1f2937]" : "text-[#e9ebef]";
  const cardBackgroundColor = theme ? "bg-white" : "bg-[#101828]";
  const cardTextColor = theme ? "text-gray-600" : "text-gray-300";
  const buttonBackgroundColor = theme ? "bg-custom" : "bg-[#1f2937]";
  const buttonTextColor = theme ? "text-white" : "text-[#e9ebef]";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  function handleSubscription(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    console.log("Email:", email);
  }

  return (
    <main className={backgroundColor}>
      {/* Hero Section */}
      <div className="relative mt-10 bg-custom">
        <div className="max-w-8xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className={`text-4xl font-bold tracking-tight ${textColor} sm:text-5xl lg:text-6xl`}
            >
              Media & Press Hub
            </h1>
            <p className={`mt-6 text-xl ${cardTextColor}`}>
              Find official announcements, press releases, and media coverage
              about FundHive's journey.
            </p>
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  className={`block w-full !rounded-button pl-12 pr-4 py-3 border-0 ${cardBackgroundColor} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-custom`}
                  placeholder="Search press releases..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured News Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className={`text-2xl font-bold mb-8 ${textColor}`}>
          Featured News
        </h2>
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="grid">
              {[1, 2, 3].map((slide, index) => (
                <li key={slide} className="glide__slide mt-4">
                  <div
                    className={`${cardBackgroundColor} rounded-lg shadow p-6`}
                  >
                    <img
                      src={`https://picsum.photos/400/200?random=${index}`}
                      className="w-full h-48 object-cover rounded mb-4"
                      alt={`News ${slide}`}
                    />
                    <div className="text-sm text-gray-500 mb-2">
                      Forbes - March 15, 2024
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>
                      FundHive Raises $50M Series B to Transform Investment
                      Management
                    </h3>
                    <p className={cardTextColor}>
                      Leading investment platform secures major funding to
                      accelerate global expansion...
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className="glide__bullet"
                data-glide-dir={`=${index}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Press Kit Section */}
      <div className={`${cardBackgroundColor} py-16`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl font-bold mb-8 ${textColor}`}>Press Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fas fa-images",
                title: "Logo Package",
                description: "Download our logo in various formats",
              },
              {
                icon: "fas fa-book",
                title: "Brand Guidelines",
                description: "Access our complete brand manual",
              },
              {
                icon: "fas fa-users",
                title: "Executive Photos",
                description: "High-res images of our leadership",
              },
              {
                icon: "fas fa-file-alt",
                title: "Fact Sheet",
                description: "Company overview and key metrics",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${cardBackgroundColor} rounded-lg p-6 text-center`}
              >
                <i className={`${item.icon} text-4xl ${textColor} mb-4`}></i>
                <h3 className={`font-semibold mb-2 ${textColor}`}>
                  {item.title}
                </h3>
                <p className={cardTextColor}>{item.description}</p>
                <button
                  style={{
                    backgroundColor: theme ? "#1A202C" : "#FFFFFF",
                    color: theme ? "#FFFFFF" : "#1A202C",
                  }}
                  className={`px-4 py-2 rounded-sm hover:bg-custom/90 mt-4`}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Press Releases Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className={`text-2xl font-bold mb-8 ${textColor}`}>
          Latest Press Releases
        </h2>
        <div className="space-y-6">
          {[
            {
              date: "March 20, 2024",
              title: "FundHive Expands Operations to Asia-Pacific Region",
              description:
                "Strategic expansion marks significant milestone in company's global growth...",
            },
            {
              date: "March 18, 2024",
              title: "FundHive Partners with Leading Global Banks",
              description:
                "New partnerships set to enhance investment opportunities for clients...",
            },
            {
              date: "March 15, 2024",
              title: "FundHive Achieves Carbon Neutral Status",
              description:
                "Commitment to sustainability reaches major milestone...",
            },
          ].map((release, index) => (
            <div
              key={index}
              className={`${cardBackgroundColor} rounded-lg shadow p-6`}
            >
              <div className="text-sm text-gray-500 mb-2">{release.date}</div>
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                {release.title}
              </h3>
              <p className={cardTextColor}>{release.description}</p>
              <Link
                to="#"
                style={{ color: theme ? "#1A202C" : "#FFFFFF" }}
                className=" hover:text-custom/80 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Media Contact Section */}
      <div className={`${cardBackgroundColor} py-16`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-custom rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2
                style={{ color: theme ? "#1A202C" : "#FFFFFF" }}
                className="text-3xl font-bold mb-4"
              >
                Media Contact
              </h2>
              <p
                style={{ color: theme ? "#1A202C" : "#FFFFFF" }}
                className="mb-8"
              >
                For press inquiries, please reach out to our PR team
              </p>
              <div className="max-w-2xl mx-auto bg-white rounded-lg p-8">
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="flex flex-col gap-6"
                >
                  {/* Name Input */}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      borderColor: "#ccc",
                      border: "1px solid",
                    }}
                    className="block w-full rounded-[10px] px-4 py-3 shadow-sm focus:ring-custom"
                    placeholder="Name"
                    required
                  />

                  {/* Email Input */}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      borderColor: "#ccc",
                      border: "1px solid",
                    }}
                    className="block w-full rounded-[10px] px-4 py-3 shadow-sm focus:ring-custom"
                    placeholder="Email"
                    required
                  />

                  {/* Message Textarea */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      borderColor: "#ccc",
                      border: "1px solid",
                    }}
                    className="block w-full rounded-[10px] px-4 py-3 border-gray-300 shadow-sm focus:ring-custom mb-6"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-8 py-3 rounded-[10px] hover:bg-custom/90"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stay Updated Section */}
      <div className={`${cardBackgroundColor} py-16`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
            Stay Updated
          </h2>
          <p className={cardTextColor}>
            Subscribe to receive our latest press releases and updates
          </p>
          <div className="max-w-md mt-3 mx-auto flex gap-4">
            <input
              type="email"
              ref={emailInputRef}
              style={{
                borderColor: theme ? "#ccc" : "#4a5568",
                backgroundColor: theme ? "#fff" : "#1f2937",
                color: theme ? "#1A202C" : "#FFFFFF",
              }}
              className="flex-1 !rounded-button px-4 py-3 shadow-sm focus:border-custom focus:ring-custom"
              placeholder="Enter your email"
            />
            <button
              onClick={handleSubscription}
              style={{
                backgroundColor: theme ? "#101828" : "#FFFFFF",
                color: theme ? "#FFFFFF" : "#101828",
              }}
              className=" px-6 py-3 rounded-[10px] hover:bg-custom/90"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MediaPressHub;
