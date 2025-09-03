import axios from 'axios'

const Base_URL = "http://localhost:8000/api" // This will be BACKEND URL !!!

export const fetchProfileAnalysis = async (username) => {
  try{
    const cleanedUsername = username.trim();
    const res = await axios.get(`${Base_URL}/analyze/${cleanedUsername}/summary/`)
    return res.data
  } catch (err) {
    console.error('API Error: ', err)
    return null
  }
}