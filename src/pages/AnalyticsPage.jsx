// src/pages/AnalyticsPage.jsx
import React from "react";
import Sidebar from "../components/Sidebar"; // make sure you have Sidebar component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

export default function AnalyticsPage() {
  const barData = {
    labels: ["Life", "Health", "Car", "Home", "Travel"],
    datasets: [
      {
        label: "Policies Sold",
        data: [120, 90, 150, 80, 60],
        backgroundColor: "#3B82F6",
      },
    ],
  };

  const pieData = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        label: "Application Status",
        data: [50, 30, 20],
        backgroundColor: ["#10B981", "#F59E0B", "#EF4444"],
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Monthly Revenue (₹)",
        data: [50000, 60000, 55000, 70000, 65000],
        borderColor: "#6366F1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        {/* Notice: ml-64 matches sidebar width */}

        {/* Motivational Quote */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2 animate-pulse">
            "Numbers tell a story — let’s read it wisely."
          </h1>
          <p className="text-gray-700 text-lg">
            Explore trends, performance, and insights below
          </p>
        </div>

        {/* Top Row: Bar + Pie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-2xl transition transform hover:-translate-y-1 h-96 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Policies Sold by Category
            </h2>
            <div className="flex-1">
              <Bar data={barData} options={chartOptions} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 hover:shadow-2xl transition transform hover:-translate-y-1 h-96 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Application Status Overview
            </h2>
            <div className="flex-1">
              <Pie data={pieData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Bottom Row: Line Chart */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-2xl transition transform hover:-translate-y-1 h-[28rem] flex flex-col">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Monthly Revenue Flow
          </h2>
          <div className="flex-1">
            <Line data={lineData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
