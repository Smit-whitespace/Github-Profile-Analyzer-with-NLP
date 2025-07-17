import React from "react"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS,
         CategoryScale,
         LinearScale,
         PointElement,
         LineElement,
         Title,
         Tooltip,
         Legend,
       } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

function CommitChart ({username}) {
  
  // Dummy data- may be commits from last 6 months.
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Commits',
        data: [5, 15, 10, 20, 12, 18],
        borderColor: '#34d399',
        backgroundColor: '#6ee7b7',
      },
    ],
  }

  return (
    <div>
      <h3>Commit Frequency</h3>
      <Line data={data} />
    </div>
  )
}

export default CommitChart