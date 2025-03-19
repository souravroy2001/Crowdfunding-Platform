import React, { useState } from "react";
import "../style/registration.css";
import { Link } from "react-router";
import { useDispatch } from "react-redux";

function Registration() {
  const [activeTab, setActiveTab] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("normal");
  const [emailValid, setEmailValid] = useState(true);
  const dispatch = useDispatch();

  // State for user, admin, and company forms
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    role: "user",
  });

  const [adminData, setAdminData] = useState({
    emailOrUsername: "",
    password: "",
    verificationCode: "",
    role: "admin",
  });

  const [companyData, setCompanyData] = useState({
    companyName: "",
    companyEmail: "",
    businessRegistrationNumber: "",
    adminContactName: "",
    adminPosition: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    role: "company",
  });

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Check password strength
  const checkPasswordStrength = (password) => {
    const passwordRegex = {
      weak: /^.{0,6}$/,
      medium: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/,
      strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{10,}$/,
    };

    if (passwordRegex.strong.test(password)) {
      return "strong";
    } else if (passwordRegex.medium.test(password)) {
      return "medium";
    } else {
      return "weak";
    }
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const strength = checkPasswordStrength(password);
    setPasswordStrength(strength);
    setUserData({ ...userData, password });
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
    setUserData({ ...userData, email });
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
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
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
      fullName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
    });
  }

  function generateAdminId(emailOrUsername) {
    const timestamp = Date.now().toString().slice(-4);
    const randomPart = Math.floor(100 + Math.random() * 900);
    return (
      emailOrUsername.substring(0, 3).toUpperCase() + timestamp + randomPart
    );
  }

  function handleAdminSubmit(event) {
    event.preventDefault();

    const adminId = generateAdminId(adminData.emailOrUsername);

    const newAdminData = {
      ...adminData,
      adminId,
    };

    console.log(newAdminData);

    setAdminData({
      emailOrUsername: "",
      password: "",
      verificationCode: "",
    });
  }

  function generateCompanyCode(companyName) {
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    return companyName.substring(0, 3).toUpperCase() + randomPart;
  }

  function handleCompanySubmit(event) {
    event.preventDefault();

    const companyCode = generateCompanyCode(
      companyData.companyName,
      companyData.businessRegistrationNumber
    );

    const newCompanyData = {
      ...companyData,
      companyCode,
    };

    console.log(newCompanyData);

    setCompanyData({
      companyName: "",
      companyEmail: "",
      businessRegistrationNumber: "",
      adminContactName: "",
      adminPosition: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
    });
  }

  return (
    <div className="registration-container">
      {/* Hero Section */}
      <div className="registration-hero-section">
        <div className="registration-hero-image-container">
          <img
            src="/login-hero.jpg"
            alt="Hero Image"
            className="registration-hero-image"
          />
        </div>
        <div className="registration-hero-overlay"></div>
        <div className="registration-hero-content">
          <h2 className="registration-hero-title">
            {activeTab === "signup"
              ? "Your Journey to Impact Starts Here."
              : activeTab === "admin-login"
              ? "Join FundHive’s Admin Team."
              : "Fuel Innovation. Make a Difference."}
          </h2>
          <p className="registration-hero-subtitle">
            {activeTab === "signup"
              ? "Create your FundHive account and turn ideas into reality. Whether you're a creator, donor, or supporter—you're part of something bigger."
              : activeTab === "admin-login"
              ? "Admins are the backbone of FundHive. Apply for access to moderate campaigns, verify fundraisers, and ensure platform integrity."
              : "Join FundHive as a corporate partner. Support groundbreaking projects, match employee donations, and amplify your impact."}
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="registration-form-section">
        <div className="registration-form-container">
          {/* Logo Section */}
          <div className="registration-logo-section">
            <img
              src="/FundHive-logo.png"
              alt="FundHive Logo"
              className="registration-logo"
            />
            <h1 className="registration-form-title">Sign up to your account</h1>
          </div>

          {/* Tab Section */}
          <div className="registration-tab-section">
            <div className="registration-tab-container">
              <button
                className={`registration-tab-button ${
                  activeTab === "signup" ? "registration-tab-active" : ""
                }`}
                onClick={() => handleTabClick("signup")}
                data-tab="signup"
              >
                <i className="fas fa-user-plus icon-before-registration"></i>{" "}
                Sign Up
              </button>
              <button
                className={`registration-tab-button ${
                  activeTab === "admin-login" ? "registration-tab-active" : ""
                }`}
                onClick={() => handleTabClick("admin-login")}
                data-tab="admin-login"
              >
                <i className="fas fa-shield-alt icon-before-registration"></i>{" "}
                Admin Login
              </button>
              <button
                className={`registration-tab-button ${
                  activeTab === "company-register"
                    ? "registration-tab-active"
                    : ""
                }`}
                onClick={() => handleTabClick("company-register")}
                data-tab="company-register"
              >
                <i className="fas fa-building icon-before-registration"></i>{" "}
                Company
              </button>
            </div>
          </div>

          {/* Signup Form */}
          <form
            onSubmit={handleUserSubmit}
            className={`registration-form ${
              activeTab !== "signup" ? "hidden" : ""
            }`}
            id="signup-form"
          >
            <div className="registration-input-group">
              <label className="registration-input-label">Full Name</label>
              <div className="registration-input-wrapper">
                <i className="fas fa-user registration-input-icon"></i>
                <input
                  type="text"
                  name="fullName"
                  className="registration-input"
                  placeholder="Enter your full name"
                  value={userData.fullName}
                  onChange={handleUserInputChange}
                  required
                />
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">Email Address</label>
              <div className="registration-input-wrapper">
                <i className="fas fa-envelope registration-input-icon"></i>
                <input
                  type="email"
                  name="email"
                  className="registration-input"
                  placeholder="Enter your email"
                  value={userData.email}
                  onChange={handleEmailChange}
                  style={{
                    borderColor: emailValid ? "#00ff00" : "#ff0000",
                  }}
                  required
                />
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">Username</label>
              <div className="registration-input-wrapper">
                <i className="fas fa-at registration-input-icon"></i>
                <input
                  type="text"
                  name="username"
                  className="registration-input"
                  placeholder="Choose a username"
                  value={userData.username}
                  onChange={handleUserInputChange}
                  required
                />
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">Password</label>
              <div className="registration-input-wrapper">
                <i className="fas fa-lock registration-input-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="registration-input"
                  placeholder="Enter your password"
                  value={userData.password}
                  onChange={handlePasswordChange}
                  required
                />
                <button
                  type="button"
                  className="registration-password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    } registration-input-icon-eye`}
                  ></i>
                </button>
              </div>
              <div className="registration-password-strength-indicator">
                <div
                  className="registration-strength-bar"
                  style={{
                    width:
                      passwordStrength === "normal"
                        ? "0%"
                        : passwordStrength === "weak"
                        ? "33%"
                        : passwordStrength === "medium"
                        ? "66%"
                        : "100%",
                    backgroundColor:
                      passwordStrength === "normal"
                        ? "gray"
                        : passwordStrength === "weak"
                        ? "#ff0000"
                        : passwordStrength === "medium"
                        ? "#ffa500"
                        : "#00ff00",
                  }}
                ></div>
                <span className="registration-strength-text">
                  {passwordStrength === "normal"
                    ? "Normal"
                    : passwordStrength === "weak"
                    ? "Weak"
                    : passwordStrength === "medium"
                    ? "Medium"
                    : passwordStrength === "strong" && "Strong"}
                </span>
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">
                Confirm Password
              </label>
              <div className="registration-input-wrapper">
                <i className="fas fa-lock registration-input-icon"></i>
                <input
                  type="password"
                  name="confirmPassword"
                  className="registration-input"
                  placeholder="Confirm your password"
                  value={userData.confirmPassword}
                  onChange={handleUserInputChange}
                  required
                />
              </div>
            </div>

            <div className="registration-remember-forgot">
              <div className="registration-remember-me">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="registration-checkbox"
                  checked={userData.rememberMe}
                  onChange={handleUserInputChange}
                  required
                />
                <label className="registration-checkbox-label">
                  I agree to the Terms & Conditions
                </label>
              </div>
            </div>

            <button type="submit" className="registration-submit-button">
              Create My FundHive Account
            </button>

            <div className="registration-divider">
              <div className="registration-divider-line"></div>
              <span className="registration-divider-text">
                Or continue with
              </span>
            </div>

            <div className="registration-social-buttons">
              <button type="button" className="registration-social-button">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="registration-social-button">
                <i className="fab fa-facebook"></i>
              </button>
            </div>

            <p className="registration-signup-text">
              Already with us?
              <Link to={"/sign-in"} className="registration-signup-link">
                Log In
              </Link>
            </p>
          </form>

          {/* Admin Login Form */}
          <form
            onSubmit={handleAdminSubmit}
            className={`registration-form ${
              activeTab !== "admin-login" ? "hidden" : ""
            }`}
            id="admin-login-form"
          >
            <div className="registration-input-group">
              <label className="registration-input-label">
                Admin Email or Username
              </label>
              <div className="registration-input-wrapper">
                <i className="fas fa-user registration-input-icon"></i>
                <input
                  type="text"
                  name="emailOrUsername"
                  className="registration-input"
                  placeholder="Enter your email or username"
                  value={adminData.emailOrUsername}
                  onChange={handleAdminInputChange}
                  required
                />
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">Password</label>
              <div className="registration-input-wrapper">
                <i className="fas fa-lock registration-input-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="registration-input"
                  placeholder="Enter your password"
                  value={adminData.password}
                  onChange={handleAdminInputChange}
                  required
                />
                <button
                  type="button"
                  className="registration-password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    } registration-input-icon-eye`}
                  ></i>
                </button>
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">
                Verification Code
              </label>
              <div className="registration-input-wrapper">
                <i className="fas fa-shield-alt registration-input-icon"></i>
                <input
                  type="text"
                  name="verificationCode"
                  className="registration-input"
                  placeholder="Enter Verification code"
                  value={adminData.verificationCode}
                  onChange={handleAdminInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="registration-submit-button">
              Admin Login
            </button>
          </form>

          {/* Company Registration Form */}
          <form
            onSubmit={handleCompanySubmit}
            className={`registration-form ${
              activeTab !== "company-register" ? "hidden" : ""
            }`}
            id="company-register-form"
          >
            <div className="registration-input-group">
              <label className="registration-input-label">Company Name</label>
              <div className="registration-input-wrapper">
                <i className="fas fa-building registration-input-icon"></i>
                <input
                  type="text"
                  name="companyName"
                  className="registration-input"
                  placeholder="Enter company name"
                  value={companyData.companyName}
                  onChange={handleCompanyInputChange}
                  required
                />
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">Company Email</label>
              <div className="registration-input-wrapper">
                <i className="fas fa-envelope registration-input-icon"></i>
                <input
                  type="email"
                  name="companyEmail"
                  className="registration-input"
                  placeholder="Enter company email"
                  value={companyData.companyEmail}
                  onChange={handleCompanyInputChange}
                  required
                />
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">
                Business Registration Number (Optional)
              </label>
              <div className="registration-input-wrapper">
                <i className="fas fa-id-card registration-input-icon"></i>
                <input
                  type="text"
                  name="businessRegistrationNumber"
                  className="registration-input"
                  placeholder="Enter registration number"
                  value={companyData.businessRegistrationNumber}
                  onChange={handleCompanyInputChange}
                />
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">
                Admin Contact Name
              </label>
              <div className="registration-input-wrapper">
                <i className="fas fa-user registration-input-icon"></i>
                <input
                  type="text"
                  name="adminContactName"
                  className="registration-input"
                  placeholder="Enter admin name"
                  value={companyData.adminContactName}
                  onChange={handleCompanyInputChange}
                  required
                />
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">Admin Position</label>
              <div className="registration-input-wrapper">
                <i className="fas fa-briefcase registration-input-icon"></i>
                <input
                  type="text"
                  name="adminPosition"
                  className="registration-input"
                  placeholder="Enter admin position"
                  value={companyData.adminPosition}
                  onChange={handleCompanyInputChange}
                  required
                />
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">Password</label>
              <div className="registration-input-wrapper">
                <i className="fas fa-lock registration-input-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="registration-input"
                  placeholder="Enter password"
                  value={companyData.password}
                  onChange={handleCompanyInputChange}
                  required
                />
                <button
                  type="button"
                  className="registration-password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    } registration-input-icon-eye`}
                  ></i>
                </button>
              </div>
            </div>

            <div className="registration-input-group">
              <label className="registration-input-label">
                Confirm Password
              </label>
              <div className="registration-input-wrapper">
                <i className="fas fa-lock registration-input-icon"></i>
                <input
                  type="password"
                  name="confirmPassword"
                  className="registration-input"
                  placeholder="Confirm password"
                  value={companyData.confirmPassword}
                  onChange={handleCompanyInputChange}
                  required
                />
              </div>
            </div>

            <div className="registration-remember-forgot">
              <div className="registration-remember-me">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="registration-checkbox"
                  checked={companyData.rememberMe}
                  onChange={handleCompanyInputChange}
                  required
                />
                <label className="registration-checkbox-label">
                  I agree to the Company Terms & Agreement
                </label>
              </div>
            </div>

            <button type="submit" className="registration-submit-button">
              Register My Company
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
