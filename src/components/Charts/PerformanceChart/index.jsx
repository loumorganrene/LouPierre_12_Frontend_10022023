import '../PerformanceChart/Performance.scss'
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
      <div className="backgroundPerformance">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
              cx="49%" 
              cy="50%" 
              outerRadius="50%"
              data={performanceFr}>
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="kind"/>
            <Radar  
                name="value" 
                dataKey="value" 
                fill="var(--primary-clr)" 
                fillOpacity={0.6} 
                isAnimationActive={false} 
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
  )
}

export default PerformanceChart