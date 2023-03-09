import { createContext, useState, useEffect } from "react"
import { BASE_URL } from "../UserMainData"

export const UserActivityDataContext = createContext()


export const UserActivityDataProvider = ({ children }) => {
    const [sessionData, setSessionData] = useState([])
    
    useEffect(() => {
            fetch(`${BASE_URL}/activity`)
            .then(res => res.json())
            .then(data => setSessionData(data.data.sessions))
    }, [])

    //     const userActivity = sessionData.map((session, i) => ({
	// 		date: session.day,
	// 		day: i + 1,
	// 		bodyweight: session.kilogram,
	// 		calories: session.calories,
	// 	}))

    // console.log(userActivity)
    console.log("///// UserActivityDataProvider")
    console.log(sessionData)

    return (
        <UserActivityDataContext.Provider value={{ sessionData }}>
            {children}
        </UserActivityDataContext.Provider>
    )

}