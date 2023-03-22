import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../_mocks_/mockData"

export default class MockFetcher {

    async getMainData() {

        return USER_MAIN_DATA.find((element) => element.id === 12)
    }

    async getActivityData() {

        return USER_ACTIVITY.find((element) => element.userId === 12)
    }

    async getAverageSessionData() {

        return USER_AVERAGE_SESSIONS.find((element) => element.userId === 12)
    }

    async getPerformanceData() {

        return USER_PERFORMANCE.find((element) => element.userId === 12)
    }

}



