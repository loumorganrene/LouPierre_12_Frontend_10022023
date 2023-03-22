import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function DailyScoreChart({ score }) {

  return (
    <ResponsiveContainer width={268} height={268}>
      <RadialBarChart
        data={[score]}
        isAnimationActive={false}
        innerRadius="80%"
        outerRadius="100%"
        barSize={10}
        startAngle={90}
        endAngle={450}
        style={{backgroundColor: '#FBFBFB', borderRadius: "5px", padding: "1rem" }}>
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background={{fill: "white"}}
          dataKey="value"
          cornerRadius={30 / 2}
          clockwise
        />
        <text
          x="10%"
          y="10%"
          style={{ fontWeight: "600" }}
        >
          Score
        </text>
        <text
          x="41%"
          y="50%"
          style={{ fontWeight: "700", fontSize: "26px" }}
        >
          {score.value}%
        </text>
        <text          
          x="27%"
          y="60%"
          style={{ opacity: "0.4", fontWeight: "600", fontSize: "1rem" }}
          >
          de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default DailyScoreChart