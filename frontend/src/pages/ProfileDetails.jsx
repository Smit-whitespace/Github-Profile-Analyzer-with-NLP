import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProfileAnalysis } from "../services/api";
import { motion } from "framer-motion";

import ProfileSummary from "../components/ProfileSummary";
import LanguageChart from "../components/LanguageChart";
import CommitChart from "../components/CommitChart";
import NLPInsights from "../components/NLPInsights";
import ContributorGraph from "../components/ContributorGraph";

function ProfileDetails() {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchProfileAnalysis(username);
        setData(result);
      } catch (err) {
        console.error("Error fetching full profile data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (username) getData();
  }, [username]);

  if (loading)
    return <p className="muted text-center">⏳ Loading analysis...</p>;

  if (error || !data)
    return <p className="muted text-center">❌ Failed to load profile data.</p>;

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="card">
        <h1 className="card-title text-center">📊 Analyzing GitHub Profile: {username}</h1>

        <ProfileSummary summary={data.user_summary} />
        <LanguageChart username={username} />
        <CommitChart username={username} />
        <NLPInsights username={username} />
        <ContributorGraph username={username} />
      </div>
    </motion.div>
  );
}

export default ProfileDetails;
