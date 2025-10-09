import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "../components/Sidebar";

const ApplicationsPage = ({ refreshTrigger }) => {
  // Get logged-in user info
  const loggedInName = localStorage.getItem("username") || "Sathwik";
  const userId = Number(localStorage.getItem("userId")) || 0;

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Format numbers as INR
  const formatINR = (amount) => {
    if (amount === null || amount === undefined) return "N/A";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Fetch user applications
  const fetchApplications = useCallback(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/policies/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is an array
        if (!Array.isArray(data)) data = data?.policies || [];

        // Filter by logged-in user's username
        const userApplications = data.filter(
          (app) => app.username === loggedInName
        );

        setApplications(userApplications);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching applications:", err);
        setApplications([]);
        setLoading(false);
      });
  }, [userId, loggedInName]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  useEffect(() => {
    if (refreshTrigger) fetchApplications();
  }, [refreshTrigger, fetchApplications]);

  if (loading) return <p className="ml-64 p-10">Loading applications...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-10 bg-gray-100 min-h-screen w-full">
        <h1 className="text-3xl font-bold mb-6">My Applications</h1>

        {applications.length === 0 ? (
          <p>No applied policies found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <p className="text-gray-700 font-semibold mb-2">
                  {app.username || app.name || "Unnamed User"}
                </p>
                <p className="text-gray-600 mt-1">Type: {app.type || "N/A"}</p>
                <p className="text-gray-600 mt-1">
                  Premium: {formatINR(app.premiumAmount)}
                </p>
                <p className="text-gray-600 mt-1">
                  Coverage: {formatINR(app.coverage)}
                </p>
                <p className="text-gray-500 mt-1 text-sm">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      app.status === "APPROVED"
                        ? "text-green-600"
                        : app.status === "PENDING"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {app.status || "PENDING"}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationsPage;
