import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#60A5FA", "#34D399", "#FBBF24", "#F97316", "#C084FC", "#F43F5E", "#10B981", "#8B5CF6", "#F59E0B", "#EC4899"];

function LanguageChart({ username }) {
  const [languageData, setLanguageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/analyze/${username}/languages/`);
        const data = res.data.languages || {};
        setLanguageData(Object.entries(data).map(([key, val]) => ({ name: key, value: val })));
      } catch (err) {
        console.error("Error fetching language data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLanguages();
  }, [username]);

  if (loading) return <p className="muted">Loading language usage...</p>;
  if (!languageData.length) return <p className="muted">No language data available.</p>;

  return (
    <motion.div
      className="card chart-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="card-title">🧠 Language Usage</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={languageData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name }) => name}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {languageData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="var(--bg)" strokeWidth={2} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ backgroundColor: "var(--card)", borderRadius: "0.5rem", color: "var(--text)" }} />
        <Legend wrapperStyle={{ color: "var(--muted)" }} />
      </PieChart>
    </motion.div>
  );
}

export default LanguageChart;
