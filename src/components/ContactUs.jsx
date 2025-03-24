import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const theme = useSelector((state) => state.theme.darkMode); // true = light mode, false = dark mode

  const backgroundColor = theme ? "bg-[#e9ebef]" : "bg-[#1f2937]";
  const textColor = theme ? "text-[#1f2937]" : "text-[#e9ebef]";
  const cardBackgroundColor = theme ? "bg-white" : "bg-[#101828]";
  const cardTextColor = theme ? "text-gray-600" : "text-gray-300";
  const buttonBackgroundColor = theme ? "bg-custom" : "bg-[#1f2937]";
  const buttonTextColor = theme ? "text-white" : "text-white";

  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add further logic here, like sending the data to an API
  };

  return (
    <main className={`${backgroundColor} mt-20 min-h-screen`}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Contact Us Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold ${textColor} mb-4`}>
            We're Here to Help. Let's Connect.
          </h1>
          <p className={`text-lg ${cardTextColor} max-w-2xl mx-auto`}>
            Have questions or feedback? Reach out to us—we'd love to hear from
            you.
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className={`block text-sm font-medium ${textColor}`}
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      style={{
                        color: theme ? "#1f2937" : "#e9ebef",
                      }}
                      className={`!rounded-button p-4 shadow-sm block w-full border-gray-300 focus:ring-custom focus:border-custom ${cardBackgroundColor}`}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${textColor}`}
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      style={{
                        color: theme ? "#1f2937" : "#e9ebef",
                      }}
                      onChange={handleInputChange}
                      className={`!rounded-button shadow-sm p-4 block w-full border-gray-300 focus:ring-custom focus:border-custom ${cardBackgroundColor}`}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium ${textColor}`}
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      style={{
                        color: theme ? "#1f2937" : "#e9ebef",
                      }}
                      className={`!rounded-button shadow-sm p-4 block w-full border-gray-300 focus:ring-custom focus:border-custom ${cardBackgroundColor}`}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Billing Question">Billing Question</option>
                      <option value="Partnership Opportunity">
                        Partnership Opportunity
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${textColor}`}
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      style={{
                        color: theme ? "#1f2937" : "#e9ebef",
                      }}
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`!rounded-button shadow-sm p-4 block w-full border-gray-300 focus:ring-custom focus:border-custom ${cardBackgroundColor}`}
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    style={{
                      backgroundColor: theme ? "#1f2937" : "#e9ebef",
                      color: theme ? "#e9ebef" : "#1f2937",
                    }}
                    type="submit"
                    className={`!rounded-button w-full p-7 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom`}
                  >
                    Submit Your Inquiry
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div
              className={`${cardBackgroundColor} shadow !rounded-button overflow-hidden divide-y divide-gray-200`}
            >
              {/* Office Hours */}
              <div className="px-6 py-5">
                <h3 className={`text-lg font-medium ${textColor}`}>
                  Office Hours
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className={cardTextColor}>Monday - Friday</span>
                    <span className={textColor}>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={cardTextColor}>Saturday</span>
                    <span className={textColor}>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={cardTextColor}>Sunday</span>
                    <span className={textColor}>Closed</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="px-6 py-5">
                <h3 className={`text-lg font-medium ${textColor}`}>
                  Response Time
                </h3>
                <p className={`mt-2 text-sm ${cardTextColor}`}>
                  We typically respond within 24 hours during business hours.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="px-6 py-5">
                <h3 className={`text-lg font-medium ${textColor}`}>
                  Connect With Us
                </h3>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className={`text-gray-400 hover:text-custom`}>
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className={`text-gray-400 hover:text-custom`}>
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className={`text-gray-400 hover:text-custom`}>
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="#" className={`text-gray-400 hover:text-custom`}>
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className={`!rounded-button ${buttonBackgroundColor} ${buttonTextColor} p-4 shadow-lg hover:bg-custom/90 transition-colors`}
        >
          <i className="fas fa-comments text-xl"></i>
        </button>
      </div>
    </main>
  );
};

export default ContactUs;
