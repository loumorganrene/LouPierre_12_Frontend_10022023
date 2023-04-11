import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../_mocks_/mockData"

/**
 * A class for fetching data from the mock file.
 * @class
 */
export default class MockFetcher {
    /**
     * Create a new MockFetcher.
     * @constructor
     * @param { string } userId - The user's id.
     */
    constructor(userId) {
        this._userId = userId
    }
    /**
     * Get basic user data.
     * @async
     * @method 
     * @returns { Promise<object> } A Promise object that resolves to a list of information about user profil.
     */
    async getMainData() {

        return USER_MAIN_DATA.find((element) => element.id.toString() === this._userId)
  
    }
    /**
     * Get user activity data.
     * @async
     * @method 
     * @returns { Promise<object> } A Promise object that resolves to a list of informations about user metabolism.
     */
    async getActivityData() {

        return USER_ACTIVITY.find((element) => element.userId.toString() === this._userId)
    }
    /**
     * Get user sessions duration data.
     * @async
     * @method 
     * @returns { Promise<object> } A Promise object that resolves to a list of informations about user sessions duration.
     */
    async getAverageSessionData() {

        return USER_AVERAGE_SESSIONS.find((element) => element.userId.toString() === this._userId)
    }
    /**
     * Get user performance data.
     * @async
     * @method 
     * @returns { Promise<object> } A Promise object that resolves to a list of informations about user performances.
     */
    async getPerformanceData() {

        return USER_PERFORMANCE.find((element) => element.userId.toString() === this._userId)
    }
}



