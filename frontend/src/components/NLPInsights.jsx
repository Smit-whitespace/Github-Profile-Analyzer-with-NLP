import React from "react"

function NLPInsights({ username }) {

  // Mock NLP analysis result...
  const insights = {
    summary: 'This user builds well-structured full stack applications with clear README documentation.',
    tone: 'Professional and instructive',
    keyword:['React', 'Django', 'API', 'Deployment'],
    maturity: 'High - projects are well-documented, regularly updated, and active.',
  }

  return (
    <div className="insights-card">
      <h3>NLP-based README Analysis</h3>
      <p><strong>Summary:</strong> {insights.summary}</p>
      <p><strong>Tone:</strong> {insights.tone}</p>
      <p><strong>Maturity:</strong> {insights.maturity}</p>
      <p><strong>Keywords:</strong> {Array.isArray(insights.keywords) ? insights.keywords.join(', ') : 'N/A'} </p>
    </div>
  )
}

export default NLPInsights