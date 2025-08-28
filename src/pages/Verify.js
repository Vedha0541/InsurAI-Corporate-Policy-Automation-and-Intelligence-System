import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  XCircleIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

function Verify() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | pending | verified | rejected

  const handleVerify = (e) => {
    e.preventDefault();
    if (!file) return;

    setStatus("pending");

    // Simulate API verification
    setTimeout(() => {
      const isValid = Math.random() > 0.3; // 70% chance to be verified
      setStatus(isValid ? "verified" : "rejected");
    }, 2000);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Verify Policy</h1>

      {/* Upload + Verify Form */}
      <motion.form
        onSubmit={handleVerify}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center"
      >
        <label className="flex items-center justify-center gap-2 cursor-pointer px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
          <ArrowUpTrayIcon className="w-5 h-5" />
          <span>{file ? file.name : "Upload Policy File"}</span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        <button
          type="submit"
          disabled={!file || status === "pending"}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {status === "pending" ? "Verifying..." : "Verify Policy"}
        </button>
      </motion.form>

      {/* Verification Status */}
      <div className="mt-10">
        {status === "pending" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-yellow-600 font-semibold"
          >
            ⏳ Verification in progress...
          </motion.p>
        )}

        {status === "verified" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-green-600"
          >
            <CheckCircleIcon className="w-16 h-16 mb-2" />
            <p className="text-xl font-bold">Policy Verified ✅</p>
          </motion.div>
        )}

        {status === "rejected" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-red-600"
          >
            <XCircleIcon className="w-16 h-16 mb-2" />
            <p className="text-xl font-bold">Verification Failed ❌</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Verify;
