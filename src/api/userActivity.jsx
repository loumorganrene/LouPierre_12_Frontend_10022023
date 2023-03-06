import * as FetchDatas from './FetchDatas'

export async function getUserActivity(setUserActivity) {
    return FetchDatas
        .fetchDatas("http://localhost:3001/user/12/activity")
        .then(setUserActivity)
}

