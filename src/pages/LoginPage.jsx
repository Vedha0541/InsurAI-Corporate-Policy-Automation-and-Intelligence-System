import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FloatingInput from "../components/FloatingInput";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate successful login (replace with API call)
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight leading-tight whitespace-normal">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
            Good to See You Again!
          </span>{" "}
          Sign In to Continue...
        </h2>
        <p className="text-base text-gray-600 mt-2">
          Access your InsurAI account
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full border border-gray-200 transform transition-all duration-300 hover:scale-105">
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
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
          {" | "}
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
