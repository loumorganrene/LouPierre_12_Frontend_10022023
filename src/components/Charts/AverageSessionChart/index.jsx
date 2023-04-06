import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'
import PropTypes from 'prop-types'
import '../AverageSessionChart/AverageSession.scss'

/**
 * A React component that renders an average session chart.
 *
 * @param { Array.<Object> } averageSessions - The array of average session data.
 * @returns { JSX.Element } The JSX element for the average session chart.
 *
 * @example
 * const data = [
 *   { "day": 1, "sessionLength": 30 },
 *   { "day": 2, "sessionLength": 23 }
 * ]
 * <AverageSessionChart averageSessions={ data } />
 */
function AverageSessionChart({ averageSessions }) {
  /**
   * Adds empty data points to the beginning and end of the average session data if there are exactly 7 data points.
   *
   * @param { Array } averageSessions - The array of average session data points.
   * @returns { Array } The modified array of average session data points.
   */
  const modifiedData = averageSessions
  if (modifiedData.length === 7) {
    modifiedData.unshift({ day: '', duration: averageSessions[0].duration });
    modifiedData.push({
      day: '',
      duration: averageSessions[averageSessions.length - 1].duration,
    });
  }

  /**
   * Renders a customized <Legend> element.
   *
   * @returns {JSX.Element} The JSX element for the legend.
   */
  const renderLegend = () =>
    <p className='average-session--label'>Durée moyenne des sessions</p>

  /**
   * A custom cursor component that displays a rectangle at the specified point.
   *
   * @param {Object} props - The props for the component.
   * @param {Array} props.points - The array of points where the cursor should be displayed.
   * @param {number} props.width - The width of the rectangle to display.
   * @returns {JSX.Element} The JSX element for the custom cursor.
   */
  function CustomCursor(props) {
    const { points, width } = props; /* eslint-disable-line react/prop-types */
    const { x, y } = points[0]; /* eslint-disable-line react/prop-types */
    return (
      <Rectangle
        fill="#000"
        stroke="#000"
        x={x}
        y={y}
        width={width}
        height={320}
      />
    );
  }

  return (
    <div className="backgroundAverageSession">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart
          data={averageSessions}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'white' }}
            tickMargin={0}
            opacity={.6}
          />
          <YAxis
            hide={true}
            padding={{ top: 6 }}
            domain={['dataMin - 20', 'dataMax + 50']}
          />
          <Tooltip
            isAnimationActive={false}
            allowEscapeViewBox={{ x: true, y: true }}
            cursor={<CustomCursor />}
            offset={-25}
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
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,30%)" />
              <stop offset="100%" stopColor="rgba(255,255,255,100%)" />
            </linearGradient>
          </defs>
          <Line
            dot={false}
            type="natural"
            dataKey="duration"
            stroke="white"
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