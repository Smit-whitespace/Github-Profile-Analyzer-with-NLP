import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function InputForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate(`/profile/${username.trim()}`);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="input-form"
    >
      <motion.input
        type="text"
        placeholder="🔍 Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="home-input"
        whileFocus={{
          scale: 1.02,
          boxShadow: "0 0 15px rgba(108, 99, 255, 0.7)",
        }}
      />
      <motion.button
        type="submit"
        disabled={!username.trim()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary"
      >
        🚀 Fetch Profile
      </motion.button>
    </motion.form>
  );
}

export default InputForm;
