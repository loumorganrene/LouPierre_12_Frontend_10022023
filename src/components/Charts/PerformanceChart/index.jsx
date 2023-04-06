import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'
import '../PerformanceChart/Performance.scss'

/**
 * A React component that renders a performance chart.
 *
 * @param { Array.<Object> } performance - The array of informations about user's performances.
 * @returns { JSX.Element } The JSX element for the average session chart.
 *
 * @example
 * const data = [
 * {value: 80, kind: "Cardio"},
 * {value: 120, kind: "Energie"},
 * ...]
 * 
 * <PerformanceChart performance= {data} />
 */
function PerformanceChart({ performance }) {

  return (
    <div className="backgroundPerformance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="49%"
          cy="50%"
          outerRadius="50%"
          data={performance}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" />
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

PerformanceChart.propTypes = {
  performance: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    kind: PropTypes.string.isRequired
  })).isRequired
}

export default PerformanceChart