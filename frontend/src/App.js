import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import ProfileDetails from "./pages/ProfileDetails";

// Styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap base
import "./styles/global.css";
import "./styles/variables.css";
import "./index.css";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile/:username" element={<ProfileDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
