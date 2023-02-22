import AverageSessionChart from "../../components/Charts/AverageSessionChart"
import ActivityChart from "../../components/Charts/ActivityChart"
import PerformanceChart from "../../components/Charts/PerformanceChart"
import DailyScoreChart from "../../components/Charts/DailyScoreChart"
import '../Dashboard/Dashboard.scss'

function Dashboard() {
    return (
        <section>
            <ActivityChart />
            <div className="line">
                <AverageSessionChart />
                <PerformanceChart />
                <DailyScoreChart />
            </div>
        </section>
    )
}

export default Dashboard