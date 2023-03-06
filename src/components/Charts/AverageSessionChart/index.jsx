// import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function AverageSessionChart() {

  // const [userAverageSession, setUserAverageSession] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/user/12/average-sessions")
  //     .then(res => res.json())
  //     .then(data => setUserAverageSession(data.data.sessions))
  // }, [])

  // const averageSession = userAverageSession.map((session) => ({
  //   day: session.day,
  //   duration: session.sessionLength,
  // }))

  return (
    // console.log(userActivity)
      <ResponsiveContainer width="23%" height={250}>
        <LineChart 
          margin={{ left: -30, bottom: -5 }}>
            {/* data={averageSession} */}
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="duration" stroke="#ff0101" />
          <text
            x={200 / 2}
            y={33 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            Session Duration
          </text>
        </LineChart>
      </ResponsiveContainer>
  )
}

export default AverageSessionChart