import * as FetchDatas from './FetchDatas'

export async function getUserPerformance(setUserPerformance) {
    return FetchDatas
        .fetchDatas("http://localhost:3001/user/12/activity")
        .then(setUserPerformance)
}

