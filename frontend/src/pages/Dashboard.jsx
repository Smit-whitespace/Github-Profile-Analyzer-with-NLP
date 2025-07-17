import React from "react"
import InputForm from '../components/InputForm'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Github Profile Analyzer</h1>
      <p>Enter a Github username to analyze their profile</p>
      <InputForm />
    </div>
  )
}

export default Dashboard;