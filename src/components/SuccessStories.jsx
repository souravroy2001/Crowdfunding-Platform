import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const SuccessStories = () => {
  const theme = useSelector((state) => state.theme.darkMode);

  const styles = {
    backgroundColor: theme ? "#e9ebef" : "#1f2937",
    textColor: theme ? "#1f2937" : "#e9ebef",
    cardBackground: theme ? "#ffffff" : "#374151",
    secondaryTextColor: theme ? "#6b7280" : "#9ca3af",
    accentColor: theme ? "#4b5563" : "#ccc",
    borderColor: theme ? "#e5e7eb" : "#4b5563",
    buttonBg: theme ? "#ffffff" : "#374151",
    buttonText: theme ? "#6b7280" : "#d1d5db",
    buttonHover: theme ? "#f9fafb" : "#4b5563",
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
                    Real People. Real Impact.
                  </span>
                  <span
                    className="block text-white"
                    style={{ color: styles.accentColor }}
                  >
                    Real Change
                  </span>
                </h1>
                <p
                  className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                  style={{ color: styles.secondaryTextColor }}
                >
                  Meet the creators and backers who turned ideas into reality
                  with FundHive. Read inspiring stories and see what's possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Success Stories Section */}
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: styles.textColor }}
            >
              Featured Success Stories
            </h2>
          </div>

          <div className="mt-12">
            {/* Filter buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                className="px-4 py-2 text-sm font-medium border rounded-md"
                style={{
                  backgroundColor: styles.buttonBg,
                  color: styles.buttonText,
                  borderColor: styles.borderColor,
                }}
              >
                All Stories
              </button>
              <button
                className="px-4 py-2 text-sm font-medium border rounded-md"
                style={{
                  backgroundColor: styles.buttonBg,
                  color: styles.buttonText,
                  borderColor: styles.borderColor,
                }}
              >
                Tech
              </button>
              <button
                className="px-4 py-2 text-sm font-medium border rounded-md"
                style={{
                  backgroundColor: styles.buttonBg,
                  color: styles.buttonText,
                  borderColor: styles.borderColor,
                }}
              >
                Health
              </button>
              <button
                className="px-4 py-2 text-sm font-medium border rounded-md"
                style={{
                  backgroundColor: styles.buttonBg,
                  color: styles.buttonText,
                  borderColor: styles.borderColor,
                }}
              >
                Social Causes
              </button>
            </div>

            {/* Story Cards */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Story 1 */}
              <div className="pt-6">
                <div
                  className="flow-root rounded-lg px-6 pb-8"
                  style={{ backgroundColor: styles.cardBackground }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    className="w-full h-48 object-cover rounded-t-lg"
                    alt="Tech Innovation Project"
                  />
                  <div className="p-6">
                    <h3
                      className="text-lg font-medium"
                      style={{ color: styles.textColor }}
                    >
                      Tech Innovation Project
                    </h3>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: styles.secondaryTextColor }}
                    >
                      Raised $250,000
                    </p>
                    <p
                      className="mt-3 text-base"
                      style={{ color: styles.secondaryTextColor }}
                    >
                      'FundHive helped us bring our innovative product to
                      market. The support was incredible!'
                    </p>
                    <div className="mt-4">
                      <Link
                        to={"/about-us"}
                        style={{ color: styles.accentColor }}
                        className="hover:text-opacity-90"
                      >
                        Read Full Story →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="pt-6">
                <div
                  className="flow-root rounded-lg px-6 pb-8"
                  style={{ backgroundColor: styles.cardBackground }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    className="w-full h-48 object-cover rounded-t-lg"
                    alt="Healthcare Initiative"
                  />
                  <div className="p-6">
                    <h3
                      className="text-lg font-medium"
                      style={{ color: styles.textColor }}
                    >
                      Healthcare Initiative
                    </h3>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: styles.secondaryTextColor }}
                    >
                      Raised $500,000
                    </p>
                    <p
                      className="mt-3 text-base"
                      style={{ color: styles.secondaryTextColor }}
                    >
                      'We transformed local healthcare access thanks to our
                      amazing supporters.'
                    </p>
                    <div className="mt-4">
                      <Link
                        to={"/about-us"}
                        style={{ color: styles.accentColor }}
                        className="hover:text-opacity-90"
                      >
                        Read Full Story →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 3 */}
              <div className="pt-6">
                <div
                  className="flow-root rounded-lg px-6 pb-8"
                  style={{ backgroundColor: styles.cardBackground }}
                >
                  <img
                    src="https://picsum.photos/400/200?random=1"
                    className="w-full h-48 object-cover rounded-t-lg"
                    alt="Community Project"
                  />
                  <div className="p-6">
                    <h3
                      className="text-lg font-medium"
                      style={{ color: styles.textColor }}
                    >
                      Community Project
                    </h3>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: styles.secondaryTextColor }}
                    >
                      Raised $150,000
                    </p>
                    <p
                      className="mt-3 text-base"
                      style={{ color: styles.secondaryTextColor }}
                    >
                      'Our community came together to create lasting change.
                      Thank you, FundHive!'
                    </p>
                    <div className="mt-4">
                      <Link
                        to={"/about-us"}
                        style={{ color: styles.accentColor }}
                        className="hover:text-opacity-90"
                      >
                        Read Full Story →
                      </Link>
                    </div>
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
                  style={{ color: styles.accentColor }}
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
                  style={{ color: styles.accentColor }}
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
                  style={{ color: styles.accentColor }}
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
                  style={{ color: styles.accentColor }}
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
      <div
        style={{
          backgroundColor: styles.backgroundColor,
          color: styles.secondaryTextColor,
        }}
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2
            style={{ color: styles.textColor }}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            <span className="block">Ready to start your campaign?</span>
            <span className="block">
              Join thousands of successful fundraisers today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to={"/company/create-campaign"}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base text-white font-medium rounded-md text-custom bg-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                Start Your Own Success Story
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to={"/about-us"}
                style={{ color: styles.textColor }}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-opacity-60 hover:bg-opacity-70"
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

export default SuccessStories;
