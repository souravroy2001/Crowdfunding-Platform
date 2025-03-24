import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdCampaign,
  MdPeople,
  MdAnalytics,
  MdDescription,
  MdSettings,
  MdBusiness,
  MdAttachMoney,
} from "react-icons/md";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const toggleTheme = useSelector((state) => state.theme.darkMode);

  const navItems = [
    { path: "/admin", icon: <MdDashboard size={24} />, label: "Dashboard" },
    {
      path: "/admin/campaigns",
      icon: <MdCampaign size={24} />,
      label: "Campaigns",
    },
    {
      path: "/admin/companies",
      icon: <MdBusiness size={24} />,
      label: "Companies",
    },
    {
      path: "/admin/donations",
      icon: <MdAttachMoney size={24} />,
      label: "Donations",
    },
    { path: "/admin/users", icon: <MdPeople size={24} />, label: "Users" },
    {
      path: "/admin/analytics",
      icon: <MdAnalytics size={24} />,
      label: "Analytics",
    },
    {
      path: "/admin/reports",
      icon: <MdDescription size={24} />,
      label: "Reports",
    },
    {
      path: "/admin/settings",
      icon: <MdSettings size={24} />,
      label: "Settings",
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-64 ${
        !toggleTheme ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      } shadow-xl z-50 transition-colors duration-300`}
    >
      <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold">FundHive Admin</h2>
      </div>

      <nav className="flex flex-col mt-4 p-4 gap-3 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? !toggleTheme
                    ? "bg-[#00bfa5] text-white shadow-lg"
                    : "bg-[#00bfa5] text-white shadow-lg"
                  : `hover:bg-gray-100 hover:shadow-md ${
                      !toggleTheme
                        ? "hover:bg-gray-800 text-gray-300"
                        : "hover:bg-gray-100 text-gray-700"
                    }`
              }`}
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
