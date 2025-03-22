import React from "react";
import { Routes, Route } from "react-router-dom";
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
import AdminCampaigns from "./components/admin-campaigns/AdminCampaigns";
import AdminCompanies from "./components/admin-dashboard/AdminCompanies";
import CompanyDetail from "./components/admin-dashboard/CompanyDetail";
import AdminDonations from "./components/admin-dashboard/AdminDonations";
import AdminUsers from "./components/admin-dashboard/AdminUsers";
import AdminAnalytics from "./components/admin-dashboard/AdminAnalytics";
import AdminReports from "./components/admin-dashboard/AdminReports";
import AdminSettings from "./components/admin-dashboard/AdminSettings";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const toggleTheme = useSelector((state) => state.theme.toggleTheme);
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  const isCompanyRoute = window.location.pathname.startsWith("/company");

  return (
    <div
      className={`min-h-screen ${
        toggleTheme ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300 relative`}
    >
      {!isAdminRoute && !isCompanyRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="campaigns/*" element={<AdminCampaigns />} />
          <Route path="companies" element={<AdminCompanies />} />
          <Route path="companies/:id" element={<CompanyDetail />} />
          <Route path="donations" element={<AdminDonations />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/notifications" element={<NotificationsPage />} />

        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/company/create-campaign" element={<CreateCampaign />} />

        <Route path="/browse-projects" element={<BrowseProjects />} />
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
