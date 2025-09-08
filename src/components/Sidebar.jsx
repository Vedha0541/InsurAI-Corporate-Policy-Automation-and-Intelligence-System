import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-blue-700 to-indigo-900 text-white p-4 fixed">
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
          <Link to="/verify" className="hover:underline">
            Verify
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="hover:underline">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
