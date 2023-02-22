import { useState, useEffect } from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function DailyScoreChart() {

  const [userDailyScore, setUserDailyScore] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/user/12/")
      .then(res => res.json())
      .then(data => setUserDailyScore(data.data.todayScore))
  }, [])

  const score = [{
    "value": userDailyScore,
    "fill": '#ff0101'
  }]

  return (
    // console.log(score)
    <ResponsiveContainer width="20%" height={272}>
      <RadialBarChart width={730} height={250} data={score}
        innerRadius={100}
        barSize={10}
        startAngle={90}
        endAngle={450}>
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          dataKey="value"
          cornerRadius={30 / 2}
          fill="#0BEFF2"
          clockwise
        />
        <text
          x={45 / 2}
          y={33 / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
        >
          Score
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default DailyScoreChart