import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function AverageSessionChart() {

  const [userAverageSession, setUserAverageSession] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/user/12/average-sessions")
      .then(res => res.json())
      .then(data => setUserAverageSession(data.data.sessions))
  }, [])

  const averageSession = userAverageSession.map((session) => ({
    day: session.day,
    duration: session.sessionLength,
  }))

  return (
    // console.log(userActivity)
    <ResponsiveContainer width="20%" height={272}>
      <LineChart width={730} height={250} data={averageSession}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="duration" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default AverageSessionChart