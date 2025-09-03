// src/components/NLPInsights.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function NLPInsights({ username }) {
  const [nlpData, setNlpData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNLPData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://127.0.0.1:8000/api/analyze/${username}/readme/`
        );
        setNlpData(res.data || {});
        setError(null);
      } catch (err) {
        console.error("Failed to fetch NLP insights:", err);
        setError("Unable to fetch NLP insights.");
      } finally {
        setLoading(false);
      }
    };

    if (username) fetchNLPData();
  }, [username]);

  if (loading) return <div className="card"><p className="small-muted">Loading NLP insights...</p></div>;
  if (error) return <div className="card"><p className="small-muted">{error}</p></div>;

  return (
    <div className="card">
      <h3 className="m-0 mb-2">🧠 NLP Insights</h3>

      <p className="mb-2"><strong>Tone:</strong> {nlpData.tone || "N/A"}</p>
      <p className="mb-2"><strong>Project Maturity:</strong> {nlpData.project_maturity || "N/A"}</p>

      <div className="mb-2">
        <strong>Key Technologies:</strong>
        {nlpData.technical_keywords?.length > 0 ? (
          <ul style={{ marginTop: ".35rem", paddingLeft: "1.1rem" }}>
            {nlpData.technical_keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        ) : (
          <p className="small-muted" style={{ marginTop: ".35rem" }}>No technical keywords found.</p>
        )}
      </div>

      <p><strong>Description:</strong> {nlpData.description || "No description available."}</p>
    </div>
  );
}

export default NLPInsights;
