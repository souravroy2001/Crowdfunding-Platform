import React, { useState } from "react";
import "../style/login.css";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/features/authSlice";
import { loginCompany } from "../redux/features/companySlice";
import { loginAdmin } from "../redux/features/adminSlice";
import {
  registerOrLoginWithFacebook,
  registerOrLoginWithGoogle,
} from "../firebase/auth";
import { toast } from "react-toastify";

function Login() {
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleGoogleAuth = async () => {
    try {
      await registerOrLoginWithGoogle();
    } catch (error) {
      toast.error("Google Auth Error:", error.message);
    }
  };

  const handleFacebookAuth = async () => {
    try {
      await registerOrLoginWithFacebook();
    } catch (error) {
      toast.error("Facebook Auth Error:", error.message);
    }
  };

  async function handleUserLogin(event) {
    event.preventDefault();

    dispatch(
      loginUser({
        email: userData.email,
        password: userData.password,
        provider: "email",
        navigate,
      })
    );

    setUserData({
      email: "",
      password: "",
      rememberMe: false,
    });
  }

  async function handleAdminLogin(event) {
    event.preventDefault();

    dispatch(loginAdmin({ ...adminData, navigate }));

    setAdminData({
      adminId: "",
      password: "",
      rememberMe: false,
    });
  }

  async function handleCompanyLogin(event) {
    event.preventDefault();

    dispatch(loginCompany({ ...companyData, navigate }));

    setCompanyData({
      companyCode: "",
      password: "",
      rememberMe: false,
    });
  }

  // Active tab styles
  const login_page_tab_active = {
    color: theme ? "#000" : "#fff",
    borderBottom: `2px solid ${theme ? "#000" : "#fff"}`,
  };

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
        <div
          className="login-page-hero-overlay"
          style={{ background: theme && "rgba(2, 12, 29, 0.664)" }}
        ></div>
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
      <div
        className="login-page-form-section"
        style={{ background: !theme && "#1e2939" }}
      >
        <div className="login-page-form-container">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center mb-2">
            <img
              src="/FundHive-logo.png"
              alt="FundHive Logo"
              className="w-[120px] mb-4"
            />
            <h1
              className="text-2xl font-semibold"
              style={{ color: !theme && "#fff" }}
            >
              Signin to your account
            </h1>
          </div>

          {/* Tab Section */}
          <div className="login-page-tab-section">
            <div
              className="login-page-tab-container"
              style={{ borderBottom: !theme && "1px solid #333" }}
            >
              {/* User Login Tab */}
              <button
                style={{
                  color: !theme ? "#fff" : "#000",
                  ...(activeTab === "signin" && login_page_tab_active),
                }}
                className="login-page-tab-button"
                onClick={() => handleTabClick("signin")}
                data-tab="signin"
              >
                <i className="fas fa-user-plus icon-before-login"></i> User
              </button>

              {/* Admin Login Tab */}
              <button
                style={{
                  color: !theme ? "#ccc" : "#000",
                  ...(activeTab === "admin-login" && login_page_tab_active),
                }}
                className="login-page-tab-button"
                onClick={() => handleTabClick("admin-login")}
                data-tab="admin-login"
              >
                <i className="fas fa-shield-alt icon-before-login"></i> Admin
              </button>

              {/* Company Login Tab */}
              <button
                style={{
                  color: !theme ? "#ccc" : "#000",
                  ...(activeTab === "company-login" && login_page_tab_active),
                }}
                className="login-page-tab-button"
                onClick={() => handleTabClick("company-login")}
                data-tab="company-login"
              >
                <i
                  className="fas fa-building icon-before-login"
                  style={{ color: !theme ? "#ccc" : "#000" }}
                ></i>{" "}
                Company
              </button>
            </div>
          </div>

          {/* Forms for Each Tab */}
          <form
            onSubmit={handleUserLogin}
            className={`login-page-form ${
              activeTab !== "signin" ? "hidden" : ""
            }`}
            id="user-form"
          >
            {/* Email Input */}
            <div className="login-page-input-group">
              <label
                className="login-page-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Email address
              </label>
              <div className="login-page-input-wrapper">
                <i
                  className="fas fa-envelope login-page-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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

            {/* Password Input */}
            <div className="login-page-input-group">
              <label
                className="login-page-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Password
              </label>
              <div className="login-page-input-wrapper">
                <i
                  className="fas fa-lock login-page-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
                    style={{ color: !theme && "#fff" }}
                  ></i>
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="login-page-remember-forgot">
              <div className="login-page-remember-me">
                <input
                  type="checkbox"
                  className="login-page-checkbox"
                  name="rememberMe"
                  checked={userData.rememberMe}
                  onChange={handleUserInputChange}
                />
                <label
                  className="login-page-checkbox-label"
                  style={{ color: !theme && "#fff" }}
                >
                  Remember me
                </label>
              </div>
              <Link
                to={"/"}
                className="login-page-forgot-password"
                style={{ color: !theme && "#fff" }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="login-page-submit-button"
              style={{
                backgroundColor: !theme && "#fff",
                color: !theme && "#000",
                borderColor: !theme && "#ccc",
              }}
            >
              Sign in
            </button>

            {/* Divider and Social Buttons */}
            <div className="login-page-divider">
              <div className="login-page-divider-line"></div>
              <span
                className="login-page-divider-text"
                style={{
                  color: !theme && "#fff",
                  backgroundColor: !theme && "#1e2939",
                }}
              >
                Or continue with
              </span>
            </div>

            {/* Social Buttons */}
            <div className="login-page-social-buttons">
              <button
                onClick={handleGoogleAuth}
                type="button"
                className="login-page-social-button"
                style={{
                  backgroundColor: !theme ? "#1f2937" : "#fff",
                  color: !theme ? "#fff" : "#000",
                  borderColor: !theme ? "#ccc" : "#000",
                }}
              >
                <i className="fab fa-google"></i>
              </button>
              <button
                onClick={handleFacebookAuth}
                type="button"
                className="login-page-social-button"
                style={{
                  backgroundColor: !theme ? "#1f2937" : "#fff",
                  color: !theme ? "#fff" : "#000",
                  borderColor: !theme ? "#ccc" : "#000",
                }}
              >
                <i className="fab fa-facebook"></i>
              </button>
            </div>

            {/* Signup Text */}
            <p
              className="login-page-signin-text"
              style={{ color: !theme ? "#fff" : "#000" }}
            >
              New to FundHive?
              <Link
                to={"/register"}
                className="login-page-signin-link"
                style={{ color: !theme ? "#fff" : "#000" }}
              >
                Create an account
              </Link>
            </p>
          </form>

          <form
            onSubmit={handleAdminLogin}
            className={`login-page-form ${
              activeTab !== "admin-login" ? "hidden" : ""
            }`}
            id="admin-form"
          >
            {/* Admin ID Input */}
            <div className="login-page-input-group">
              <label
                className="login-page-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Admin ID
              </label>
              <div className="login-page-input-wrapper">
                <i
                  className="fas fa-id-card login-page-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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

            {/* Password Input */}
            <div className="login-page-input-group">
              <label
                className="login-page-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Password
              </label>
              <div className="login-page-input-wrapper">
                <i
                  className="fas fa-lock login-page-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
                    style={{ color: !theme && "#fff" }}
                  ></i>
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="login-page-remember-forgot">
              <div className="login-page-remember-me">
                <input
                  type="checkbox"
                  className="login-page-checkbox"
                  name="rememberMe"
                  checked={adminData.rememberMe}
                  onChange={handleAdminInputChange}
                />
                <label
                  className="login-page-checkbox-label"
                  style={{ color: !theme && "#fff" }}
                >
                  Remember me
                </label>
              </div>
              <Link
                to={"/"}
                className="login-page-forgot-password"
                style={{ color: !theme && "#fff" }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="login-page-submit-button"
              style={{
                backgroundColor: !theme && "#fff",
                color: !theme && "#000",
                borderColor: !theme && "#ccc",
              }}
            >
              Sign in
            </button>
            {/* Signup Text */}
            <p
              className="login-page-signin-text"
              style={{ color: !theme ? "#fff" : "#000" }}
            >
              New to FundHive?
              <Link
                to={"/register"}
                className="login-page-signin-link"
                style={{ color: !theme ? "#fff" : "#000" }}
              >
                Create an account
              </Link>
            </p>
          </form>

          <form
            onSubmit={handleCompanyLogin}
            className={`login-page-form ${
              activeTab !== "company-login" ? "hidden" : ""
            }`}
            id="company-form"
          >
            {/* Company Code Input */}
            <div className="login-page-input-group">
              <label
                className="login-page-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Company Code
              </label>
              <div className="login-page-input-wrapper">
                <i
                  className="fas fa-building login-page-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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

            {/* Password Input */}
            <div className="login-page-input-group">
              <label
                className="login-page-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Password
              </label>
              <div className="login-page-input-wrapper">
                <i
                  className="fas fa-lock login-page-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
                    style={{ color: !theme && "#fff" }}
                  ></i>
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="login-page-remember-forgot">
              <div className="login-page-remember-me">
                <input
                  type="checkbox"
                  className="login-page-checkbox"
                  name="rememberMe"
                  checked={companyData.rememberMe}
                  onChange={handleCompanyInputChange}
                />
                <label
                  className="login-page-checkbox-label"
                  style={{ color: !theme && "#fff" }}
                >
                  Remember me
                </label>
              </div>
              <Link
                to={"/"}
                className="login-page-forgot-password"
                style={{ color: !theme && "#fff" }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="login-page-submit-button"
              style={{
                backgroundColor: !theme && "#fff",
                color: !theme && "#000",
                borderColor: !theme && "#ccc",
              }}
            >
              Sign in
            </button>
            {/* Signup Text */}
            <p
              className="login-page-signin-text"
              style={{ color: !theme ? "#fff" : "#000" }}
            >
              New to FundHive?
              <Link
                to={"/register"}
                className="login-page-signin-link"
                style={{ color: !theme ? "#fff" : "#000" }}
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
