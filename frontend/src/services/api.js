import axios from 'axios'

const Base_URL = "http://localhost:3000/api" // This will be BACKEND URL !!!

export const fetchProfileAnalysis = async (username) => {
  try{
    const res = await axios.get(`${Base_URL}/analyze/${username}/`)
    return res.data
  } catch (err) {
    console.error('API Error: ', err)
    return null
  }
}