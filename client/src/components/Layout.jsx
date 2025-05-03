import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  // Example logic: check if user is on a student/teacher dashboard page
  const isDashboard = location.pathname.includes('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Lab Tracker</h1>
        <div className="space-x-4">
          {isDashboard ? (
            <>
              <Link to="/settings" className="text-gray-700 hover:text-blue-500">
                Settings
              </Link>
            </>
          ) : (
            <>
              
            </>
          )}
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link to="/help" className="text-gray-700 hover:text-blue-500">
            Help
          </Link>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
