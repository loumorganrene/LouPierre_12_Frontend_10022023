// import { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function PerformanceChart({ performance }) {

  return (
      <ResponsiveContainer width="23%" height={250}>
        <RadarChart outerRadius={90}
          data={performance}>
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