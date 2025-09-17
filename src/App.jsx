import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import PoliciesPage from "./pages/Policies";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import VerifyPage from "./pages/Verify";
import ApplicationsPage from "./pages/ApplicationsPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

function App() {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/signup" element={<SignupPage />} />{" "}
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        <Route path="/policies" element={<PoliciesPage />} />{" "}
        <Route path="/apply/:id" element={<ApplicationFormPage />} />{" "}
        <Route path="/verify/" element={<VerifyPage />} />{" "}
        <Route path="/applications" element={<ApplicationsPage />} />{" "}
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />{" "}
        <Route path="*" element={<HomePage />} />{" "}
      </Routes>{" "}
    </Router>
  );
}
export default App;
