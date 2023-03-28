import { useContext } from "react"
import { UserMainDataContext } from "../../context/UserMainData"
import AverageSessionChart from "../../components/Charts/AverageSessionChart"
import ActivityChart from "../../components/Charts/ActivityChart"
import PerformanceChart from "../../components/Charts/PerformanceChart"
import DailyScoreChart from "../../components/Charts/DailyScoreChart"
import Header from "../../components/Header"
import UserMacros from '../../components/UserMacros'
import '../Dashboard/Dashboard.scss'

function Dashboard() {

    const user = useContext(UserMainDataContext)
    console.log(user.performance)

    return (
        // <section>
        //     {user.profil && <Header data={user.profil.firstName} />}
        //     <div className="userInfos-wrapper">
        //         {user.macros && <UserMacros macros={user} />}
        //         <div className="chart-wrapper">
        //             {user.sessions && <ActivityChart sessions={user.sessions} />}
        //             <div className="chart-container">
        //                 {user.average && <AverageSessionChart averageSessions={user.average} />}
        //                 {user.performance && <PerformanceChart performance={user.performance} />}
        //                 {user.todayScore !== null && <DailyScoreChart score={user.todayScore} />}
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section>
            {user.profil && <Header className="welcomeMessage" data={user.profil.firstName} />}
            <div className="mainContent">
                {user.macros && <UserMacros className="macrosList--container" macros={user} />}
                <div className="charts--container">
                    {user.sessions && <ActivityChart className="activityChart" sessions={user.sessions} />}
                    <div className="charts--wrapper">
                        {user.average && <AverageSessionChart averageSessions={user.average} />}
                        {user.performance && <PerformanceChart performance={user.performance} />}
                        {user.todayScore !== null && <DailyScoreChart score={user.todayScore} />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard