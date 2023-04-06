/**
 * A class for fetching data from the API.
 * @class
 */
export default class ApiFetcher {
    /**
     * Create a new ApiFetcher.
     * @constructor
     * @param { number } userId - The user's id.
     */
    constructor(userId) {
        this._userId = userId
        this.BASE_URL = `http://localhost:3001/user/${userId}`
    }
    /**
     * Get user profil data.
     * @async
     * @method
     * @returns { Promise<object> } A Promise object that resolves to a list of informations about user profil.
     */
    async getMainData() {
        try {
            const response = await fetch(`${this.BASE_URL}`)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            return data.data
        } catch (error) {
            console.error(`Error fetching data: ${error}`)
            return null
        }
    }
    /**
     * Get user activity data.
     * @async
     * @method
     * @returns { Promise<object> } A Promise object that resolves to a list of informations about user metabolism.
     */
    async getActivityData() {
        try {
            const response = await fetch(`${this.BASE_URL}/activity`)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            return data.data
        } catch (error) {
            console.error(`Error fetching data: ${error}`)
            return null
        }
    }
    /**
     * Get user sessions duration data.
     * @async
     * @method
     * @returns { Promise<object> } A Promise object that resolves to a list of informations about user sessions duration.
     */
    async getAverageSessionData() {
        try {
            const response = await fetch(`${this.BASE_URL}/average-sessions`)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            return data.data
        } catch (error) {
            console.error(`Error fetching data: ${error}`)
            return null
        }
    }
    /**
     * Get user performance data.
     * @async
     * @method
     * @returns { Promise<object> } A Promise object that resolves to a list of informations about user performances.
     */
    async getPerformanceData() {
        try {
            const response = await fetch(`${this.BASE_URL}/performance`)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            return data.data
        } catch (error) {
            console.error(`Error fetching data: ${error}`)
            return null
        }
    }
}