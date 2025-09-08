import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Policies from "./pages/Policies";
import Verify from "./pages/Verify";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="*" element={<HomePage />} /> {/* Default to home */}
      </Routes>
    </Router>
  );
}

export default App;
