import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ currentUser }) => {
  const location = useLocation();

  // Hide sidebar on login/signup pages
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-blue-700 to-indigo-900 text-white p-6 fixed">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/policies" className="hover:underline">
            Policies
          </Link>
        </li>
        <li>
          <Link to="/applications" className="hover:underline">
            My Applications
          </Link>
        </li>
        <li>
          <Link to="/verify" className="hover:underline">
            Verify
          </Link>
        </li>
        {/* Show admin-only links */}
        {currentUser?.role === "admin" && (
          <>
            <li>
              <Link to="/admin/dashboard" className="hover:underline">
                Admin Dashboard
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
