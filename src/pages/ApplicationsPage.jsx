import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "../components/Sidebar";

const ApplicationsPage = ({ refreshTrigger }) => {
  const userId = 1; // Replace with actual logged-in user ID
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch user's applications
  const fetchApplications = useCallback(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/policies/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure applications is always an array
        if (Array.isArray(data)) {
          setApplications(data);
        } else if (data?.policies && Array.isArray(data.policies)) {
          setApplications(data.policies);
        } else {
          setApplications([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setApplications([]);
        setLoading(false);
      });
  }, [userId]);

  // Initial fetch
  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  // Re-fetch when a new application is submitted (live update)
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
            {applications.map((policy) => (
              <div
                key={policy.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">{policy.name}</h2>
                <p>
                  <strong>Type:</strong> {policy.type}
                </p>
                <p>
                  <strong>Start Date:</strong> {policy.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {policy.endDate}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${
                      policy.status === "APPROVED"
                        ? "text-green-600"
                        : policy.status === "PENDING"
                        ? "text-yellow-600"
                        : "text-red-600"
                    } font-semibold`}
                  >
                    {policy.status}
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
