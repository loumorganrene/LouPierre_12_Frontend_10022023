export default class FetchData {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get(property) {
        return fetch(this._url)
            .then(res => res.json())
            .then(data => data.data)
    }
}

// const userId = 12 || 18
// export const BASE_URL = `http://localhost:3001/user/${userId}`


