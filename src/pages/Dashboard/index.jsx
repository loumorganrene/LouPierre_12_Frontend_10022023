import { useContext } from "react"
import { UserMainDataContext } from "../../context/UserMainData"
import AverageSessionChart from "../../components/Charts/AverageSessionChart"
import ActivityChart from "../../components/Charts/ActivityChart"
import PerformanceChart from "../../components/Charts/PerformanceChart"
import DailyScoreChart from "../../components/Charts/DailyScoreChart"
import Header from "../../components/Header"
import UserMacros from '../../components/UserMacros'
import '../Dashboard/Dashboard.scss'
import { UserActivityDataContext } from "../../context/UserActivityData"

function Dashboard() {

    const user = useContext(UserMainDataContext)
    const userActivity = useContext(UserActivityDataContext)

    return (
        <section>
            <Header data={user.profil.firstName} />
            <div className="chart-wrapper">
                <UserMacros data={user}/>
                    <ActivityChart data={userActivity} />
                <div className="chart-container">
                    <AverageSessionChart />
                    <PerformanceChart />
                    <DailyScoreChart data={user.todayScore} />
                </div>
            </div>
        </section>
    )
}

export default Dashboard