import React from "react"
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

function LanguageChart ({ languageData }) {
  
  // This Is DUMMY DATA ! later retrieve from Api...
  const labels = Object.keys(languageData || {})
  const values = Object.values(languageData || {})

  const data = {
    labels,
    datasets: [
      {
        label:'languages',
        data: values,
        backgroundColor: ['#facc15', '#60a5fa', '#f472b6', '#a78bfa'],
      },
    ],
  }

  return (
    <div>
      <h3>Languages Used</h3>
      <Pie data={data} />
    </div>
  )
}

export default LanguageChart