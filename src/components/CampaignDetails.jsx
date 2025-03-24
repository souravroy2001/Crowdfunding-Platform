import React from "react";
import "../style/campaignDetails.css";
import { useSelector } from "react-redux";

const CampaignDetails = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  return (
    <main
      className={`campaign-details-main ${
        theme ? "bg-gray-50" : "bg-gray-900"
      }`}
    >
      <div className="campaign-details-grid">
        <div className="campaign-details-col-2 mt-10">
          <div
            className={`campaign-details-card ${
              theme ? "bg-white" : "bg-gray-800"
            }`}
          >
            <div className="campaign-details-image-grid">
              <img
                src="/Campaign-Image-5.jpg"
                className="campaign-details-image"
                alt="Coral Reef"
              />
              <img
                src="/Campaign-Image-4.jpg"
                className="campaign-details-image"
                alt="Sea Turtle"
              />
              <img
                src="/Campaign-Image-3.jpg"
                className="campaign-details-image"
                alt="Ocean Cleanup"
              />
              <img
                src="/Campaign-Image-2.jpg"
                className="campaign-details-image"
                alt="Marine Research"
              />
            </div>
            <img
              src="/Campaign-Image-1.jpg"
              className="campaign-details-main-image"
              alt="Campaign Image"
            />

            <div className="campaign-details-content">
              <div className="campaign-details-header">
                <h1
                  className={`campaign-details-title ${
                    theme ? "text-gray-900" : "text-white"
                  }`}
                >
                  Save The Ocean Initiative
                </h1>
                <div className="campaign-details-buttons">
                  <button
                    className={`campaign-details-icon-button ${
                      theme ? "text-gray-40" : "text-gray-50"
                    }`}
                  >
                    <i className="fas fa-share-alt"></i>
                  </button>
                  <button
                    className={`campaign-details-icon-button ${
                      theme ? "text-gray-40" : "text-gray-50"
                    }`}
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
              <div className="campaign-details-progress-section">
                <div className="campaign-details-progress-info">
                  <span
                    className={`campaign-details-progress-text ${
                      theme ? "text-[#374151]" : "text-[#ccc]"
                    }`}
                  >
                    $75,000 raised of $100,000 goal
                  </span>
                  <span
                    className={`campaign-details-progress-text ${
                      theme ? "text-[#374151]" : "text-[#ccc]"
                    }`}
                  >
                    75%
                  </span>
                </div>
                <div className="campaign-details-progress-bar">
                  <div
                    className={`campaign-details-progress-fill ${
                      theme ? "bg-gray-900" : "bg-[#00bfa5]"
                    }`}
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div className="campaign-details-progress-details">
                  <div
                    className={`campaign-details-detail ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    }`}
                  >
                    <i className="fas fa-users"></i>1,234 backers
                  </div>
                  <div
                    className={`campaign-details-detail ${
                      theme ? "text-[##6b7280]" : "text-[#ccc]"
                    }`}
                  >
                    <i className="fas fa-clock"></i>15 days left
                  </div>
                </div>
              </div>
              <button
                className={`campaign-details-donate-button ${
                  theme
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-[#00bfa5] hover:bg-[#009e89]"
                }`}
              >
                Donate Now
              </button>
              <div className="campaign-details-about-section">
                <h2
                  className={`campaign-details-subtitle ${
                    theme ? "text-gray-900" : "text-white"
                  }`}
                >
                  About This Campaign
                </h2>
                <p className={`${theme ? "text-gray-900" : "text-white"}`}>
                  Join us in our mission to protect and preserve our ocean
                  ecosystems. Your support will help fund critical marine
                  conservation projects, including coral reef restoration,
                  marine wildlife protection, and ocean cleanup initiatives. Our
                  team of marine biologists and conservation experts works
                  tirelessly to:
                </p>
                <ul
                  className={`campaign-details-list ${
                    theme ? "text-gray-900" : "text-white"
                  }`}
                >
                  <li>
                    Restore damaged coral reefs using innovative techniques
                  </li>
                  <li>Protect endangered marine species and their habitats</li>
                  <li>
                    Remove plastic waste and ghost fishing nets from the ocean
                  </li>
                  <li>
                    Educate local communities about sustainable fishing
                    practices
                  </li>
                  <li>Monitor ocean health and marine biodiversity</li>
                </ul>
                <p className={`${theme ? "text-gray-900" : "text-white"}`}>
                  With your support, we can make a lasting impact on ocean
                  conservation and ensure a healthier marine ecosystem for
                  future generations.
                </p>
              </div>
            </div>
          </div>
          <div className="campaign-details-reward-section mb-10">
            <div
              className={`campaign-details-reward-content rounded-2xl ${
                theme ? "bg-white text-gray-900" : "bg-gray-800 text-white"
              }`}
            >
              <h2 className="campaign-details-subtitle">Reward Tiers</h2>
              <div className="campaign-details-reward-grid">
                <div
                  className={`campaign-details-reward-card ${
                    theme
                      ? "hover:bg-gray-100 border border-[#e5e7eb] hover:border-[#1f2937]"
                      : "hover:bg-gray-700 hover:border-gray-100 border"
                  }`}
                >
                  <div className="campaign-details-reward-header">
                    <h3 className="campaign-details-reward-title">
                      Ocean Guardian
                    </h3>
                    <p
                      className={`campaign-details-reward-description ${
                        theme ? "text-[#6b7280]" : "text-[#ccc]"
                      }`}
                    >
                      Pledge $25 or more
                    </p>
                  </div>
                  <button
                    className={`campaign-details-reward-button mt-3 ${
                      theme
                        ? "bg-gray-900 hover:bg-gray-800"
                        : "bg-[#00bfa5] hover:bg-[#009e89]"
                    }`}
                  >
                    Select
                  </button>
                  <p
                    className={`campaign-details-reward-details ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    }`}
                  >
                    Receive a digital certificate and monthly updates about our
                    conservation efforts.
                  </p>
                </div>
                <div
                  className={`campaign-details-reward-card ${
                    theme
                      ? "hover:bg-gray-100 border border-[#e5e7eb] hover:border-[#1f2937]"
                      : "hover:bg-gray-700 hover:border-gray-100 border"
                  }`}
                >
                  <div className="campaign-details-reward-header">
                    <h3 className="campaign-details-reward-title">
                      Coral Protector
                    </h3>
                    <p
                      className={`campaign-details-reward-description ${
                        theme ? "text-[#6b7280]" : "text-[#ccc]"
                      }`}
                    >
                      Pledge $100 or more
                    </p>
                  </div>
                  <button
                    className={`campaign-details-reward-button mt-3 ${
                      theme
                        ? "bg-gray-900 hover:bg-gray-800"
                        : "bg-[#00bfa5] hover:bg-[#009e89]"
                    }`}
                  >
                    Select
                  </button>
                  <p
                    className={`campaign-details-reward-details ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    }`}
                  >
                    Get a personalized thank you video and your name featured on
                    our website.
                  </p>
                </div>
                <div
                  className={`campaign-details-reward-card ${
                    theme
                      ? "hover:bg-gray-100 border border-[#e5e7eb] hover:border-[#1f2937]"
                      : "hover:bg-gray-700 hover:border-gray-100 border"
                  }`}
                >
                  <div className="campaign-details-reward-header">
                    <h3 className="campaign-details-reward-title">
                      Marine Champion
                    </h3>
                    <p
                      className={`campaign-details-reward-description ${
                        theme ? "text-[#6b7280]" : "text-[#ccc]"
                      }`}
                    >
                      Pledge $250 or more
                    </p>
                  </div>
                  <button
                    className={`campaign-details-reward-button mt-3 ${
                      theme
                        ? "bg-gray-900 hover:bg-gray-800"
                        : "bg-[#00bfa5] hover:bg-[#009e89]"
                    }`}
                  >
                    Select
                  </button>
                  <p
                    className={`campaign-details-reward-details ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    }`}
                  >
                    Receive an exclusive marine life photo book and quarterly
                    video calls with our marine biologists.
                  </p>
                </div>
                <div
                  className={`campaign-details-reward-card ${
                    theme
                      ? "hover:bg-gray-100 border border-[#e5e7eb] hover:border-[#1f2937]"
                      : "hover:bg-gray-700 hover:border-gray-100 border"
                  }`}
                >
                  <div className="campaign-details-reward-header">
                    <h3 className="campaign-details-reward-title">
                      Conservation Leader
                    </h3>
                    <p
                      className={`campaign-details-reward-description ${
                        theme ? "text-[#6b7280]" : "text-[#ccc]"
                      }`}
                    >
                      Pledge $500 or more
                    </p>
                  </div>
                  <button
                    className={`campaign-details-reward-button mt-3 ${
                      theme
                        ? "bg-gray-900 hover:bg-gray-800"
                        : "bg-[#00bfa5] hover:bg-[#009e89]"
                    }`}
                  >
                    Select
                  </button>
                  <p
                    className={`campaign-details-reward-details ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    }`}
                  >
                    Join a virtual diving expedition and receive a limited
                    edition ocean conservation artwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="campaign-details-col-1 my-10">
          <div
            className={`campaign-details-sidebar ${
              theme ? "bg-white" : "bg-gray-800"
            }`}
          >
            <h2
              className={`campaign-details-sidebar-title ${
                theme ? "text-gray-900" : "text-white"
              }`}
            >
              Campaign Creator
            </h2>
            <div className="campaign-details-creator-info">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                className="campaign-details-creator-image"
                alt="Creator"
              />
              <div className="campaign-details-creator-details">
                <h3
                  className={`campaign-details-creator-name ${
                    theme ? "text-gray-900" : "text-white"
                  }`}
                >
                  Dr. Sarah Johnson
                </h3>
                <p
                  className={`campaign-details-creator-role ${
                    theme ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Marine Biologist
                </p>
              </div>
            </div>
            <div className="campaign-details-statistics-section">
              <h2
                className={`campaign-details-sidebar-title ${
                  theme ? "text-gray-900" : "text-white"
                }`}
              >
                Campaign Statistics
              </h2>
              <div className="campaign-details-statistics-grid">
                <div className="campaign-details-statistic">
                  <p
                    className={` campaign-details-statistic-label ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    } `}
                  >
                    Total Backers
                  </p>
                  <p
                    className={` campaign-details-statistic-value ${
                      theme ? "text-gray-800" : "text-gray-50"
                    }`}
                  >
                    1,234
                  </p>
                </div>
                <div className="campaign-details-statistic">
                  <p
                    className={` campaign-details-statistic-label ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    } `}
                  >
                    Average Donation
                  </p>
                  <p
                    className={` campaign-details-statistic-value ${
                      theme ? "text-gray-800" : "text-gray-50"
                    }`}
                  >
                    $60.78
                  </p>
                </div>
                <div className="campaign-details-statistic">
                  <p
                    className={` campaign-details-statistic-label ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    } `}
                  >
                    Campaign Duration
                  </p>
                  <p
                    className={` campaign-details-statistic-value ${
                      theme ? "text-gray-800" : "text-gray-50"
                    }`}
                  >
                    45 days
                  </p>
                </div>
                <div className="campaign-details-statistic">
                  <p
                    className={` campaign-details-statistic-label ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    } `}
                  >
                    Success Rate
                  </p>
                  <p
                    className={` campaign-details-statistic-value ${
                      theme ? "text-gray-800" : "text-gray-50"
                    }`}
                  >
                    75%
                  </p>
                </div>
              </div>
            </div>
            <div className="campaign-details-supporters-section mb-7">
              <h2
                className={`campaign-details-sidebar-title ${
                  theme ? "text-gray-900" : "text-white"
                }`}
              >
                Recent Supporters
              </h2>
              <div className="campaign-details-supporters-list">
                <div className="campaign-details-supporter">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
                    className="campaign-details-supporter-image"
                    alt="Supporter"
                  />
                  <div className="campaign-details-supporter-details">
                    <p
                      className={`campaign-details-supporter-name ${
                        theme ? "text-gray-800" : "text-gray-50"
                      }`}
                    >
                      Michael Chen
                    </p>
                    <p
                      className={`campaign-details-supporter-info ${
                        theme ? "text-[#6b7280]" : "text-[#ccc]"
                      }`}
                    >
                      Donated $50 • 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="campaign-details-supporter">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
                    className="campaign-details-supporter-image"
                    alt="Supporter"
                  />
                  <div className="campaign-details-supporter-details">
                    <p
                      className={`campaign-details-supporter-name ${
                        theme ? "text-gray-800" : "text-gray-50"
                      }`}
                    >
                      Robert Smith
                    </p>
                    <p
                      className={`campaign-details-supporter-info ${
                        theme ? "text-[#6b7280]" : "text-[#ccc]"
                      }`}
                    >
                      Donated $75 • 6 hours ago
                    </p>
                  </div>
                </div>
                <div className="campaign-details-supporter">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
                    className="campaign-details-supporter-image"
                    alt="Supporter"
                  />
                  <div className="campaign-details-supporter-details">
                    <p
                      className={`campaign-details-supporter-name ${
                        theme ? "text-gray-800" : "text-gray-50"
                      }`}
                    >
                      Lisa Anderson
                    </p>
                    <p
                      className={`campaign-details-supporter-info ${
                        theme ? "text-[#6b7280]" : "text-[#ccc]"
                      }`}
                    >
                      Donated $200 • 8 hours ago
                    </p>
                  </div>
                </div>
                <div className="campaign-details-supporter">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
                    className="campaign-details-supporter-image"
                    alt="Supporter"
                  />
                  <div className="campaign-details-supporter-details">
                    <p
                      className={`campaign-details-supporter-name ${
                        theme ? "text-gray-800" : "text-gray-50"
                      }`}
                    >
                      Emma Watson
                    </p>
                    <p
                      className={`campaign-details-supporter-info ${
                        theme ? "text-[#6b7280]" : "text-[#ccc]"
                      }`}
                    >
                      Donated $100 • 5 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="campaign-details-share-section">
              <h2
                className={`campaign-details-sidebar-title ${
                  theme ? "text-gray-900" : "text-white"
                }`}
              >
                Share Campaign
              </h2>
              <div className="campaign-details-share-buttons mb-7">
                <button
                  className={`campaign-details-share-button twitter ${
                    theme
                      ? "bg-gray-900 text-gray-50"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <i className="fab fa-twitter"></i>Twitter
                </button>
                <button
                  className={`campaign-details-share-button facebook ${
                    theme
                      ? "bg-gray-900 text-gray-50"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </button>
              </div>
            </div>
            <div className="campaign-details-updates-section">
              <h2
                className={`campaign-details-sidebar-title ${
                  theme ? "text-gray-900" : "text-white"
                }`}
              >
                Campaign Updates
              </h2>
              <div className="campaign-details-updates-list">
                <div
                  className={`campaign-details-update ${
                    theme
                      ? "border-l-4 border-l-[#1f2937]"
                      : "border-l-4 border-l-[#374151]"
                  }`}
                >
                  <p
                    className={`campaign-details-update-title ${
                      theme ? "text-gray-900" : "text-gray-100"
                    }`}
                  >
                    New Coral Reef Site Selected
                  </p>
                  <p
                    className={`campaign-details-update-date ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    }`}
                  >
                    Posted 3 days ago
                  </p>
                </div>
                <div
                  className={`campaign-details-update ${
                    theme
                      ? "border-l-4 border-l-[#1f2937]"
                      : "border-l-4 border-l-[#374151]"
                  }`}
                >
                  <p
                    className={`campaign-details-update-title ${
                      theme ? "text-gray-900" : "text-gray-100"
                    }`}
                  >
                    Monthly Progress Report
                  </p>
                  <p
                    className={`campaign-details-update-date ${
                      theme ? "text-[#6b7280]" : "text-[#ccc]"
                    }`}
                  >
                    Posted 1 week ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CampaignDetails;
