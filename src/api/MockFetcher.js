import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../_mocks_/mockData"
/**
* @class Create a data fetcher from mocking data and returns the data.
*/
export default class MockFetcher {
    /**
     * Get basic user data.
     * @async
     * @function getMainData
     * @param {string} element - ID of the user.
     * @returns {Promise<object>} Basic user informations.
     */
    async getMainData() {

        return USER_MAIN_DATA.find((element) => element.id === 12)
    }
    /**
     * Get user activity data.
     * @async
     * @function getActivityData
     * @param {string} element - ID of the user.
     * @returns {Promise<object>} List of informations about user profil.
     */
    async getActivityData() {

        return USER_ACTIVITY.find((element) => element.userId === 12)
    }
    /**
     * Get user sessions duration data.
     * @async
     * @function getAverageSessionData
     * @param {string} element - ID of the user.
     * @returns {Promise<object>} List of informations about user average sessions duration.
     */
    async getAverageSessionData() {

        return USER_AVERAGE_SESSIONS.find((element) => element.userId === 12)
    }
    /**
     * Get user performance data.
     * @async
     * @function getPerformanceData
     * @param {string} element - ID of the user.
     * @returns {Promise<object>} List of informations about user performances.
     */
    async getPerformanceData() {

        return USER_PERFORMANCE.find((element) => element.userId === 12)
    }
}



