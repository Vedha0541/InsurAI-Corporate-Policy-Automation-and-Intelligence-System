import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalApplications: 0,
    applications: [],
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("insuraiUser"));
    if (!user) return navigate("/login");
    if (user.role !== "admin") return navigate("/dashboard");

    fetch("http://localhost:8080/api/admin/dashboard")
      .then((res) => res.json())
      .then((data) => {
        // Map backend data to frontend structure safely
        const mappedApps = (data.applications || []).map((app) => ({
          id: app.id,
          name: app.user?.firstName + " " + app.user?.lastName || "-",
          age: app.user?.age || "-",
          gender: app.user?.gender || "-",
          type: app.policyType || "-",
          premium: app.premiumAmount || "-",
          coverage: app.coverageAmount || "-",
          status: app.status || "PENDING",
        }));

        setDashboardData({
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
  }, [navigate]);

  if (loading)
    return (
      <p className="ml-64 p-10 text-gray-700 font-medium">
        Loading dashboard...
      </p>
    );

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-700 font-medium">Welcome, Admin</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-600 mb-1">
              Total Users
            </h2>
            <p className="text-3xl font-bold text-blue-600">
              {dashboardData.totalUsers}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-600 mb-1">
              Total Policies Applied
            </h2>
            <p className="text-3xl font-bold text-green-600">
              {dashboardData.totalApplications}
            </p>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            User Applications
          </h2>
          <div className="overflow-x-auto">
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
                {dashboardData.applications.length > 0 ? (
                  dashboardData.applications.map((app) => (
                    <tr key={app.id} className="text-center hover:bg-gray-50">
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
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;


