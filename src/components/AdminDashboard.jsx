import React, { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminLayout from "./admin-dashboard/AdminLayout";
import StatCards from "./admin-dashboard/StatCards";
import RevenueChart from "./admin-dashboard/RevenueChart";
import RecentActivities from "./admin-dashboard/RecentActivities";
import CampaignChart from "./admin-dashboard/CampaignChart";
import DemographicsChart from "./admin-dashboard/DemographicsChart";
import LatestDonations from "./admin-dashboard/LatestDonations";
import PendingApprovals from "./admin-dashboard/PendingApprovals";
import AdminCampaigns from "./admin-campaigns/AdminCampaigns";
import AdminCompanies from "./admin-dashboard/AdminCompanies";
import CompanyDetail from "./admin-dashboard/CompanyDetail";
import AdminDonations from "./admin-dashboard/AdminDonations";
import AdminUsers from "./admin-dashboard/AdminUsers";
import AdminAnalytics from "./admin-dashboard/AdminAnalytics";
import AdminReports from "./admin-dashboard/AdminReports";
import AdminSettings from "./admin-dashboard/AdminSettings";

// Loading component with theme-aware styling
const LoadingSpinner = () => {
  const toggleTheme = useSelector((state) => state.theme.toggleTheme);
  return (
    <div
      className={`flex items-center justify-center p-8 ${
        toggleTheme ? "text-[#bb86fc]" : "text-[#00bfa5]"
      }`}
    >
      <div className="w-8 h-8 border-4 border-current border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

// Dashboard Overview Component
const DashboardOverview = () => {
  const fadeInAnimation = "animate-fadeIn";
  const slideUpAnimation = "animate-slideUp";

  return (
    <div className={fadeInAnimation}>
      <StatCards />
      <div
        className={`mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 ${slideUpAnimation} animation-delay-200`}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <RevenueChart />
        </Suspense>
        <RecentActivities />
      </div>
      <div
        className={`mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 ${slideUpAnimation} animation-delay-400`}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <CampaignChart />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <DemographicsChart />
        </Suspense>
      </div>
      <div className={`mt-8 ${slideUpAnimation} animation-delay-600`}>
        <LatestDonations />
      </div>
      <div className={`mt-8 ${slideUpAnimation} animation-delay-600`}>
        <PendingApprovals />
      </div>
    </div>
  );
};

// Main Admin Dashboard Component with Routing
const AdminDashboard = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<DashboardOverview />} />
        <Route path="campaigns/*" element={<AdminCampaigns />} />
        <Route path="companies" element={<AdminCompanies />} />
        <Route path="companies/:id" element={<CompanyDetail />} />
        <Route path="donations" element={<AdminDonations />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminDashboard;
