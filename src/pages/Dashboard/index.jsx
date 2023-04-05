import { useContext } from "react"
import { UserMainDataContext } from "../../context/UserMainData"
import Nav from '../../components/Nav'
import Sidebar from '../../components/Sidebar'
import AverageSessionChart from "../../components/Charts/AverageSessionChart"
import ActivityChart from "../../components/Charts/ActivityChart"
import PerformanceChart from "../../components/Charts/PerformanceChart"
import DailyScoreChart from "../../components/Charts/DailyScoreChart"
import Header from "../../components/Header"
import UserMacros from '../../components/UserMacros'
import '../Dashboard/Dashboard.scss'

function Dashboard() {

    const user = useContext(UserMainDataContext)

    const url = window.location.href.split('/');
    url.pop();
    url.push(user.userId);
    window.history.replaceState(null, null, url.join('/'));

    if (!user) {
        return <h1>Utilisateur non trouvé</h1>
    }

    console.log(user)

    return (
        <div className="App">
            <Nav />
            <div className="main">
                <Sidebar />
                <section>
                    {user.profil && <Header className="welcomeMessage" username={user.profil.firstName} />}
                    <div className="mainContent">
                        {user.macros && <UserMacros className="macrosList--container" macros={user.macros} />}
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
            </div></div>
    )
}

export default Dashboard