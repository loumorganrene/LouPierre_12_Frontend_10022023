import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import '../AverageSessionChart/AverageSession.scss'

function AverageSessionChart({ averageSessions }) {

  const renderLegend = () => 
      <p className='average-session--label'>Durée moyenne des sessions</p>
  
  return (
    <div className="backgroundAverageSession">
      <ResponsiveContainer
          width="100%" 
          height="100%"
      >
        <LineChart
            margin={false}
            data={averageSessions}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis 
              dataKey="day" 
              padding={{ left: 5, right: 5 }} 
              tickLine={false} 
              axisLine={false} 
              tickMargin={10} 
              tick={{ fill: 'white' }} 
          />
          <YAxis 
              hide={true} 
              padding={{ top: 6 }} 
          />
          <Tooltip
              itemStyle={{ 
                color: "black", 
                fontSize: "1rem", 
                lineHeight: "24px" 
              }}
              wrapperStyle={{
                outline: 'none'
              }}
              labelFormatter={() => ''}
              formatter={(value) => ['min', value]}
              separator=" "
          />
          <Line 
              type="monotone" 
              dataKey="duration" 
              stroke="white" 
              dot={false}
              connectNulls={true} 
              isAnimationActive={false} 
          />
          <Legend 
              content={renderLegend} 
              verticalAlign="top" 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessionChart