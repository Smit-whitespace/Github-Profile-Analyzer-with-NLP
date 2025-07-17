import React from "react"

function ContributorGraph ({username}) {

  // Placeholder contributor data - we'll visualize this later...
  const contributors = [
    { name: 'smit', contributions: 134},
    { name: 'harsh', contributions: 50},
    { name: 'devansh', contributions: 0},
  ]

  return (
    <div className="contributor-graph">
      <h3> Contributor Network</h3>
      <ul>
        {contributors.map((contrib, index) => (
          <li key={index}>
            {contrib.name} - {contrib.contributions} contributions
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContributorGraph