import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const theme = useSelector((state) => state.theme.darkMode);

  const backgroundColor = theme ? "#e9ebef" : "#1f2937";
  const textColor = theme ? "#1f2937" : "#e9ebef";
  const cardBackgroundColor = theme ? "#ffffff" : "#101828";
  const cardTextColor = theme ? "#4b5563" : "#d1d5db";
  const borderColor = theme ? "#e5e7eb" : "#374151";

  return (
    <main
      className="min-h-screen mt-[80px] flex flex-col"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Need Help? We've Got You Covered
          </h1>
          <p className="text-lg" style={{ color: cardTextColor }}>
            Find answers to common questions or reach out to our support team
            for assistance.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="What do you need help with?"
              className="w-full h-14 pl-12 pr-4 placeholder-gray-500 border focus:ring-2 focus:ring-custom focus:border-custom !rounded-button"
              style={{
                backgroundColor: cardBackgroundColor,
                color: textColor,
                borderColor: borderColor,
              }}
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="fas fa-search" style={{ color: cardTextColor }}></i>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: "fas fa-bullhorn",
              title: "Campaign Management",
              description:
                "Learn how to create and manage successful campaigns",
            },
            {
              icon: "fas fa-hand-holding-heart",
              title: "Donations",
              description:
                "Everything you need to know about donations and payments",
            },
            {
              icon: "fas fa-user-cog",
              title: "Account Setup",
              description:
                "Get help with your account settings and preferences",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border transition-colors hover:border-custom"
              style={{
                backgroundColor: cardBackgroundColor,
                borderColor: borderColor,
              }}
            >
              <div className="text-custom mb-4">
                <i className={`${card.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="mb-4" style={{ color: cardTextColor }}>
                {card.description}
              </p>
              <Link
                to="#"
                className="text-custom hover:text-custom/80 font-medium flex items-center"
              >
                Learn more
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "How do I create a new campaign?",
                answer:
                  "To create a new campaign, navigate to the Campaign Dashboard and click the 'Create Campaign' button. Follow the step-by-step wizard to set up your campaign details, goals, and content.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For specific regional payment methods, please contact our support team.",
              },
              {
                question: "How can I recover my password?",
                answer:
                  "Click the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to reset your password. Check your spam folder if you don't see the email.",
              },
              {
                question: "How do I contact customer support?",
                answer:
                  "You can reach our support team through live chat available 24/7, email at support@example.com, or visit our community forum for peer assistance.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: cardBackgroundColor,
                  borderColor: borderColor,
                }}
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p style={{ color: cardTextColor }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
          <button
            style={{
              backgroundColor: theme ? "#1f2937" : "#e9ebef",
              color: theme ? "#e9ebef" : "#1f2937",
            }}
            className="bg-custom px-6 py-3 !rounded-button flex items-center justify-center min-w-[200px] hover:bg-custom/90 transition-colors"
          >
            <i className="fas fa-comments mr-2"></i>
            Live Chat
            <span className="ml-2 w-2 h-2 bg-green-400 rounded-full"></span>
          </button>
          <button
            className="bg-white text-custom border border-custom px-6 py-3 !rounded-button flex items-center justify-center min-w-[200px] hover:bg-gray-50 transition-colors"
            style={{
              backgroundColor: cardBackgroundColor,
              borderColor: borderColor,
              color: textColor,
            }}
          >
            <i className="fas fa-users mr-2"></i>
            Visit Community Forum
          </button>
        </div>
      </div>
    </main>
  );
};

export default HelpCenter;
