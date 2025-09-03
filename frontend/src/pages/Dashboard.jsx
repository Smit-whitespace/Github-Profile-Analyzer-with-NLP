import React from "react";
import InputForm from "../components/InputForm";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="card">
        <h1 className="card-title text-center">🚀 GitHub Profile Analyzer</h1>
        <p className="muted text-center">Enter a GitHub username to analyze their profile</p>
        <InputForm />
      </div>
    </motion.div>
  );
}

export default Dashboard;
