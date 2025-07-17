import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { fetchProfileAnalysis } from '../services/api'

import ProfileSummary from '../components/ProfileSummary'
import LanguageChart from '../components/LanguageChart'
import CommitChart from '../components/CommitChart'
import NLPInsights from '../components/NLPInsights'
import ContributorGraph from '../components/ContributorGraph'

function ProfileDetails() {
  const { username } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const result = await fetchProfileAnalysis(username)
      setData(result)
    }
    getData()
  }, [username])

  if (!data) return <p>Loading analysis...</p>

  return (
    <div className="profile-details-container">
      <h2>Analyzing Github Profile: {username}</h2>

      <ProfileSummary summary={data.summary} />
      <LanguageChart languageData={data.languages} />
      <CommitChart commitData={data.commits} />
      <NLPInsights nlp={data.nlp} />
      <ContributorGraph network={data.network} />
    </div>
  )
}

export default ProfileDetails