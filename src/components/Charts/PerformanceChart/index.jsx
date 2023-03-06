// import { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function PerformanceChart() {

  // const [userPerformance, setUserPerformance] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:3001/user/12/performance")
  //     .then(res => res.json())
  //     .then(data => setUserPerformance(data.data))
  // }, [])

  return (
      <ResponsiveContainer width="23%" height={250}>
        <RadarChart outerRadius={90} >
          {/* data={userPerformance.data} */}
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" />
          <Radar  name="value" dataKey="value" fill="#ff0101" fillOpacity={0.6} />
          <text
            x={100 / 2}
            y={33 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            Perfomance
          </text>
        </RadarChart>
      </ResponsiveContainer>
  )
}

export default PerformanceChart