import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import '../AverageSessionChart/AverageSession.scss'

function AverageSessionChart({ averageSessions }) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const sessionInfos = averageSessions.map((session) => ({
    day: days[session.day - 1],
    duration: session.sessionLength
  }))

  const renderLegend = () => <p className='average-session--label'>Durée moyenne des sessions</p>

  return (
    <ResponsiveContainer width={268} height={268}>
      <LineChart
        style={{ backgroundColor: '#FF0000', borderRadius: "5px", padding: "1rem" }}
        margin={false}
        data={sessionInfos}>
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis dataKey="day" padding={{ left: 4, right: 0 }} tickLine={false} axisLine={false} tickMargin={10} tick={{ fill: 'white' }} />
        <YAxis hide={true} />
        <Tooltip
          itemStyle={{ color: "black", fontSize: "1rem", lineHeight: "24px" }}
          wrapperStyle={{
            outline: 'none'
          }}
          labelFormatter={() => ''}
          formatter={(value) => ['min', value]}
          separator=" "
        />
        <Line type="monotone" dataKey="duration" stroke="white" dot={false} isAnimationActive={false} />
        <Legend content={renderLegend} verticalAlign="top" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default AverageSessionChart