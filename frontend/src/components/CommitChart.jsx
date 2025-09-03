import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BarChart3 } from "lucide-react";

function CommitChart({ username }) {
  const [commitData, setCommitData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommitData = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/analyze/${username}/commits/`
        );
        const commits = res.data.commit_trend || [];
        setCommitData(
          commits.map((item) => ({
            month: item.month,
            commits: item.commits,
          }))
        );
      } catch (err) {
        console.error("Error fetching commit data:", err);
        setCommitData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCommitData();
  }, [username]);

  if (loading) return <p className="muted">Loading commit frequency...</p>;
  if (!commitData.length) return <p className="muted">No commit data available.</p>;

  return (
    <motion.div
      className="card chart-container"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="card-header">
        <BarChart3 size={20} className="icon-accent" />
        <h2>Commit Frequency</h2>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={commitData}>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis dataKey="month" stroke="var(--muted)" />
          <YAxis allowDecimals={false} stroke="var(--muted)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              borderRadius: "var(--radius)",
              color: "var(--text)",
            }}
          />
          <Line
            type="monotone"
            dataKey="commits"
            stroke="var(--accent)"
            strokeWidth={2}
            dot={{ r: 3, fill: "var(--accent)" }}
            activeDot={{ r: 5, fill: "var(--accent)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default CommitChart;
