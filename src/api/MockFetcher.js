import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../_mocks_/mockData"
/**
* Represent a data fetcher from mocking data.
* @class
* @classdesc This class represent a data fetcher from mocking data.
*/
export default class MockFetcher {
    /**
     * Create a new MockFetcher.
     * @param { number } userId - The user's id.
     */
    constructor(userId) {
        this._userId = userId
    }
    /**
     * Get basic user data.
     * @async
     * @method getMainData
     * @param { Array<object> } element - List of literal objects.
     * @param { number } element.id - ID to filter the data by user.
     * @returns { Promise<object> } List of information about user profil.
     */
    async getMainData() {

        return USER_MAIN_DATA.find((element) => element.id === this._userId)
    }
    /**
     * Get user activity data.
     * @async
     * @method getActivityData
     * @param { Array<object> } element - List of literal objects.
     * @param { number } element[].userId - ID to filter the data by user.
     * @returns { Promise<object> } List of informations about user metabolism.
     */
    async getActivityData() {

        return USER_ACTIVITY.find((element) => element.userId === this._userId)
    }
    /**
     * Get user sessions duration data.
     * @async
     * @method getAverageSessionData
     * @param { Array<object> } element - List of literal objects.
     * @param { number } element[].userId - ID to filter the data by user.
     * @returns { Promise<object> } List of informations about user sessions duration.
     */
    async getAverageSessionData() {

        return USER_AVERAGE_SESSIONS.find((element) => element.userId === this._userId)
    }
    /**
     * Get user performance data.
     * @async
     * @method getPerformanceData
     * @param { Array<object> } element - List of literal objects.
     * @param { number } element[].userId - ID to filter the data by user.
     * @returns { Promise<object> } List of informations about user performances.
     */
    async getPerformanceData() {

        return USER_PERFORMANCE.find((element) => element.userId === this._userId)
    }
}



