/**
 * Create a new data fetcher from an API.
 * @class
 */
export default class ApiFetcher {
    /**
     * @param {number} userId 
     */
    constructor(userId) {
        this._userId = userId
        this.BASE_URL = `http://localhost:3001/user/${userId}`
    }
    /**
     * Get user profil data.
     * @async
     * @method getMainData
     * @param { string } url - URL of the API.
     * @returns { Promise<object> } Promise object as a list of informations about user profil.
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
     * @method getActivityData
     * @param { string } url - URL of the API.
     * @returns { Promise<object> } Promise object as a list of informations about user metabolism.
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
     * @method getAverageSessionData
     * @param { string } url - URL of the API.
     * @returns { Promise<object> } Promise object as a list of informations about user sessions duration.
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
     * @method getPerformanceData
     * @param { string } url - URL of the API.
     * @returns { Promise<object> } Promise object as a list of informations about user performances.
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


