import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-insurance.jpg"; // 👈 keep in src/assets/

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-b from-[#1A202C] to-[#2D3748] text-[#E2E8F0]"
          : "bg-gradient-to-b from-blue-100 to-white text-gray-800"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`p-4 flex justify-between items-center ${
          isDarkMode
            ? "bg-gradient-to-r from-[#4A5568] to-[#2D3748]"
            : "bg-gradient-to-r from-blue-600 to-indigo-700"
        }`}
      >
        <div className="text-2xl font-bold">
          <span className={isDarkMode ? "text-[#63B3ED]" : "text-white"}>
            InsurAI
          </span>
        </div>
        <div className="space-x-6">
          <Link
            to="/"
            className={
              isDarkMode
                ? "text-[#A0AEC0] hover:text-[#63B3ED]"
                : "text-white hover:underline"
            }
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={
              isDarkMode
                ? "text-[#A0AEC0] hover:text-[#63B3ED]"
                : "text-white hover:underline"
            }
          >
            Dashboard
          </Link>
          <Link
            to="/policies"
            className={
              isDarkMode
                ? "text-[#A0AEC0] hover:text-[#63B3ED]"
                : "text-white hover:underline"
            }
          >
            Policies
          </Link>
          <Link
            to="/verify"
            className={
              isDarkMode
                ? "text-[#A0AEC0] hover:text-[#63B3ED]"
                : "text-white hover:underline"
            }
          >
            Verify
          </Link>
          <Link
            to="/login"
            className={
              isDarkMode
                ? "text-[#A0AEC0] hover:text-[#63B3ED]"
                : "text-white hover:underline"
            }
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={
              isDarkMode
                ? "text-[#A0AEC0] hover:text-[#63B3ED]"
                : "text-white hover:underline"
            }
          >
            Register
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          className={`rounded-full p-2 ${
            isDarkMode ? "bg-[#4C51BF] text-white" : "bg-white text-yellow-400"
          }`}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero Section with Background Image */}
      <div
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          height: "850px", // 👈 adjust the height as needed
        }}
      >
        {/* Overlay for transparency */}
        <div className="absolute inset-0 bg-white/70 dark:bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-6">
          <h1
            className={`text-5xl font-extrabold mb-4 ${
              isDarkMode ? "text-[#E2E8F0]" : "text-gray-800"
            }`}
          >
            Automate & Verify Policies with AI
          </h1>
          <p
            className={`text-lg mb-6 max-w-2xl ${
              isDarkMode ? "text-[#A0AEC0]" : "text-gray-600"
            }`}
          >
            InsurAI helps you manage corporate policies with real-time
            automation, expert validation, and AI-powered verification.
          </p>
          <div className="space-x-4">
            <Link to="/signup">
              <button
                className={`${
                  isDarkMode
                    ? "bg-[#4C51BF] text-white hover:bg-[#5A67D8]"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                } py-2 px-4 rounded-lg`}
              >
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button
                className={`${
                  isDarkMode
                    ? "bg-[#2D3748] text-[#E2E8F0] hover:bg-[#4A5568]"
                    : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                } py-2 px-4 rounded-lg`}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose InsurAI Section */}
      <div
        className={`text-center py-10 ${
          isDarkMode ? "bg-[#1A202C]" : "bg-blue-50"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${
            isDarkMode ? "text-[#63B3ED]" : "text-indigo-700"
          }`}
        >
          Why Choose InsurAI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              isDarkMode
                ? "bg-[#2D3748] text-[#E2E8F0]"
                : "bg-white text-gray-600"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-[#63B3ED]" : "text-indigo-600"
              }`}
            >
              Automation
            </h3>
            <p>AI-driven workflows that reduce manual effort and errors.</p>
          </div>
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              isDarkMode
                ? "bg-[#2D3748] text-[#E2E8F0]"
                : "bg-white text-gray-600"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-[#63B3ED]" : "text-indigo-600"
              }`}
            >
              Expert Validation
            </h3>
            <p>Policies cross-checked against best industry practices.</p>
          </div>
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              isDarkMode
                ? "bg-[#2D3748] text-[#E2E8F0]"
                : "bg-white text-gray-600"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-[#63B3ED]" : "text-indigo-600"
              }`}
            >
              Secure Verification
            </h3>
            <p>Reliable verification with advanced fraud detection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
