import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../_mocks_/mockData"

export default class MockFetcher {

    async getMainData() {

        return USER_MAIN_DATA
    }

    async getActivityData() {

        return USER_ACTIVITY
    }

    async getAverageSessionData() {

        return USER_AVERAGE_SESSIONS
    }

    async getPerformanceData() {

        return USER_PERFORMANCE
    }

}



