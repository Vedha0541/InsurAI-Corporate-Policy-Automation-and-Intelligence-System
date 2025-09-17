// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaUser, FaChartBar, FaCog } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [adminStats, setAdminStats] = useState({
    totalUsers: 0,
    totalApplications: 0,
    applications: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("insuraiUser"));
    if (!storedUser) {
      navigate("/login");
      return;
    }
    setUser(storedUser);

    if (storedUser.role === "admin") {
      fetch("http://localhost:8080/api/admin/dashboard")
        .then((res) => res.json())
        .then((data) => {
          const mappedApps = (data.applications || []).map((app) => ({
            id: app.id,
            name: app.name || "-",
            age: app.age || "-",
            gender: app.gender || "-",
            type: app.type || "-",
            premium: app.premium || "-",
            coverage: app.coverage || "-",
            status: app.status || "PENDING",
          }));

          setAdminStats({
            totalUsers: data.totalUsers || 0,
            totalApplications: data.totalApplications || 0,
            applications: mappedApps,
          });
          setLoading(false);
        })

        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 bg-gray-50 p-6">
        {/* Navbar */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-3">
            <span className="text-gray-700 font-medium">
              Welcome, {user.firstName}
            </span>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <FaUserCircle size={32} className="text-gray-600" />
            </div>
          </div>
        </header>

        {/* Admin View */}
        {user.role === "admin" ? (
          loading ? (
            <p className="ml-64 p-10 text-gray-700 font-medium">
              Loading dashboard...
            </p>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4">Admin Overview</h2>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-gray-700 font-semibold">Total Users</h3>
                  <p className="text-3xl font-bold text-blue-600">
                    {adminStats.totalUsers}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-gray-700 font-semibold">
                    Policies Applied
                  </h3>
                  <p className="text-3xl font-bold text-green-600">
                    {adminStats.totalApplications}
                  </p>
                </div>
              </div>

              {/* Applications Table */}
              <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  User Applications
                </h2>
                <table className="min-w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Age</th>
                      <th className="px-4 py-2 border">Gender</th>
                      <th className="px-4 py-2 border">Policy Type</th>
                      <th className="px-4 py-2 border">Premium</th>
                      <th className="px-4 py-2 border">Coverage</th>
                      <th className="px-4 py-2 border">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminStats.applications.length > 0 ? (
                      adminStats.applications.map((app) => (
                        <tr
                          key={app.id}
                          className="text-center hover:bg-gray-50"
                        >
                          <td className="px-4 py-2 border">{app.name}</td>
                          <td className="px-4 py-2 border">{app.age}</td>
                          <td className="px-4 py-2 border">{app.gender}</td>
                          <td className="px-4 py-2 border">{app.type}</td>
                          <td className="px-4 py-2 border">₹{app.premium}</td>
                          <td className="px-4 py-2 border">₹{app.coverage}</td>
                          <td
                            className={`px-4 py-2 border font-semibold ${
                              app.status === "APPROVED"
                                ? "text-green-600"
                                : app.status === "PENDING"
                                ? "text-yellow-600"
                                : "text-red-600"
                            }`}
                          >
                            {app.status}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="px-4 py-2 border text-center text-gray-500"
                        >
                          No applications found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )
        ) : (
          // User View
          <>
            <p className="text-lg text-gray-700 mb-6">
              Manage your insurance tasks and policies here.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4 hover:shadow-lg transition">
                <FaUser className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Profile
                  </h3>
                  <p className="text-gray-600 text-sm">
                    View and edit your profile
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4 hover:shadow-lg transition">
                <FaChartBar className="text-green-600 text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Analytics
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Track your policy performance
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4 hover:shadow-lg transition">
                <FaCog className="text-purple-600 text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Settings
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Manage your preferences
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
