import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FloatingInput from "../components/FloatingInput";
import Sidebar from "../components/Sidebar";

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{7,15}$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!phoneRegex.test(form.phone))
      newErrors.phone = "Please enter a valid phone number";
    if (!emailRegex.test(form.email))
      newErrors.email = "Please enter a valid email";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ Only send fields your backend expects
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      password: form.password,
      role: form.role,
    };

    try {
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        setStatusMessage(data.message || "Signup successful");
        setTimeout(() => {
          setStatusMessage("");
          navigate("/login");
        }, 1500);
      } else {
        const err = await res
          .json()
          .catch(() => ({ message: "Signup failed" }));
        setStatusMessage(err.message || "Signup failed");
      }
    } catch (error) {
      setStatusMessage("Server error: " + error.message);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 flex-1">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight leading-tight whitespace-normal">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              Join InsurAI Today
            </span>{" "}
            and Empower Your Insurance Experience
          </h2>
          <p className="text-base text-gray-600 mt-2">
            Sign up and discover smarter insurance management
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md mx-auto border border-gray-200 transform transition-all duration-300 hover:scale-105">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Account Type
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200"
              >
                <option value="user">User</option>
                <option value="admin">System Administrator</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FloatingInput
                id="firstName"
                label="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <FloatingInput
                id="lastName"
                label="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>

            <FloatingInput
              id="email"
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FloatingInput
              id="phone"
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
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
            <FloatingInput
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105"
            >
              Sign Up
            </button>
          </form>

          {statusMessage && (
            <p className="mt-4 text-center text-sm text-green-600 font-medium">
              {statusMessage}
            </p>
          )}

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
            {" | "}
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
