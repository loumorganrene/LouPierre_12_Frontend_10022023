// import { useState, useEffect } from "react";
import { useContext } from 'react'
import { AppContext } from "../../../Context"
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function DailyScoreChart() {

    const Score = () => {
    const context = useContext(AppContext)
    return context
  }

  // const score = [{
  //   "value": userInfos.todayScore,
  //   "fill": '#ff0101'
  // }]
  console.log(Score())

  return (
      <ResponsiveContainer width="20%" height={250}>
        <RadialBarChart
          // data={Score}
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