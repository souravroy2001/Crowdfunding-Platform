import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { FaRocket, FaShieldAlt, FaUsers, FaChartLine } from "react-icons/fa";
import "../style/home.css";
import {
  featuredProjects,
  featuresData,
  howItWorksData,
  statsData,
  heroData,
  campaignCategories,
  successStories,
  pricingPlansData,
  platformStatsData,
  videoTestimonialsData,
  newsUpdatesData,
  faqData,
} from "../data/homeData";

function Home() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <main
      className={`min-h-screen mt-[80px] ${
        theme ? "bg-[#f9fafb]" : "bg-[#1f2937]"
      } transition-colors duration-200`}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/head-main-image.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 ${
              theme
                ? "bg-gradient-to-r from-[#e9ebef4f]/80 to-[#e9ebef4f]/90"
                : "bg-gradient-to-r from-[#1f29377f]/80 to-[#1f29377f]/90"
            } transition-colors duration-300`}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 animate-fadeIn">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight animate-slideUp">
              {heroData.title.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < heroData.title.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-100 mb-10 leading-relaxed font-light animate-slideUp animation-delay-200">
              {heroData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-slideUp animation-delay-400">
              {heroData.buttons.map((button, index) => (
                <Link
                  key={index}
                  to={button.link}
                  className={`inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg transition-all duration-300 w-full sm:w-auto hover:scale-101 ${
                    button.primary
                      ? theme
                        ? "bg-[#1f2937] text-white hover:bg-[#1f2937]/90 shadow-lg hover:shadow-[#1f2937]/30"
                        : "bg-[#f9fafb] text-[#1f2937] hover:bg-[#f9fafb]/90 shadow-lg hover:shadow-[#f9fafb]/30"
                      : theme
                      ? "bg-white text-[#1f2937] hover:bg-gray-100 shadow-lg hover:shadow-gray-200/50"
                      : "bg-[#1f2937] text-white hover:bg-[#1f2937]/90 shadow-lg hover:shadow-gray-700/30"
                  }`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`py-16 sm:py-24 ${
          theme ? "bg-[#f9fafb]" : "bg-[#1f2937]"
        } transition-colors duration-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeIn">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                theme ? "text-gray-900" : "text-white"
              } transition-colors duration-200`}
            >
              {featuresData.title}
            </h2>
            <p
              className={`text-lg ${
                theme ? "text-gray-600" : "text-gray-300"
              } transition-colors duration-200`}
            >
              {featuresData.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.items?.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-200 ${
                  theme
                    ? "bg-gray-50 hover:bg-gray-100 shadow-sm"
                    : "bg-gray-700 hover:bg-gray-600 shadow-md"
                }`}
              >
                <div
                  className={`mb-4 ${
                    theme ? "text-gray-900" : "text-[#00bfa5]"
                  }`}
                >
                  {React.createElement(feature.icon)}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme ? "text-gray-900" : "text-white"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={`${theme ? "text-gray-600" : "text-gray-300"}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="stats-grid">
          {statsData?.map((stat, index) => (
            <div className="stat-item" key={index}>
              <p
                className={theme ? "text-gray-900" : "text-white"}
                style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0" }}
              >
                {stat.value}
              </p>
              <p
                className={theme ? "text-gray-900" : "text-white"}
                style={{ fontSize: "1rem", margin: "0" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-header">
          <h2 className={theme ? "text-gray-900" : "text-white"}>
            Featured Projects
          </h2>
          <Link to={"/browse-projects"} className="view-all">
            View All <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        <div className="featured-grid">
          {featuredProjects?.map((project, index) => (
            <Link key={index} to={`/campaign/${index}`}>
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} />
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${project.funded}%` }}
                    ></div>
                  </div>
                  <div className="funding-info">
                    <span>${project.amount.toLocaleString()}</span>
                    <span>{project.funded}% funded</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="how-it-works-container">
        <div className="section-header">
          <h2 className={theme ? "text-gray-900" : "text-white"}>
            {howItWorksData?.title}
          </h2>
          <p className={theme ? "text-gray-900" : "text-white"}>
            {howItWorksData?.subtitle}
          </p>
        </div>
        <div className="grid-container">
          {howItWorksData?.steps?.map((step, index) => (
            <div className="step" key={index}>
              <div className="icon-container">
                <img src={step.image} alt={step.title} />
              </div>
              <h3 className={theme ? "text-gray-900" : "text-white"}>
                {step.title}
              </h3>
              <p className={theme ? "text-gray-900" : "text-white"}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="discover-projects-container">
        <section
          className="campaign-categories animate-slideUp animation-delay-600"
          style={{ background: !theme && "#1f2937" }}
        >
          <div className="text-center">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                !theme ? "text-white" : "text-gray-900"
              }`}
            >
              {campaignCategories.title}
            </h2>
            <p
              className={`text-lg ${
                !theme ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {campaignCategories.subtitle}
            </p>
            <Link
              to="/browse-projects"
              className={`inline-flex items-center mt-4 text-base font-medium transition-all duration-300 hover:translate-x-1 ${
                theme
                  ? "text-[#00bfa5] hover:text-[#009688]"
                  : "text-[#00bfa5] hover:text-[#009688]"
              }`}
            >
              View All Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4">
            {campaignCategories.categories.map((category, index) => (
              <Link
                key={index}
                to={"/browse-projects"}
                className={`category-box p-6 rounded-xl transition-all duration-300 transform hover:scale-101 group ${
                  theme
                    ? "bg-white shadow-lg hover:shadow-xl"
                    : "bg-gray-800 shadow-lg hover:shadow-gray-700/50"
                }`}
              >
                <div
                  className={`mb-4 text-3xl transition-transform duration-300 group-hover:scale-103 ${
                    category.color === "primary"
                      ? theme
                        ? "text-[#00bfa5]"
                        : "text-[#00bfa5]"
                      : category.color === "secondary"
                      ? theme
                        ? "text-[#009688]"
                        : "text-[#009688]"
                      : category.color === "success"
                      ? theme
                        ? "text-green-500"
                        : "text-green-400"
                      : theme
                      ? "text-blue-500"
                      : "text-blue-400"
                  }`}
                >
                  {React.createElement(category.icon)}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    theme
                      ? "text-gray-900 group-hover:text-[#00bfa5]"
                      : "text-gray-900 group-hover:text-[#00bfa5]"
                  }`}
                >
                  {category.title}
                </h3>
                <p
                  className={`transition-colors duration-300 ${
                    theme
                      ? "text-gray-600 group-hover:text-[#009688]"
                      : "text-gray-600 group-hover:text-[#009688]"
                  }`}
                >
                  {category.projectCount} Projects
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>

      <section className="success-stories py-16 animate-slideUp animation-delay-800">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              theme ? "text-gray-900" : "text-white"
            }`}
          >
            {successStories.title}
          </h2>
          <p className={`text-lg ${theme ? "text-gray-700" : "text-gray-300"}`}>
            {successStories.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
          {successStories.stories.map((story, index) => (
            <div
              key={index}
              className={`story-box rounded-xl p-6 transition-all duration-300 transform hover:scale-101 ${
                theme
                  ? "bg-white shadow-lg hover:shadow-xl"
                  : "bg-gray-800 shadow-lg hover:shadow-gray-700/50"
              }`}
            >
              <div className="story-header flex items-center gap-4 mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3
                    className={`text-xl font-semibold ${
                      theme ? "text-gray-900" : "text-gray-900"
                    }`}
                  >
                    {story.name}
                  </h3>
                  <p
                    className={`${theme ? "text-[#00bfa5]" : "text-[#00bfa5]"}`}
                  >
                    {story.category}
                  </p>
                </div>
              </div>
              <p
                className={`mb-6 leading-relaxed ${
                  theme ? "text-gray-600" : "text-gray-900"
                }`}
              >
                "{story.testimonial}"
              </p>
              <div className="flex gap-1">
                {[...Array(story.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      theme ? "text-[#00bfa5]" : "text-[#00bfa5]"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/success-stories"
            className={`inline-flex items-center text-base font-medium transition-all duration-300 hover:translate-x-1 ${
              theme
                ? "text-[#00bfa5] hover:text-[#009688]"
                : "text-[#00bfa5] hover:text-[#009688]"
            }`}
          >
            View More Success Stories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section
        className={`py-16 ${
          theme ? "bg-gray" : "bg-[#1f2937]"
        } transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                theme ? "text-gray-900" : "text-white"
              }`}
            >
              {videoTestimonialsData.title}
            </h2>
            <p
              className={`text-lg ${theme ? "text-gray-600" : "text-gray-300"}`}
            >
              {videoTestimonialsData.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonialsData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  theme
                    ? "bg-white shadow-lg hover:shadow-xl"
                    : "bg-gray-800 shadow-lg hover:shadow-gray-700/50"
                }`}
              >
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={testimonial.videoUrl}
                    title={testimonial.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      theme ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {testimonial.title}
                  </h3>
                  <p className={`${theme ? "text-gray-600" : "text-gray-300"}`}>
                    {testimonial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="plans-section">
        <section
          className={`py-20 px-4 ${theme ? "bg-[#f9fafb]" : "bg-[#1f2937]"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <h2
                className={`text-4xl font-bold mb-4 ${
                  theme ? "text-gray-900" : "text-white"
                }`}
              >
                {pricingPlansData.title}
              </h2>
              <p
                className={`text-xl ${
                  theme ? "text-gray-600" : "text-gray-300"
                }`}
              >
                {pricingPlansData.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp animation-delay-200">
              {pricingPlansData.plans.map((plan) => (
                <div
                  key={plan.title}
                  className={`rounded-xl p-8 transition-all duration-300 transform hover:scale-101 ${
                    theme
                      ? `bg-white shadow-lg hover:shadow-xl ${
                          plan.featured ? "ring-2 ring-[#1f2937]" : ""
                        }`
                      : `bg-[#1f2937] shadow-lg hover:shadow-gray-700/50 ${
                          plan.featured ? "ring-2 ring-[#f9fafb]" : ""
                        }`
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      theme ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  <div
                    className={`text-3xl font-bold mb-6 ${
                      theme ? "text-[#00bfa5]" : "text-[#00bfa5]"
                    }`}
                  >
                    {typeof plan.price === "number"
                      ? `$${plan.price}`
                      : plan.price}
                    {plan.period && (
                      <span
                        className={`text-lg ml-1 ${
                          theme ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className={`w-5 h-5 mr-3 ${
                            theme ? "text-[#00bfa5]" : "text-[#009688]"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          className={theme ? "text-gray-600" : "text-gray-300"}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link to={"/coming-soon"}>
                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        theme
                          ? `bg-[#009688] hover:bg-[#00bfa5] text-white`
                          : `bg-[#009688] hover:bg-[#00bfa5] text-white`
                      }`}
                    >
                      {plan?.buttonText}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section
        className={`py-16 ${
          theme ? "bg-gray" : "bg-gray-800"
        } transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                theme ? "text-gray-900" : "text-white"
              }`}
            >
              {newsUpdatesData.title}
            </h2>
            <p
              className={`text-lg ${theme ? "text-gray-600" : "text-gray-300"}`}
            >
              {newsUpdatesData.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsUpdatesData.news.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-101 ${
                  theme
                    ? "bg-white shadow-lg hover:shadow-xl"
                    : "bg-gray-800 shadow-lg hover:shadow-gray-700/50"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      theme ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mb-4 ${
                      theme ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className={`inline-flex items-center text-base font-medium transition-all duration-300 hover:translate-x-1 ${
                      theme
                        ? "text-[#00bfa5] hover:text-[#009688]"
                        : "text-[#00bfa5] hover:text-[#009688]"
                    }`}
                  >
                    Read More <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`${theme ? "bg-[#f9fafb" : "bg-[#1e2939]"}`}>
        <section className="mobile-app-section" id="mobile-app">
          <div className="mobile-app-container">
            {/* <!-- Content --> */}
            <div className="mobile-app-content">
              <h2 className={theme ? "text-gray-900" : "text-white"}>
                Download Our Mobile App
              </h2>
              <p className={theme ? "text-gray-900" : "text-[#ccc]"}>
                Manage your campaigns on the go with our powerful mobile
                application. Stay connected and in control anytime, anywhere.
              </p>

              {/* <!-- App Buttons --> */}
              <div className="mobile-app-buttons">
                <Link to={"/"} className="app-store-button">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                  />
                </Link>
                <Link to={"/"} className="play-store-button">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Play Store"
                  />
                </Link>
              </div>

              {/* <!-- Features --> */}
              <div
                className={`mobile-app-features ${
                  theme ? "text-gray-900" : "text-[#ccc]"
                }`}
              >
                <h3 className={theme ? "text-gray-900" : "text-[#fff]"}>
                  Key Features:
                </h3>
                <ul>
                  <li>
                    <i className="fas fa-check-circle"></i> Real-time campaign
                    analytics
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Instant
                    notifications
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Secure payment
                    processing
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Direct messaging
                    with backers
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Image --> */}
            <div className="mobile-app-image">
              <img
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mobile App"
              />
            </div>
          </div>
        </section>
        <section
          className={` py-16 ${
            theme ? "bg-[#f9fafb]" : "bg-[#1f2937]"
          } transition-colors duration-300`}
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className={`text-3xl sm:text-4xl font-bold mb-4 ${
                  theme ? "text-gray-900" : "text-white"
                }`}
              >
                {faqData.title}
              </h2>
              <p
                className={`text-lg ${
                  theme ? "text-gray-600" : "text-gray-300"
                }`}
              >
                {faqData.subtitle}
              </p>
            </div>
            <div className="space-y-4">
              {faqData.questions.map((faq, index) => (
                <details
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 ${
                    theme
                      ? "bg-white shadow-lg hover:shadow-xl"
                      : "bg-gray-800 shadow-lg hover:shadow-gray-700/50"
                  }`}
                >
                  <summary
                    className={`font-semibold cursor-pointer flex items-center justify-between ${
                      theme ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {faq.question}
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        theme ? "text-[#00bfa5]" : "text-[#00bfa5]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p
                    className={`mt-4 ${
                      theme ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`py-16 ${
            theme ? "bg-gray" : "bg-gray-800"
          } transition-colors duration-300`}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                theme ? "text-gray-900" : "text-white"
              }`}
            >
              Ready to bring your idea to life?
            </h2>
            <p
              className={`text-lg mb-8 ${
                theme ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Join thousands of successful creators who have turned their dreams
              into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="px-8 py-4 rounded-lg text-lg font-medium bg-[#00bfa5] hover:bg-[#009688] text-white transition-all duration-300"
              >
                Start Your Campaign
              </Link>
              <Link
                to="/"
                className={`px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                  theme
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
