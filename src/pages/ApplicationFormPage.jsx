import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ApplyPolicyPage = ({ onNewApplication }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const policy = state?.policy;

  const [loading, setLoading] = useState(false);

  if (!policy) {
    return (
      <p className="text-center mt-10 text-gray-600">No policy selected.</p>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    payload.userId = 1; // Replace with actual logged-in user ID
    payload.policyId = policy.id;

    try {
      const res = await fetch("http://localhost:8080/api/policies/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit application");

      await res.json(); // we don't need the variable, just await to complete request
      alert("Application submitted successfully ✅");

      // Trigger live update for My Applications page
      if (onNewApplication) onNewApplication();

      navigate("/dashboard"); // Optional redirect
    } catch (err) {
      console.error(err);
      alert("Error submitting application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Apply for {policy.name}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* User Details */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Age
            </label>
            <input
              type="number"
              name="age"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Gender
            </label>
            <select
              name="gender"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Policy Details */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Policy Type
            </label>
            <select
              name="type"
              defaultValue={policy.type}
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            >
              <option value="health">Health</option>
              <option value="vehicle">Vehicle</option>
              <option value="house">House</option>
              <option value="life">Life</option>
              <option value="savings">Savings</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Premium
            </label>
            <select
              name="premium"
              defaultValue={policy.premium}
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            >
              <option value="2000">₹2000</option>
              <option value="3000">₹3000</option>
              <option value="4000">₹4000</option>
              <option value="5000">₹5000</option>
              <option value="6000">₹6000</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Coverage
            </label>
            <select
              name="coverage"
              defaultValue={policy.coverage}
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            >
              <option value="100000">₹1,00,000</option>
              <option value="200000">₹2,00,000</option>
              <option value="250000">₹2,50,000</option>
              <option value="500000">₹5,00,000</option>
              <option value="1000000">₹10,00,000</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPolicyPage;
