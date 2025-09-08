import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Your Dashboard
        </h1>
        <p className="mt-4 text-gray-600">
          Manage your insurance tasks and policies here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
