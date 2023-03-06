import { createContext, useEffect, useState } from 'react'
// import * as FetchDatas from './api/FetchDatas'
import { getUserInfos } from './api/userInfos'
import { getUserActivity } from './api/userActivity'
import { getUserSessionAverage } from './api/userSessionAverage'
import { getUserPerformance } from './api/userPerformance'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [userInfos, setUserInfos] = useState(null)
    const [userActivity, setUserActivity] = useState(null)
    const [userSessionAverage, setUserSessionAverage] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);

    useEffect(() => {
        // async function getUserInfos() {
        //     return FetchDatas
        //         .fetchDatas("http://localhost:3001/user/12")
        //         .then(setUserInfos)
        // }

        // async function getUserActivity() {
        //     return FetchDatas
        //         .fetchDatas("http://localhost:3001/user/12/activity")
        //         .then(setUserActivity)
        // }

        // async function getUserAverageSession() {
        //     return FetchDatas
        //         .fetchDatas("http://localhost:3001/user/12/average-sessions")
        //         .then(setUserAverageSession)
        // }

        // async function getUserPerformance() {
        //     return FetchDatas
        //         .fetchDatas("http://localhost:3001/user/12/performance")
        //         .then(setUserPerformance)
        // }

        getUserInfos(setUserInfos)
        getUserActivity(setUserActivity)
        getUserSessionAverage(setUserSessionAverage)
        getUserPerformance(setUserPerformance)
    }, [])

    return (
        <AppContext.Provider value={{ userInfos, userActivity, userSessionAverage, userPerformance }}>
            {children}
        </AppContext.Provider>
    )
}


