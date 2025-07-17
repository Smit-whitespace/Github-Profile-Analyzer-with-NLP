import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

function InputForm() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(username.trim()) {
      navigate(`/profile/${username.trim()}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Enter Github username"
        value={username}
        onChange={ (e) => setUsername(e.target.value)} />
      <button type="submit">Fetch Profile</button>
    </form>
  )
}

export default InputForm