import * as FetchDatas from './FetchDatas'

export async function getUserSessionAverage(setUserSessionAverage) {
    return FetchDatas
        .fetchDatas("http://localhost:3001/user/12/average-sessions")
        .then(setUserSessionAverage)
}