import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Users } from "lucide-react";

function ContributorGraph({ username }) {
  const [contributorData, setContributorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/analyze/${username}/contributors/`
        );
        const rawData = res.data?.contributor_network || [];
        const transformedData = rawData.map((c) => ({
          username: c.username || "Unknown",
          contributions: c.contributions || 0,
        }));
        setContributorData(transformedData);
      } catch (err) {
        console.error("Error fetching contributor data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContributors();
  }, [username]);

  if (loading) return <p className="muted">Loading contributor network...</p>;
  if (!contributorData.length) return <p className="muted">No contributors found.</p>;

  return (
    <motion.div
      className="card chart-container"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="card-header">
        <Users size={20} className="icon-accent-2" />
        <h2>Contributor Network</h2>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={contributorData} layout="vertical">
          <CartesianGrid stroke="rgba(255,255,255,0.05)" horizontal />
          <XAxis type="number" stroke="var(--muted)" />
          <YAxis type="category" dataKey="username" stroke="var(--muted)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              borderRadius: "var(--radius)",
              color: "var(--text)",
            }}
          />
          <Bar dataKey="contributions" fill="var(--accent-2)">
            <LabelList dataKey="contributions" position="right" style={{ fill: "var(--text)" }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default ContributorGraph;
