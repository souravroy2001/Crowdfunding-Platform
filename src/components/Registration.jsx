import React, { useEffect, useState } from "react";
import "../style/registration.css";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { registerCompany } from "../redux/features/companySlice";
import { registerAdmin } from "../redux/features/adminSlice";
import {
  registerOrLoginWithFacebook,
  registerOrLoginWithGoogle,
} from "../firebase/auth";
import { firestore } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [activeTab, setActiveTab] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("normal");
  const [emailValid, setEmailValid] = useState(true);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.darkMode);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const navigate = useNavigate();

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
    setEmailValid(emailRegex.test(email));
    setUserData({ ...userData, email });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (userData.username.length >= 5) {
        checkUsernameExists(userData.username);
      } else if (userData.username.length > 0) {
        setIsUsernameAvailable(false);
        toast.warning("Username must be at least 5 characters.");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [userData.username]);

  // Function to check if the username exists
  const checkUsernameExists = async (username) => {
    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      setIsUsernameAvailable(false);
      toast.error("Username already taken. Try another.");
    } else {
      setIsUsernameAvailable(true);
      toast.success("Username is available!");
    }
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

  function handleUserSubmit(event) {
    event.preventDefault();

    if (userData.fullName.trim() === "") {
      toast.error("Please enter your full name.");
      return;
    }

    if (userData.username.trim() === "") {
      toast.error("Please enter your username.");
      return;
    }

    if (!emailValid) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (passwordStrength === "weak" || passwordStrength === "medium") {
      toast.error("Password is too weak. Use a stronger password.");
      return;
    }

    if (!isUsernameAvailable) {
      toast.error("Username already taken. Try another.");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    dispatch(registerUser({ user: userData, navigate }));

    setUserData({
      fullName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
      role: "user",
    });
  }

  function generateAdminId(emailOrUsername) {
    const timestamp = Date.now().toString().slice(-4);
    const randomPart = Math.floor(100 + Math.random() * 900);
    return (
      emailOrUsername.substring(0, 3).toUpperCase() + timestamp + randomPart
    );
  }

  async function handleAdminSubmit(event) {
    event.preventDefault();

    const adminId = generateAdminId(adminData.emailOrUsername);

    const newAdminData = {
      ...adminData,
      adminId,
    };

    const isValidEmail = emailRegex.test(adminData.emailOrUsername);
    const isPasswordStrong = passwordRegex.test(adminData.password);

    if (!isValidEmail) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (!isPasswordStrong) {
      toast.error("Password is too weak. Use a stronger password.");
      return;
    }

    if (adminData.verificationCode !== "123456") {
      toast.warning("Invalid verification code");
      return;
    }

    const adminRegisterData = { ...newAdminData };
    dispatch(registerAdmin({ admin: adminRegisterData, navigate }));

    setAdminData({
      emailOrUsername: "",
      password: "",
      verificationCode: "",
      role: "admin",
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

    const isValidEmail = emailRegex.test(companyData.companyEmail);
    const isPasswordStrong =
      checkPasswordStrength(companyData.password) !== "weak" || "medium";

    if (!isValidEmail) {
      toast.error("Please enter a valid company email.");
      return;
    }

    if (!isPasswordStrong) {
      toast.error("Password is too weak. Use a stronger password.");
      return;
    }

    if (companyData.password !== companyData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (companyData.businessRegistrationNumber.length !== 15) {
      toast.error("Business registration number must be 15 digits.");
      return;
    }
    if (companyData.businessRegistrationNumber.includes("000000000000000")) {
      toast.error("Invalid business registration number.");
      return;
    }
    if (companyData.businessRegistrationNumber.includes("111111111111111")) {
      toast.error("Invalid business registration number.");
      return;
    }
    if (companyData.businessRegistrationNumber.includes("222222222222222")) {
      toast.error("Invalid business registration number.");
      return;
    }
    if (companyData.businessRegistrationNumber.includes("333333333333333")) {
      toast.error("Invalid business registration number.");
      return;
    }
    if (companyData.businessRegistrationNumber.includes("444444444444444")) {
      toast.error("Invalid business registration number.");
      return;
    }

    if (companyData.companyName.length < 5) {
      toast.error("Company name must be at least 5 characters long.");
      return;
    }
    if (companyData.adminContactName.trim() === "") {
      toast.error("Please enter admin name.");
      return;
    }
    if (companyData.adminPosition.trim() === "") {
      toast.error("Please enter your position.");
      return;
    }
    if (companyData.adminPosition.trim() === "") {
      toast.error("Please enter your position.");
      return;
    }

    dispatch(registerCompany({ company: newCompanyData, navigate }));

    setCompanyData({
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
  }

  // Active tab styles
  const login_page_tab_active = {
    color: theme ? "#000" : "#fff",
    borderBottom: `2px solid ${theme ? "#000" : "#fff"}`,
  };

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
        <div
          className="registration-hero-overlay"
          style={{ background: theme && "rgba(2, 12, 29, 0.664)" }}
        ></div>
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
      <div
        className="registration-form-section mt-20"
        style={{ background: !theme && "#1e2939" }}
      >
        <div className="registration-form-container">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <img
              src="/FundHive-logo.png"
              alt="FundHive Logo"
              className="w-[120px]"
            />
            <h1
              className="text-2xl font-semibold"
              style={{ color: !theme && "#fff" }}
            >
              Sign up to your account
            </h1>
          </div>

          {/* Tab Section */}
          <div className="registration-tab-section">
            <div
              className="registration-tab-container"
              style={{ borderBottom: !theme && "1px solid #333" }}
            >
              {/* Sign Up Tab */}
              <button
                style={{
                  color: !theme ? "#fff" : "#000",
                  ...(activeTab === "signup" && login_page_tab_active),
                }}
                className="registration-tab-button"
                onClick={() => handleTabClick("signup")}
                data-tab="signup"
              >
                <i className="fas fa-user-plus icon-before-registration"></i>{" "}
                Sign Up
              </button>

              {/* Admin Login Tab */}
              <button
                style={{
                  color: !theme ? "#ccc" : "#000",
                  ...(activeTab === "admin-login" && login_page_tab_active),
                }}
                className="registration-tab-button"
                onClick={() => handleTabClick("admin-login")}
                data-tab="admin-login"
              >
                <i className="fas fa-shield-alt icon-before-registration"></i>{" "}
                Admin
              </button>

              {/* Company Register Tab */}
              <button
                style={{
                  color: !theme ? "#ccc" : "#000",
                  ...(activeTab === "company-register" &&
                    login_page_tab_active),
                }}
                className="registration-tab-button"
                onClick={() => handleTabClick("company-register")}
                data-tab="company-register"
              >
                <i
                  className="fas fa-building icon-before-registration"
                  style={{ color: !theme ? "#ccc" : "#000" }}
                ></i>{" "}
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
            {/* Full Name Input */}
            <div className="registration-input-group">
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Full Name
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-user registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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

            {/* Email Address Input */}
            <div className="registration-input-group">
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Email Address
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-envelope registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: emailValid
                      ? !theme
                        ? "#00ff00"
                        : "#00ff00"
                      : !theme
                      ? "#ff0000"
                      : "#ff0000",
                    backgroundColor: !theme && "#1f2937",
                  }}
                  type="email"
                  name="email"
                  className="registration-input"
                  placeholder="Enter your email"
                  value={userData.email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </div>

            {/* Username Input */}
            <div className="registration-input-group">
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Username
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-at registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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

            {/* Password Input */}
            <div className="registration-input-group">
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Password
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-lock registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
                    style={{ color: !theme && "#fff" }}
                  ></i>
                </button>
              </div>
              {/* Password Strength Indicator */}
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
                <span
                  className="registration-strength-text"
                  style={{ color: !theme && "#fff" }}
                >
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

            {/* Confirm Password Input */}
            <div className="registration-input-group">
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Confirm Password
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-lock registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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

            {/* Terms & Conditions Checkbox */}
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
                <label
                  className="registration-checkbox-label"
                  style={{ color: !theme && "#fff" }}
                >
                  I agree to the Terms & Conditions
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="registration-submit-button"
              style={{
                backgroundColor: !theme && "#fff",
                color: !theme && "#1f2937",
                borderColor: !theme && "#ccc",
              }}
            >
              Create My FundHive Account
            </button>

            {/* Divider */}
            <div className="registration-divider">
              <div className="registration-divider-line"></div>
              <span
                className="registration-divider-text"
                style={{
                  color: !theme && "#fff",
                  backgroundColor: !theme && "#1f2937",
                }}
              >
                Or continue with
              </span>
            </div>

            {/* Social Buttons */}
            <div className="registration-social-buttons">
              <button
                onClick={handleGoogleAuth}
                type="button"
                className="registration-social-button"
                style={{
                  backgroundColor: !theme && "#1f2937",
                  color: !theme && "#fff",
                  borderColor: !theme && "#ccc",
                }}
              >
                <i className="fab fa-google"></i>
              </button>
              <button
                onClick={handleFacebookAuth}
                type="button"
                className="registration-social-button"
                style={{
                  backgroundColor: !theme && "#1f2937",
                  color: !theme && "#fff",
                  borderColor: !theme && "#ccc",
                }}
              >
                <i className="fab fa-facebook"></i>
              </button>
            </div>

            {/* Login Link */}
            <p
              className="registration-signup-text"
              style={{ color: !theme && "#fff" }}
            >
              Already with us?
              <Link
                to={"/sign-in"}
                className="registration-signup-link"
                style={{ color: !theme && "#fff" }}
              >
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
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Admin Email or Username
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-user registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Password
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-lock registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
                    style={{ color: !theme && "#fff" }}
                  ></i>
                </button>
              </div>
            </div>

            <div className="registration-input-group">
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Verification Code
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-shield-alt registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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

            <button
              type="submit"
              className="registration-submit-button"
              style={{
                backgroundColor: !theme && "#fff",
                color: !theme && "#1f2937",
                borderColor: !theme && "#ccc",
              }}
            >
              Admin Login
            </button>

            <p
              className="registration-signup-text"
              style={{ color: !theme && "#fff" }}
            >
              Already with us?
              <Link
                to={"/sign-in"}
                className="registration-signup-link"
                style={{ color: !theme && "#fff" }}
              >
                Log In
              </Link>
            </p>
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
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Company Name
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-building registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Company Email
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-envelope registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Business Registration Number
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-id-card registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Admin Contact Name
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-user registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Admin Position
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-briefcase registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Password
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-lock registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
                    style={{ color: !theme && "#fff" }}
                  ></i>
                </button>
              </div>
            </div>

            <div className="registration-input-group">
              <label
                className="registration-input-label"
                style={{ color: !theme && "#fff" }}
              >
                Confirm Password
              </label>
              <div className="registration-input-wrapper">
                <i
                  className="fas fa-lock registration-input-icon"
                  style={{ color: !theme && "#fff" }}
                ></i>
                <input
                  style={{
                    color: !theme && "#fff",
                    borderColor: !theme && "#ccc",
                    backgroundColor: !theme && "#1f2937",
                  }}
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
                <label
                  className="registration-checkbox-label"
                  style={{ color: !theme && "#fff" }}
                >
                  I agree to the Company Terms & Agreement
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="registration-submit-button"
              style={{
                backgroundColor: !theme && "#fff",
                color: !theme && "#1f2937",
                borderColor: !theme && "#ccc",
              }}
            >
              Register My Company
            </button>

            <p
              className="registration-signup-text"
              style={{ color: !theme && "#fff" }}
            >
              Already with us?
              <Link
                to={"/sign-in"}
                className="registration-signup-link"
                style={{ color: !theme && "#fff" }}
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
