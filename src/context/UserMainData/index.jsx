import { createContext, useState, useEffect } from "react"
import PropTypes from 'prop-types'

export const UserMainDataContext = createContext()
/**
 * Data adaptator and provider for recharts API component
 */
export const UserMainDataProvider = ({ children, dataSource }) => {
    const [userId, setUserId] = useState(null)
    const [profil, setProfil] = useState(null)
    const [todayScore, setTodayScore] = useState(null)
    const [macros, setMacros] = useState(null)
    const [sessions, setSessions] = useState(null)
    const [average, setAverage] = useState(null)
    const [performance, setPerformance] = useState(null)

    useEffect(() => {
        dataSource.getMainData()
            .then(user => setUserId(user.id))

        dataSource.getMainData()
            .then(user => setProfil(user.userInfos))

        dataSource.getMainData()
            .then(user => setTodayScore({ value: (user.todayScore * 100 | user.score * 100), fill: "#FF0000" }))

        dataSource.getMainData()
            .then(user => setMacros({
                "calories": user.keyData.calorieCount,
                "protein": user.keyData.proteinCount,
                "carbs": user.keyData.carbohydrateCount,
                "lipid": user.keyData.lipidCount
            }))

        dataSource.getActivityData()
            .then(user => setSessions(user.sessions.map((session, i) => ({
                "date": session.day,
                "day": i + 1,
                "bodyweight": session.kilogram,
                "calories": session.calories,
            }))))

        dataSource.getAverageSessionData()
            .then(user => setAverage(() => {
                const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
                return user.sessions.map((session) => ({
                    day: days[session.day - 1],
                    duration: session.sessionLength
                }))
            }))

        dataSource.getPerformanceData()
            .then(user => setPerformance(() => {
                const frenchTranslation = {
                    cardio: 'Cardio',
                    energy: 'Energie',
                    endurance: 'Endurance',
                    strength: 'Force',
                    speed: 'Vitesse',
                    intensity: 'Intensité',
                }
                return user.data.map((item) => ({
                    value: item.value,
                    kind: frenchTranslation[user.kind[item.kind]],
                }))
            })
            )

    }, [dataSource])

    return (
        <UserMainDataContext.Provider value={{ userId, profil, todayScore, macros, sessions, average, performance }}>
            {children}
        </UserMainDataContext.Provider>
    )
}

UserMainDataProvider.propTypes = {
    children: PropTypes.element.isRequired,
    dataSource: PropTypes.shape().isRequired
}