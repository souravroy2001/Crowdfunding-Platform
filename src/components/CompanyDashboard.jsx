import React from "react";
import { useSelector } from "react-redux";
import CompanyNavbar from "./company-dashboard/CompanyNavbar";
import CompanyHeader from "./company-dashboard/CompanyHeader";
import MetricsGrid from "./company-dashboard/MetricsGrid";
import CampaignPerformance from "./company-dashboard/CampaignPerformance";
import EngagementMetrics from "./company-dashboard/EngagementMetrics";
import RecentActivity from "./company-dashboard/RecentActivity";
import TopSupporters from "./company-dashboard/TopSupporters";
import SocialMediaImpact from "./company-dashboard/SocialMediaImpact";
import CampaignUpdates from "./company-dashboard/CampaignUpdates";
import CampaignMilestones from "./company-dashboard/CampaignMilestones";

const defaultData = {
  companyName: "Tech Innovators Inc.",
  campaignTitle: "Next-Gen Clean Energy Solution",
  description:
    "Revolutionizing renewable energy with innovative solar technology",
  raised: 124580,
  goal: 250000,
  daysLeft: 45,
  supporters: 847,
  avgDonation: 147,
  teamMembers: [
    {
      name: "Sarah Johnson",
      role: "Campaign Manager",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ],
};

const CompanyDashboard = () => {
  const theme = useSelector((state) => state.toggleTheme);

  return (
    <div className={`min-h-screen ${theme ? "bg-gray-50" : "bg-gray-900"}`}>
      <CompanyNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="space-y-8">
          {/* Header Section */}
          <CompanyHeader {...defaultData} />

          {/* Metrics Grid */}
          <div className={`rounded-xl ${theme ? "bg-white" : "bg-gray-800"} shadow-sm overflow-hidden`}>
            <div className="p-6">
              <h2 className={`text-lg font-semibold ${theme ? "text-gray-900" : "text-white"}`}>
                Campaign Overview
              </h2>
              <div className="mt-4">
                <MetricsGrid />
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <CampaignPerformance />
              <EngagementMetrics />
              <CampaignUpdates />
              <CampaignMilestones />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <RecentActivity />
              <TopSupporters />
              <SocialMediaImpact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
