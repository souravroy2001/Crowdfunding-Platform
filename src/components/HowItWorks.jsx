import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faShareNodes,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const HowItWorks = () => {
  const theme = useSelector((state) => state.theme.darkMode);

  const styles = {
    backgroundColor: !theme ? "#1f2937" : "#e9ebef",
    textColor: !theme ? "#ffffff" : "#1f2937",
    cardBackground: !theme ? "#374151" : "#ffffff",
    secondaryTextColor: !theme ? "#9ca3af" : "#6b7280",
    accentColor: "#1F2937",
    borderColor: !theme ? "#4b5563" : "#e5e7eb",
  };

  return (
    <main
      style={{
        backgroundColor: styles.backgroundColor,
        color: styles.textColor,
      }}
    >
      {/* Hero Section */}
      <div
        className="relative mt-10 overflow-hidden"
        style={{ backgroundColor: styles.cardBackground }}
      >
        <div className="max-w-8xl mx-auto">
          <div
            className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32"
            style={{ backgroundColor: styles.cardBackground }}
          >
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl">
                  <span className="block" style={{ color: styles.textColor }}>
                    Fundraising Made
                  </span>
                  <span className="block" style={{ color: styles.textColor }}>
                    Simple & Powerful
                  </span>
                </h1>
                <p
                  className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                  style={{ color: styles.secondaryTextColor }}
                >
                  Learn how FundHive connects ideas with supporters to bring
                  dreams to life. Follow our easy 3-step process to start or
                  support a campaign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Steps Section */}
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: styles.textColor }}
            >
              Three Simple Steps
            </h2>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* Step 1 */}
              <div className="pt-6">
                <div
                  className="flow-root rounded-lg px-6 pb-8"
                  style={{ backgroundColor: styles.cardBackground }}
                >
                  <div className="-mt-6">
                    <div>
                      <span
                        className="inline-flex items-center justify-center p-3 rounded-md shadow-lg"
                        style={{ backgroundColor: styles.accentColor }}
                      >
                        <FontAwesomeIcon
                          icon={faRocket}
                          className="text-white text-2xl"
                        />
                      </span>
                    </div>
                    <h3
                      className="mt-8 text-lg font-medium tracking-tight"
                      style={{ color: styles.textColor }}
                    >
                      Create Campaign
                    </h3>
                    <p
                      className="mt-5 text-base"
                      style={{ color: styles.secondaryTextColor }}
                    >
                      Set up your campaign in minutes. Add your story, photos,
                      and funding goal to bring your vision to life.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="pt-6">
                <div
                  className="flow-root rounded-lg px-6 pb-8"
                  style={{ backgroundColor: styles.cardBackground }}
                >
                  <div className="-mt-6">
                    <div>
                      <span
                        className="inline-flex items-center justify-center p-3 rounded-md shadow-lg"
                        style={{ backgroundColor: styles.accentColor }}
                      >
                        <FontAwesomeIcon
                          icon={faShareNodes}
                          className="text-white text-2xl"
                        />
                      </span>
                    </div>
                    <h3
                      className="mt-8 text-lg font-medium tracking-tight"
                      style={{ color: styles.textColor }}
                    >
                      Share & Engage
                    </h3>
                    <p
                      className="mt-5 text-base"
                      style={{ color: styles.secondaryTextColor }}
                    >
                      Share your campaign with your network and engage with
                      supporters through updates and messages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="pt-6">
                <div
                  className="flow-root rounded-lg px-6 pb-8"
                  style={{ backgroundColor: styles.cardBackground }}
                >
                  <div className="-mt-6">
                    <div>
                      <span
                        className="inline-flex items-center justify-center p-3 rounded-md shadow-lg"
                        style={{ backgroundColor: styles.accentColor }}
                      >
                        <FontAwesomeIcon
                          icon={faFlagCheckered}
                          className="text-white text-2xl"
                        />
                      </span>
                    </div>
                    <h3
                      className="mt-8 text-lg font-medium tracking-tight"
                      style={{ color: styles.textColor }}
                    >
                      Achieve Goals
                    </h3>
                    <p
                      className="mt-5 text-base"
                      style={{ color: styles.secondaryTextColor }}
                    >
                      Receive donations directly to your account and track your
                      progress towards your funding goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16" style={{ backgroundColor: styles.cardBackground }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="text-3xl font-extrabold sm:text-4xl"
              style={{ color: styles.textColor }}
            >
              Trusted by Thousands
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div style={{ backgroundColor: styles.cardBackground }}>
              <div className="p-5 text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: styles.textColor }}
                >
                  $50M+
                </div>
                <div
                  className="mt-1 text-base"
                  style={{ color: styles.secondaryTextColor }}
                >
                  Funds Raised
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: styles.cardBackground }}>
              <div className="p-5 text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: styles.textColor }}
                >
                  100K+
                </div>
                <div
                  className="mt-1 text-base"
                  style={{ color: styles.secondaryTextColor }}
                >
                  Campaigns
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: styles.cardBackground }}>
              <div className="p-5 text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: styles.textColor }}
                >
                  1M+
                </div>
                <div
                  className="mt-1 text-base"
                  style={{ color: styles.secondaryTextColor }}
                >
                  Supporters
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: styles.cardBackground }}>
              <div className="p-5 text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: styles.textColor }}
                >
                  95%
                </div>
                <div
                  className="mt-1 text-base"
                  style={{ color: styles.secondaryTextColor }}
                >
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="text-3xl font-extrabold sm:text-4xl"
              style={{ color: styles.textColor }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <dl className="space-y-6">
              <div
                className="px-4 py-6 rounded-lg"
                style={{ backgroundColor: styles.cardBackground }}
              >
                <dt
                  className="text-lg leading-6 font-medium"
                  style={{ color: styles.textColor }}
                >
                  How long does it take to create a campaign?
                </dt>
                <dd
                  className="mt-2 text-base"
                  style={{ color: styles.secondaryTextColor }}
                >
                  You can create a campaign in as little as 5 minutes. Our
                  intuitive platform guides you through each step of the
                  process.
                </dd>
              </div>

              <div
                className="px-4 py-6 rounded-lg"
                style={{ backgroundColor: styles.cardBackground }}
              >
                <dt
                  className="text-lg leading-6 font-medium"
                  style={{ color: styles.textColor }}
                >
                  What fees do you charge?
                </dt>
                <dd
                  className="mt-2 text-base"
                  style={{ color: styles.secondaryTextColor }}
                >
                  We charge a small platform fee of 5% on successful campaigns,
                  plus standard payment processing fees.
                </dd>
              </div>

              <div
                className="px-4 py-6 rounded-lg"
                style={{ backgroundColor: styles.cardBackground }}
              >
                <dt
                  className="text-lg leading-6 font-medium"
                  style={{ color: styles.textColor }}
                >
                  When do I receive my funds?
                </dt>
                <dd
                  className="mt-2 text-base"
                  style={{ color: styles.secondaryTextColor }}
                >
                  Funds are transferred to your account within 2-5 business days
                  after your campaign ends successfully.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: styles.accentColor }}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold w-[70%] tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your campaign?</span>
            <span className="block text-gray-200">
              Join thousands of successful fundraisers today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to={"/register"}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-custom bg-white hover:bg-gray-50"
                style={{ color: styles.accentColor }}
              >
                Start a Campaign
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to={"/"}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-opacity-60 hover:bg-opacity-70"
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

export default HowItWorks;
