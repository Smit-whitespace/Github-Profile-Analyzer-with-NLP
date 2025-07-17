import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProfileDetails from './pages/ProfileDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile/:username" element={<ProfileDetails /> }/>
      </Routes>
    </Router>
  )
}

export default App;