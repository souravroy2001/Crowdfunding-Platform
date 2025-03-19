import React, { useState } from "react";
import "../style/login.css";
import { Link } from "react-router";
import { useDispatch } from "react-redux";

function Login() {
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  // State for user, admin, and company forms
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [adminData, setAdminData] = useState({
    adminId: "",
    password: "",
    rememberMe: false,
  });

  const [companyData, setCompanyData] = useState({
    companyCode: "",
    password: "",
    rememberMe: false,
  });

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle user input change
  const handleUserInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle admin input change
  const handleAdminInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAdminData({
      ...adminData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle company input change
  const handleCompanyInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCompanyData({
      ...companyData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  function handleUserSubmit(event) {
    event.preventDefault();
    console.log(userData);

    setUserData({
      email: "",
      password: "",
      rememberMe: false,
    });
  }

  function handleAdminSubmit(event) {
    event.preventDefault();
    console.log(adminData);
    setAdminData({
      adminId: "",
      password: "",
      rememberMe: false,
    });
  }

  function handleCompanySubmit(event) {
    event.preventDefault();
    console.log(companyData);
    setCompanyData({
      companyCode: "",
      password: "",
      rememberMe: false,
    });
  }

  return (
    <div className="login-page-container">
      {/* Hero Section */}
      <div className="login-page-hero-section">
        <div className="login-page-hero-image-container">
          <img
            src="/login-hero.jpg"
            alt="Hero Image"
            className="login-page-hero-image"
          />
        </div>
        <div className="login-page-hero-overlay"></div>
        <div className="login-page-hero-content">
          <h2 className="login-page-hero-title">
            {activeTab === "signin"
              ? "Unlock the Power of Giving & Creating."
              : activeTab === "admin-login"
              ? "Secure Access for Platform Guardians."
              : "Sign In & Amplify Your Corporate Impact."}
          </h2>
          <p className="login-page-hero-subtitle">
            {activeTab === "signin"
              ? "Join a thriving community of dreamers, change makers, and backers. Log in to start funding or launching impactful campaigns today"
              : activeTab === "admin-login"
              ? "Manage campaigns, monitor activities, and keep FundHive running smoothly. Authorized access only."
              : "Log in to your FundHive corporate account and support groundbreaking projects, manage employee donations, and track your contributions."}
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="login-page-form-section">
        <div className="login-page-form-container">
          {/* Logo Section */}
          <div className="login-page-logo-section">
            <img
              src="/FundHive-logo.png"
              alt="FundHive Logo"
              className="login-page-logo"
            />
            <h1 className="login-page-form-title">Sign in to your account</h1>
          </div>

          {/* Tab Section */}
          <div className="login-page-tab-section">
            <div className="login-page-tab-container">
              <button
                className={`login-page-tab-button ${
                  activeTab === "signin" ? "login-page-tab-active" : ""
                }`}
                onClick={() => handleTabClick("signin")}
                data-tab="signin"
              >
                <i className="fas fa-user-plus icon-before-login"></i> User
              </button>
              {/* Admin Login Tab */}
              <button
                className={`login-page-tab-button ${
                  activeTab === "admin-login" ? "login-page-tab-active" : ""
                }`}
                onClick={() => handleTabClick("admin-login")}
                data-tab="admin-login"
              >
                <i className="fas fa-shield-alt icon-before-login"></i> Admin
              </button>
              {/* Company Registration Tab */}
              <button
                className={`login-page-tab-button ${
                  activeTab === "company-login" ? "login-page-tab-active" : ""
                }`}
                onClick={() => handleTabClick("company-login")}
                data-tab="company-login"
              >
                <i className="fas fa-building icon-before-login"></i> Company
              </button>
            </div>
          </div>

          {/* Forms for Each Tab */}
          <form
            onSubmit={handleUserSubmit}
            className={`login-page-form ${
              activeTab !== "signin" ? "hidden" : ""
            }`}
            id="user-form"
          >
            <div className="login-page-input-group">
              <label className="login-page-input-label">Email address</label>
              <div className="login-page-input-wrapper">
                <i className="fas fa-envelope login-page-input-icon"></i>
                <input
                  type="email"
                  className="login-page-input"
                  placeholder="Enter your email"
                  required
                  name="email"
                  value={userData.email}
                  onChange={handleUserInputChange}
                />
              </div>
            </div>

            <div className="login-page-input-group">
              <label className="login-page-input-label">Password</label>
              <div className="login-page-input-wrapper">
                <i className="fas fa-lock login-page-input-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  className="login-page-input"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={userData.password}
                  onChange={handleUserInputChange}
                />
                <button
                  type="button"
                  className="login-page-password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    } login-page-input-icon-eye`}
                  ></i>
                </button>
              </div>
            </div>

            <div className="login-page-remember-forgot">
              <div className="login-page-remember-me">
                <input
                  type="checkbox"
                  className="login-page-checkbox"
                  name="rememberMe"
                  checked={userData.rememberMe}
                  onChange={handleUserInputChange}
                />
                <label className="login-page-checkbox-label">Remember me</label>
              </div>
              <Link to={"/"} className="login-page-forgot-password">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="login-page-submit-button">
              Sign in
            </button>
          </form>

          <form
            onSubmit={handleAdminSubmit}
            className={`login-page-form ${
              activeTab !== "admin-login" ? "hidden" : ""
            }`}
            id="admin-form"
          >
            <div className="login-page-input-group">
              <label className="login-page-input-label">Admin ID</label>
              <div className="login-page-input-wrapper">
                <i className="fas fa-id-card login-page-input-icon"></i>
                <input
                  type="text"
                  className="login-page-input"
                  placeholder="Enter your admin ID"
                  required
                  name="adminId"
                  value={adminData.adminId}
                  onChange={handleAdminInputChange}
                />
              </div>
            </div>

            <div className="login-page-input-group">
              <label className="login-page-input-label">Password</label>
              <div className="login-page-input-wrapper">
                <i className="fas fa-lock login-page-input-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  className="login-page-input"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={adminData.password}
                  onChange={handleAdminInputChange}
                />
                <button
                  type="button"
                  className="login-page-password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    } login-page-input-icon-eye`}
                  ></i>
                </button>
              </div>
            </div>

            <div className="login-page-remember-forgot">
              <div className="login-page-remember-me">
                <input
                  type="checkbox"
                  className="login-page-checkbox"
                  name="rememberMe"
                  checked={adminData.rememberMe}
                  onChange={handleAdminInputChange}
                />
                <label className="login-page-checkbox-label">Remember me</label>
              </div>
              <Link to={"/"} className="login-page-forgot-password">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="login-page-submit-button">
              Sign in
            </button>
          </form>

          <form
            onSubmit={handleCompanySubmit}
            className={`login-page-form ${
              activeTab !== "company-login" ? "hidden" : ""
            }`}
            id="company-form"
          >
            <div className="login-page-input-group">
              <label className="login-page-input-label">Company Code</label>
              <div className="login-page-input-wrapper">
                <i className="fas fa-building login-page-input-icon"></i>
                <input
                  type="text"
                  className="login-page-input"
                  placeholder="Enter your company code"
                  required
                  name="companyCode"
                  value={companyData.companyCode}
                  onChange={handleCompanyInputChange}
                />
              </div>
            </div>

            <div className="login-page-input-group">
              <label className="login-page-input-label">Password</label>
              <div className="login-page-input-wrapper">
                <i className="fas fa-lock login-page-input-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  className="login-page-input"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={companyData.password}
                  onChange={handleCompanyInputChange}
                />
                <button
                  type="button"
                  className="login-page-password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    } login-page-input-icon-eye`}
                  ></i>
                </button>
              </div>
            </div>

            <div className="login-page-remember-forgot">
              <div className="login-page-remember-me">
                <input
                  type="checkbox"
                  className="login-page-checkbox"
                  name="rememberMe"
                  checked={companyData.rememberMe}
                  onChange={handleCompanyInputChange}
                />
                <label className="login-page-checkbox-label">Remember me</label>
              </div>
              <Link to={"/"} className="login-page-forgot-password">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="login-page-submit-button">
              Sign in
            </button>
          </form>

          {/* Divider and Social Buttons */}
          <div className="login-page-divider">
            <div className="login-page-divider-line"></div>
            <span className="login-page-divider-text">Or continue with</span>
          </div>

          <div className="login-page-social-buttons">
            <button type="button" className="login-page-social-button">
              <i className="fab fa-google"></i>
            </button>
            <button type="button" className="login-page-social-button">
              <i className="fab fa-facebook"></i>
            </button>
          </div>

          {/* Signup Text */}
          <p className="login-page-signin-text">
            New to FundHive?
            <Link to={"/register"} className="login-page-signin-link">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
