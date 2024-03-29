import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'
import '../DailyScoreChart/DailyScore.scss'

/**
 * A React component that renders an user's daily score chart.
 *
 * @param { Object } score - The user's daily score and the score bar color.
 * @returns { JSX.Element } The JSX element for the user's daily score chart.
 * 
 * @example
 * const data = [{ score: 12, fill: "#FF0000" }]
 * 
 * <DailyScoreChart score = { data } />
 */
function DailyScoreChart({ score }) {

  return (
    <div className="backgroundDailyScore">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={[score]}
          isAnimationActive={false}
          innerRadius="80%"
          outerRadius="100%"
          barSize={10}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background={{ fill: "white" }}
            dataKey="value"
            cornerRadius={30 / 2}
            clockwise
          />
          <text
            x="10%"
            y="10%"
            className='score-session--title'
          >
            Score
          </text>
          <text
            x="41%"
            y="50%"
            className='score-session--value'
          >
            {score.value}%
          </text>
          <text
            x="27%"
            y="60%"
            className='score-session--label'
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

DailyScoreChart.propTypes = {
  score: PropTypes.shape({
    value: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired
  }).isRequired
}

export default DailyScoreChart