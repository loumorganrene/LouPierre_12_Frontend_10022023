const BASE_URL = `http://localhost:3001/user/12`
// TODO:
//  2. Gérer les erreurs de l'API
//  3. Dynamiser l'ID utilisateur via la route

/**
* @class Create a data fetcher from an API and returns the data.
*/
export default class ApiFetcher {
    /**
     * Get basic user data.
     * @async
     * @function getMainData
     * @param {string} url - URL of the API.
     * @returns {Promise<object>} Basic user informations.
     */
    async getMainData() {

        return fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((r => r.data))
    }
    /**
     * Get user activity data.
     * @async
     * @function getActivityData
     * @param {string} url - URL of the API.
     * @returns {Promise<object>} List of informations about user profil.
     */
    async getActivityData() {

        return fetch(`${BASE_URL}/activity`)
            .then((response) => response.json())
            .then((r => r.data))
    }
    /**
     * Get user sessions duration data.
     * @async
     * @function getAverageSessionData
     * @param {string} url - URL of the API.
     * @returns {Promise<object>} List of informations about user average sessions duration.
     */
    async getAverageSessionData() {

        return fetch(`${BASE_URL}/average-sessions`)
            .then((response) => response.json())
            .then((r => r.data))
    }
    /**
     * Get user performance data.
     * @async
     * @function getPerformanceData
     * @param {string} url - URL of the API.
     * @returns {Promise<object>} List of informations about user performances.
     */
    async getPerformanceData() {

        return fetch(`${BASE_URL}/performance`)
            .then((response) => response.json())
            .then((r => r.data))
    }
}


