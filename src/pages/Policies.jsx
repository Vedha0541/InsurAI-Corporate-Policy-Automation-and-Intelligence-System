import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const PoliciesPage = () => {
  const [policies, setPolicies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/policies")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPolicies(data);
        } else {
          console.error("Expected array but got:", data);
          setPolicies([]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleApply = (policy) => {
    navigate(`/apply/${policy.id}`, { state: { policy } }); // move to Application Page
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 p-6">
        <h2 className="text-2xl font-bold mb-8">InsurAI</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/policies" className="hover:text-blue-400">
              Policies
            </Link>
          </li>
          <li>
            <Link to="/applications" className="hover:text-blue-400">
              My Applications
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-400">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/verify" className="hover:text-blue-400">
              Verify
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-10 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">
          Available Insurance Policies
        </h1>

        {/* Cards Grid (2 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {policies.length > 0 ? (
            policies.map((p) => (
              <div
                key={p.id}
                className="bg-white shadow-xl rounded-2xl p-8 h-72 transform transition hover:scale-105 hover:shadow-2xl duration-300"
              >
                <h2 className="font-bold text-2xl mb-3 text-gray-800">
                  {p.name}
                </h2>
                <p className="text-gray-600 mb-3">{p.description}</p>
                <p className="mb-1">
                  <strong>Type:</strong> {p.type}
                </p>
                <p className="mb-1">
                  <strong>Premium:</strong> ₹{p.premium}/year
                </p>
                <p className="mb-4">
                  <strong>Coverage:</strong> ₹{p.coverage}
                </p>
                <button
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => handleApply(p)}
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No policies available right now.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;
