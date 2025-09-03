import React from "react";

function ProfileSummary({ summary }) {
  if (!summary) {
    return <p className="muted">Loading user summary...</p>;
  }

  return (
    <div className="card">
      <h2 className="card-title">👤 GitHub Profile Summary</h2>
      <div className="space-y">
        <p><strong>Username:</strong> {summary.username}</p>
        <p><strong>Public Repositories:</strong> {summary.public_repos}</p>
        <p><strong>Followers:</strong> {summary.followers}</p>
        <p><strong>Following:</strong> {summary.following}</p>
      </div>
    </div>
  );
}

export default ProfileSummary;
