import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow hover:shadow-md transition"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
