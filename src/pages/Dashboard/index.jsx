import AverageSessionChart from "../../components/Charts/AverageSessionChart"
import ActivityChart from "../../components/Charts/ActivityChart"
import PerformanceChart from "../../components/Charts/PerformanceChart"
import DailyScoreChart from "../../components/Charts/DailyScoreChart"
import WelcomeMessage from "../../components/WelcomeMessage"
import UserMacros from '../../components/UserMacros'
import '../Dashboard/Dashboard.scss'

function Dashboard() {

    return (
        <section>
            <WelcomeMessage />
            <div className="chart-wrapper">
                <UserMacros />
                <ActivityChart />
                <div className="chart-container">
                    <AverageSessionChart />
                    <PerformanceChart />
                    <DailyScoreChart />
                </div>

            </div>

        </section>
    )
}

export default Dashboard