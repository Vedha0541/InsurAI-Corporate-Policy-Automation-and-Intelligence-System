import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // ✅ add toggle

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          Insur<span className="text-yellow-300 dark:text-indigo-400">AI</span>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-yellow-300 transition">
            Dashboard
          </Link>
          <Link to="/policies" className="hover:text-yellow-300 transition">
            Policies
          </Link>
          <Link to="/verify" className="hover:text-yellow-300 transition">
            Verify
          </Link>
          <Link to="/login" className="hover:text-yellow-300 transition">
            Login
          </Link>
          <Link to="/register" className="hover:text-yellow-300 transition">
            Register
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="ml-6">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
