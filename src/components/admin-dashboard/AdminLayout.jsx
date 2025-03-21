import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = ({ children }) => {
  const toggleTheme = useSelector((state) => state.theme.toggleTheme);
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className={`min-h-screen ${toggleTheme ? 'bg-gray-900' : 'bg-gray-50'} font-sans`}>
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`md:hidden fixed top-3 left-4 z-50 p-2 rounded-lg transition-colors duration-300 ${
          toggleTheme
            ? 'text-gray-200 hover:bg-gray-700'
            : 'text-gray-600 hover:bg-gray-200'
        }`}
      >
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="text-xl" />
      </button>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : ''}`}>
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-6 pt-24">
          {children}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
