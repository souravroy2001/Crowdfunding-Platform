import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const navigate = useNavigate();
  const emailRef = React.useRef(null);

  const backgroundColor = theme ? "#e9ebef" : "#1f2937";
  const textColor = theme ? "#1f2937" : "#e9ebef";
  const cardBackgroundColor = theme ? "#ffffff" : "#101828";
  const cardTextColor = theme ? "#4b5563" : "#d1d5db";

  function handleEmailSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    console.log("Email:", email);
  }

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 30000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  const [redirectTimeLeft, setRedirectTimeLeft] = useState(30);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setRedirectTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="min-h-screen mt-20 flex items-center justify-center px-4 py-16"
      style={{ backgroundColor }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Rocket Image */}
        <div className="mb-8">
          <img
            src="/coming-soon.jpg"
            alt="Coming Soon Illustration"
            className="mx-auto w-64 h-64 object-contain animate-bounce"
          />
        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in"
          style={{ color: textColor }}
        >
          Something Exciting is On the Way!
        </h1>

        {/* Description */}
        <p
          className="text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: cardTextColor }}
        >
          We're working hard to bring you this feature. Stay tuned for updates
          and be the first to experience what's next!
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-col items-center space-y-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4 text-center mb-8">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit) => (
              <div
                key={unit}
                className="p-4 w-24 sm:w-28 rounded-lg shadow-sm"
                style={{ backgroundColor: cardBackgroundColor }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{ color: textColor }}
                >
                  {timeLeft[unit.toLowerCase()].toString().padStart(2, "0")}
                </span>
                <p className="text-sm" style={{ color: cardTextColor }}>
                  {unit}
                </p>
              </div>
            ))}
          </div>

          {/* Email Input and Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
              style={{ backgroundColor: cardBackgroundColor, color: textColor }}
            />
            <button
              onClick={handleEmailSubmit}
              className="!rounded-button whitespace-nowrap bg-custom hover:bg-custom/90 text-white px-6 py-3 font-medium w-full sm:w-auto"
              style={{
                backgroundColor: theme ? "#1f2937" : "#e9ebef",
                color: theme ? "#e9ebef" : "#1f2937",
              }}
            >
              Notify Me
            </button>
          </div>
        </div>

        {/* Take Me Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="!rounded-button inline-flex items-center justify-center px-6 py-3 border border-gray-300 font-medium"
            style={{ backgroundColor: cardBackgroundColor, color: textColor }}
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Take Me Back
          </Link>
        </div>

        {/* Auto-Redirect Message */}
        <p className="text-sm mb-6" style={{ color: cardTextColor }}>
          Auto-redirect in <span id="countdown">{redirectTimeLeft}</span>{" "}
          seconds
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          {["twitter", "facebook", "instagram", "linkedin"].map((platform) => (
            <Link
              key={platform}
              to={"#"}
              className="text-gray-400 hover:text-custom"
            >
              <i className={`fab fa-${platform} text-xl`}></i>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ComingSoon;
