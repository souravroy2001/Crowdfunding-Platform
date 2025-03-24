import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import NotificationsPage from "./components/NotificationsPage";
import CompanyDashboard from "./components/CompanyDashboard";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateCampaign from "./components/CreateCampaign";
import DonationForm from "./components/DonationForm";
import BrowseProjects from "./components/BrowseProjects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HowItWorks from "./components/HowItWorks";
import SuccessStories from "./components/SuccessStories";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import MediaPressHub from "./components/MediaPressHub";
import Impact from "./components/Impact";
import HelpCenter from "./components/HelpCenter";
import CreatorResources from "./components/CreatorResources";
import CommunityGuidelines from "./components/CommunityGuidelines";
import ContactUs from "./components/ContactUs";
import ComingSoon from "./components/ComingSoon";
import PrivateRoute from "./routes/PrivateRoute";
import CampaignDetails from "./components/CampaignDetails";

function App() {
  const toggleTheme = useSelector((state) => state.theme.toggleTheme);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isCompanyRoute = location.pathname.startsWith("/company");

  return (
    <div
      className={`min-h-screen ${
        toggleTheme ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300 relative`}
    >
      {!isAdminRoute && !isCompanyRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<MediaPressHub />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/creator-resources" element={<CreatorResources />} />
        <Route path="/guidelines" element={<CommunityGuidelines />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Route>

        <Route
          element={<PrivateRoute allowedRoles={["user", "company", "admin"]} />}
        >
          <Route path="/notifications" element={<NotificationsPage />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={["company"]} />}>
          <Route path="/company" element={<CompanyDashboard />} />
          <Route path="/company/create-campaign" element={<CreateCampaign />} />
        </Route>

        <Route path="/browse-projects" element={<BrowseProjects />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/donate/:id" element={<DonationForm />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>

      {!isAdminRoute && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={toggleTheme ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
