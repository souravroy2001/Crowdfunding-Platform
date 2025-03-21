import React from "react";
import "../style/campaignDetails.css";
import { useSelector } from "react-redux";

const CampaignDetails = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  return (
    <main className="campaign-details-main">
      <div className="campaign-details-grid">
        <div className="campaign-details-col-2">
          <div className="campaign-details-card">
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
                <h1 className="campaign-details-title">
                  Save The Ocean Initiative
                </h1>
                <div className="campaign-details-buttons">
                  <button className="campaign-details-icon-button">
                    <i className="fas fa-share-alt"></i>
                  </button>
                  <button className="campaign-details-icon-button">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
              <div className="campaign-details-progress-section">
                <div className="campaign-details-progress-info">
                  <span className="campaign-details-progress-text">
                    $75,000 raised of $100,000 goal
                  </span>
                  <span className="campaign-details-progress-text">75%</span>
                </div>
                <div className="campaign-details-progress-bar">
                  <div
                    className="campaign-details-progress-fill"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div className="campaign-details-progress-details">
                  <div className="campaign-details-detail">
                    <i className="fas fa-users"></i>1,234 backers
                  </div>
                  <div className="campaign-details-detail">
                    <i className="fas fa-clock"></i>15 days left
                  </div>
                </div>
              </div>
              <button className="campaign-details-donate-button">
                Donate Now
              </button>
              <div className="campaign-details-about-section">
                <h2 className="campaign-details-subtitle">
                  About This Campaign
                </h2>
                <p>
                  Join us in our mission to protect and preserve our ocean
                  ecosystems. Your support will help fund critical marine
                  conservation projects, including coral reef restoration,
                  marine wildlife protection, and ocean cleanup initiatives. Our
                  team of marine biologists and conservation experts works
                  tirelessly to:
                </p>
                <ul className="campaign-details-list">
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
                <p>
                  With your support, we can make a lasting impact on ocean
                  conservation and ensure a healthier marine ecosystem for
                  future generations.
                </p>
              </div>
            </div>
          </div>
          <div className="campaign-details-reward-section">
            <div className="campaign-details-reward-content">
              <h2 className="campaign-details-subtitle">Reward Tiers</h2>
              <div className="campaign-details-reward-grid">
                <div className="campaign-details-reward-card">
                  <div className="campaign-details-reward-header">
                    <h3 className="campaign-details-reward-title">
                      Ocean Guardian
                    </h3>
                    <p className="campaign-details-reward-description">
                      Pledge $25 or more
                    </p>
                  </div>
                  <button className="campaign-details-reward-button">
                    Select
                  </button>
                  <p className="campaign-details-reward-details">
                    Receive a digital certificate and monthly updates about our
                    conservation efforts.
                  </p>
                </div>
                <div className="campaign-details-reward-card">
                  <div className="campaign-details-reward-header">
                    <h3 className="campaign-details-reward-title">
                      Coral Protector
                    </h3>
                    <p className="campaign-details-reward-description">
                      Pledge $100 or more
                    </p>
                  </div>
                  <button className="campaign-details-reward-button">
                    Select
                  </button>
                  <p className="campaign-details-reward-details">
                    Get a personalized thank you video and your name featured on
                    our website.
                  </p>
                </div>
                <div className="campaign-details-reward-card">
                  <div className="campaign-details-reward-header">
                    <h3 className="campaign-details-reward-title">
                      Marine Champion
                    </h3>
                    <p className="campaign-details-reward-description">
                      Pledge $250 or more
                    </p>
                  </div>
                  <button className="campaign-details-reward-button">
                    Select
                  </button>
                  <p className="campaign-details-reward-details">
                    Receive an exclusive marine life photo book and quarterly
                    video calls with our marine biologists.
                  </p>
                </div>
                <div className="campaign-details-reward-card">
                  <div className="campaign-details-reward-header">
                    <h3 className="campaign-details-reward-title">
                      Conservation Leader
                    </h3>
                    <p className="campaign-details-reward-description">
                      Pledge $500 or more
                    </p>
                  </div>
                  <button className="campaign-details-reward-button">
                    Select
                  </button>
                  <p className="campaign-details-reward-details">
                    Join a virtual diving expedition and receive a limited
                    edition ocean conservation artwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="campaign-details-col-1">
          <div className="campaign-details-sidebar">
            <h2 className="campaign-details-sidebar-title">Campaign Creator</h2>
            <div className="campaign-details-creator-info">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                className="campaign-details-creator-image"
                alt="Creator"
              />
              <div className="campaign-details-creator-details">
                <h3 className="campaign-details-creator-name">
                  Dr. Sarah Johnson
                </h3>
                <p className="campaign-details-creator-role">
                  Marine Biologist
                </p>
              </div>
            </div>
            <div className="campaign-details-statistics-section">
              <h2 className="campaign-details-sidebar-title">
                Campaign Statistics
              </h2>
              <div className="campaign-details-statistics-grid">
                <div className="campaign-details-statistic">
                  <p className="campaign-details-statistic-label">
                    Total Backers
                  </p>
                  <p className="campaign-details-statistic-value">1,234</p>
                </div>
                <div className="campaign-details-statistic">
                  <p className="campaign-details-statistic-label">
                    Average Donation
                  </p>
                  <p className="campaign-details-statistic-value">$60.78</p>
                </div>
                <div className="campaign-details-statistic">
                  <p className="campaign-details-statistic-label">
                    Campaign Duration
                  </p>
                  <p className="campaign-details-statistic-value">45 days</p>
                </div>
                <div className="campaign-details-statistic">
                  <p className="campaign-details-statistic-label">
                    Success Rate
                  </p>
                  <p className="campaign-details-statistic-value">75%</p>
                </div>
              </div>
            </div>
            <div className="campaign-details-supporters-section">
              <h2 className="campaign-details-sidebar-title">
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
                    <p className="campaign-details-supporter-name">
                      Michael Chen
                    </p>
                    <p className="campaign-details-supporter-info">
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
                    <p className="campaign-details-supporter-name">
                      Robert Smith
                    </p>
                    <p className="campaign-details-supporter-info">
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
                    <p className="campaign-details-supporter-name">
                      Lisa Anderson
                    </p>
                    <p className="campaign-details-supporter-info">
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
                    <p className="campaign-details-supporter-name">
                      Emma Watson
                    </p>
                    <p className="campaign-details-supporter-info">
                      Donated $100 • 5 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="campaign-details-share-section">
              <h2 className="campaign-details-sidebar-title">Share Campaign</h2>
              <div className="campaign-details-share-buttons">
                <button className="campaign-details-share-button twitter">
                  <i className="fab fa-twitter"></i>Twitter
                </button>
                <button className="campaign-details-share-button facebook">
                  <i className="fab fa-facebook-f"></i> Facebook
                </button>
              </div>
            </div>
            <div className="campaign-details-updates-section">
              <h2 className="campaign-details-sidebar-title">
                Campaign Updates
              </h2>
              <div className="campaign-details-updates-list">
                <div className="campaign-details-update">
                  <p className="campaign-details-update-title">
                    New Coral Reef Site Selected
                  </p>
                  <p className="campaign-details-update-date">
                    Posted 3 days ago
                  </p>
                </div>
                <div className="campaign-details-update">
                  <p className="campaign-details-update-title">
                    Monthly Progress Report
                  </p>
                  <p className="campaign-details-update-date">
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
