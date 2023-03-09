import { createContext, useState, useEffect } from "react"

export const UserMainDataContext = createContext()

const userId = 12 || 18
export const BASE_URL = `http://localhost:3001/user/${userId}`


export const UserMainDataProvider = ({ children }) => {
    const [profil, setProfil] = useState({})
    const [todayScore, setTodayScore] = useState({})
    const [macros, setMacros] = useState({})
    
    useEffect(() => {
        fetch(`${BASE_URL}`)
            .then(res => res.json())
            .then(data => setProfil(data.data.userInfos))
    }, [])

        useEffect(() => {
        fetch(`${BASE_URL}`)
            .then(res => res.json())
            .then(data => setTodayScore(data.data.todayScore))
    }, [])

        useEffect(() => {
        fetch(`${BASE_URL}`)
            .then(res => res.json())
            .then(data => setMacros(data.data.keyData))
    }, [])

    return (
        <UserMainDataContext.Provider value={{ profil, todayScore, macros }}>
            {children}
        </UserMainDataContext.Provider>
    )

}