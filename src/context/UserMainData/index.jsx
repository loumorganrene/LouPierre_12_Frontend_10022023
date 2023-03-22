import { createContext, useState, useEffect } from "react"

export const UserMainDataContext = createContext()

export const UserMainDataProvider = ({ children, dataSource }) => {
    const [profil, setProfil] = useState(null)
    const [todayScore, setTodayScore] = useState(null)
    const [macros, setMacros] = useState(null)
    const [sessions, setSessions] = useState(null)
    const [average, setAverage] = useState(null)
    const [performance, setPerformance] = useState(null)
    
    useEffect(() => {
        dataSource.getMainData()
        .then(user => setProfil(user.userInfos))

        dataSource.getMainData()
        .then(user => setTodayScore({ value: (user.todayScore*100), fill: "#FF0000" }))

        dataSource.getMainData()
        .then(user => setMacros(user.keyData))

        dataSource.getActivityData()
        .then(user => setSessions(user.sessions))

        dataSource.getAverageSessionData()
        .then(user => setAverage(user.sessions))

        dataSource.getPerformanceData()
        .then(user => {
            console.log({performance: user});
            setPerformance(user)
        })

    }, [dataSource])

    return (
        <UserMainDataContext.Provider value={{ profil, todayScore, macros, sessions, average, performance }}>
            {children}
        </UserMainDataContext.Provider>
    )

}