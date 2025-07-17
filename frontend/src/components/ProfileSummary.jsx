import React from 'react'

function ProfileSummary({ username }) {
  return (
    <div className="summary-card">
      <h3>Basic Info</h3>
      <p>Username: {username}</p>
      <p>👨‍💻 Profile summary and stats will go here...</p>
    </div>
  )
}

export default ProfileSummary
