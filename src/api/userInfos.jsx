import * as FetchDatas from './FetchDatas'

export async function getUserInfos(setUserInfos) {
    return FetchDatas
        .fetchDatas("http://localhost:3001/user/12")
        .then(setUserInfos)
}

