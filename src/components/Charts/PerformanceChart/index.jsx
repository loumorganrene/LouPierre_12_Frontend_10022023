import { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function PerformanceChart() {

  const [userPerformance, setUserPerformance] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/user/12/performance")
      .then(res => res.json())
      .then(data => setUserPerformance(data.data))
  }, [])

  // const performance = userPerformance.data.map((session) => ({
  // 	day: session.day,
  // 	duration: session.sessionLength,
  // }))

  return (
    // console.log(userActivity)
    <ResponsiveContainer width="20%" height={272}>
      <RadarChart outerRadius={90} width={730} height={250} data={userPerformance.data}>
        <PolarGrid  radialLines={false}/>
        <PolarAngleAxis dataKey="kind" />
        <Radar  name="value" dataKey="value" fill="#ff0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default PerformanceChart