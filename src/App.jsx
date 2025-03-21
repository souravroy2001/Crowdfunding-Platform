import { Route, Routes } from "react-router";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CampaignDetails from "./components/CampaignDetails";
import CreateCampaign from "./components/CreateCampaign";
import DonationForm from "./components/DonationForm";
import CompanyDashboard from "./components/CompanyDashboard";
import UserDashboard from "./components/UserDashboard";
import BrowseProjects from "./components/BrowseProjects";
import Notifications from "./components/user-dashboard/Notifications";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<UserDashboard />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/browse-projects" element={<BrowseProjects />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/donate/:id" element={<DonationForm />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />
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
        theme="colored"
      />
    </div>
  );
}

export default App;
