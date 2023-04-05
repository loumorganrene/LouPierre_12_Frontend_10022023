import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import '../AverageSessionChart/AverageSession.scss'
import PropTypes from 'prop-types'
/**
 * Component for showing the user's average session's duration line chart.
 *
 * @component
 * @param { object } Object as a list of informations about user sessions duration.
 * @example
 * const sessions = [
 *   {"day": 1, "sessionLength": 30},
 *   {"day": 2, "sessionLength": 23}
 * ]
 * <AverageSessionChart averageSessions={sessions} />
 */
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
            domain={['dataMin - 20', 'dataMax + 50']}
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

AverageSessionChart.propTypes = {
  averageSessions: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    duration: PropTypes.number
  })).isRequired
}

export default AverageSessionChart