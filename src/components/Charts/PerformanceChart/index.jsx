// import { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function PerformanceChart({ performance }) {

  const frenchTranslation = {
			cardio: 'Cardio',
			energy: 'Energie',
			endurance: 'Endurance',
			strength: 'Force',
			speed: 'Vitesse',
			intensity: 'Intensité',
  }
  const performanceFr = performance.data.map((item) => ({
			value: item.value,
			kind: frenchTranslation[performance.kind[item.kind]],
		}))
    
console.log(performanceFr)
  return (
      <ResponsiveContainer width={268} height={268}>
        <RadarChart 
          style={{backgroundColor: 'black', borderRadius: "5px", padding: "1rem"}}
          outerRadius={65}
          isAnimationActive={false}
          data={performanceFr}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" />
          <Radar  name="value" dataKey="value" fill="#ff0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
  )
}

export default PerformanceChart