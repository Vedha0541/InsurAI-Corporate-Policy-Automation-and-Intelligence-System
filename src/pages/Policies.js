import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpTrayIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

function Policies() {
  const [policies, setPolicies] = useState([
    {
      id: 1,
      title: "Health Insurance - 2024",
      description: "Comprehensive coverage plan",
      file: "health_plan.pdf",
    },
    {
      id: 2,
      title: "Car Insurance",
      description: "Third-party and comprehensive",
      file: "car_policy.pdf",
    },
  ]);

  const [form, setForm] = useState({ title: "", description: "", file: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description) return;

    const newPolicy = {
      id: policies.length + 1,
      title: form.title,
      description: form.description,
      file: form.file || "uploaded_document.pdf",
    };

    setPolicies([...policies, newPolicy]);
    setForm({ title: "", description: "", file: "" });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Policies</h1>

      {/* Upload Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md mb-10"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Upload New Policy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Policy Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            placeholder="Policy Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mt-4 flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
            <ArrowUpTrayIcon className="w-5 h-5" />
            <span>Upload File</span>
            <input
              type="file"
              className="hidden"
              onChange={(e) =>
                setForm({ ...form, file: e.target.files[0]?.name })
              }
            />
          </label>

          {form.file && (
            <span className="text-sm text-gray-600">📄 {form.file}</span>
          )}
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
        >
          Save Policy
        </button>
      </motion.form>

      {/* Policies List */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Existing Policies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policies.map((policy) => (
          <motion.div
            key={policy.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
          >
            <DocumentTextIcon className="w-10 h-10 text-indigo-500" />
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                {policy.title}
              </h3>
              <p className="text-sm text-gray-600">{policy.description}</p>
              <p className="text-xs text-gray-400 mt-1">📎 {policy.file}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Policies;
