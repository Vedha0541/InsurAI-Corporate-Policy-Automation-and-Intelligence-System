import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Dashboard({ user }) {
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to InsurAI
        </h1>
        <p className="text-gray-600 mb-6">
          Please <span className="font-semibold">login</span> to view your
          dashboard and manage policies.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Go to Login
        </button>
      </div>
    );
  }

  // ✅ If user is logged in, show personalized dashboard
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-green-100 rounded-lg shadow"
        >
          <h2 className="text-lg font-semibold text-gray-700">
            Active Policies
          </h2>
          <p className="text-3xl font-bold text-green-600">
            {user.activePolicies}
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-yellow-100 rounded-lg shadow"
        >
          <h2 className="text-lg font-semibold text-gray-700">
            Pending Policies
          </h2>
          <p className="text-3xl font-bold text-yellow-600">
            {user.pendingPolicies}
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-blue-100 rounded-lg shadow"
        >
          <h2 className="text-lg font-semibold text-gray-700">
            Verified Policies
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {user.verifiedPolicies}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
