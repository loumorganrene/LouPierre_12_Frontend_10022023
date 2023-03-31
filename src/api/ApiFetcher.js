const BASE_URL = `http://localhost:3001/user/12`
// TODO:
//  2. Gérer les erreurs de l'API
//  3. Dynamiser l'ID utilisateur via la route

/**
 * Create a new data fetcher from an API.
 * @class
 */
export default class ApiFetcher {

    /**
     * Get user profil data.
     * @async
     * @method getMainData
     * @param { string } url - URL of the API.
     * @returns { Promise<object> } Promise object as a list of informations about user profil.
     */
    async getMainData() {

        return fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((r => r.data))
    }
    /**
     * Get user activity data.
     * @async
     * @method getActivityData
     * @param { string } url - URL of the API.
     * @returns { Promise<object> } Promise object as a list of informations about user metabolism.
     */
    async getActivityData() {

        return fetch(`${BASE_URL}/activity`)
            .then((response) => response.json())
            .then((r => r.data))
    }
    /**
     * Get user sessions duration data.
     * @async
     * @method getAverageSessionData
     * @param { string } url - URL of the API.
     * @returns { Promise<object> } Promise object as a list of informations about user sessions duration.
     */
    async getAverageSessionData() {

        return fetch(`${BASE_URL}/average-sessions`)
            .then((response) => response.json())
            .then((r => r.data))
    }
    /**
     * Get user performance data.
     * @async
     * @method getPerformanceData
     * @param { string } url - URL of the API.
     * @returns { Promise<object> } Promise object as a list of informations about user performances.
     */
    async getPerformanceData() {

        return fetch(`${BASE_URL}/performance`)
            .then((response) => response.json())
            .then((r => r.data))
    }
}


