import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FloatingInput from "../components/FloatingInput";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("insuraiUser", JSON.stringify(data));
        navigate("/dashboard");
      } else {
        const err = await res.json().catch(() => ({ message: "Login failed" }));
        setStatusMessage(err.message || "Invalid email or password");
      }
    } catch (error) {
      setStatusMessage("⚠️ Server not responding. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-4">
      {/* Header */}
      <div className="text-center mb-6 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight leading-tight whitespace-normal">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
            Good to See you Again!
          </span>
        </h2>
        <p className="text-base text-gray-600 mt-2">
          Sign in to access your InsurAI account
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-100 transform transition-all duration-300 hover:scale-[1.02]">
        <form onSubmit={handleSubmit} noValidate>
          <FloatingInput
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FloatingInput
            id="password"
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="loader border-2 border-t-transparent border-white rounded-full w-5 h-5 mr-2 animate-spin"></span>
            ) : null}
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-center text-sm text-red-600 font-medium animate-shake">
            {statusMessage}
          </p>
        )}

        {/* Links */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
