import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import UserProfile from "./user-dashboard/UserProfile";
import ActiveCampaigns from "./user-dashboard/ActiveCampaigns";
import Notifications from "./user-dashboard/Notifications";
import RecentActivity from "./user-dashboard/RecentActivity";
import DonationSummary from "./user-dashboard/DonationSummary";
import ImpactStories from "./user-dashboard/ImpactStories";
import Achievements from "./user-dashboard/Achievements";
import UpcomingEvents from "./user-dashboard/UpcomingEvents";

const UserDashboard = () => {
  const theme = useSelector((state) => state.toggleTheme);

  return (
    <div className={`min-h-screen flex flex-col ${theme ? "bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50" : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"} transition-all duration-300`}>
      <Navbar />
      <main className="flex-1 py-8 lg:py-10">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {/* Left Sidebar - 20% */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 lg:top-10 space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-xl ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                  <div className="p-5 sm:p-6 lg:p-8">
                    <UserProfile />
                  </div>
                </div>
                <div className="bg-white/85 dark:bg-gray-800/85 backdrop-blur-sm rounded-2xl shadow-md ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="p-5 sm:p-6">
                    <Achievements />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - 60% */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8">
              <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-xl ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                  <div className="p-5 sm:p-6 lg:p-8">
                    <DonationSummary />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-xl ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                  <div className="p-5 sm:p-6 lg:p-8">
                    <ImpactStories />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
                <div className="md:col-span-3">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-xl ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 h-full">
                    <div className="p-5 sm:p-6 lg:p-8">
                      <UpcomingEvents />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
                  <div className="bg-white/85 dark:bg-gray-800/85 backdrop-blur-sm rounded-2xl shadow-md ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="p-5 sm:p-6">
                      <Notifications />
                    </div>
                  </div>
                  <div className="bg-white/85 dark:bg-gray-800/85 backdrop-blur-sm rounded-2xl shadow-md ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="p-5 sm:p-6">
                      <ActiveCampaigns />
                    </div>
                  </div>
                  <div className="bg-white/85 dark:bg-gray-800/85 backdrop-blur-sm rounded-2xl shadow-md ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="p-5 sm:p-6">
                      <RecentActivity />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - 20% */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 lg:top-10">
                <div className="bg-white/85 dark:bg-gray-800/85 backdrop-blur-sm rounded-2xl shadow-md ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full">
                  <div className="p-5 sm:p-6">
                    {/* Empty for now - could be used for additional content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
