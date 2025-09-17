import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // adjust path if needed

const VerifyPage = () => {
  const [aadhar, setAadhar] = useState(null);
  const [employeeId, setEmployeeId] = useState(null);
  const [bankDoc, setBankDoc] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aadhar || !employeeId || !bankDoc) {
      alert("Please upload all documents.");
      return;
    }

    const formData = new FormData();
    formData.append("aadhar", aadhar);
    formData.append("employeeId", employeeId);
    formData.append("bankDoc", bankDoc);

    fetch("http://localhost:8080/api/verify", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((msg) => alert(msg))
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="ml-64 p-10 bg-gray-100 min-h-screen w-full">
        <h1 className="text-3xl font-bold mb-6">Document Verification</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4"
        >
          <div>
            <label className="block mb-2 font-medium">Aadhar Card</label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              required
              onChange={(e) => setAadhar(e.target.files[0])}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Employee ID</label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              required
              onChange={(e) => setEmployeeId(e.target.files[0])}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Bank Document</label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              required
              onChange={(e) => setBankDoc(e.target.files[0])}
              className="w-full border rounded p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Submit for Verification
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyPage;
