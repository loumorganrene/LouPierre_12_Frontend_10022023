const BASE_URL = `http://localhost:3001/user/12`

export default class ApiFetcher {

    async getMainData() {

        /**
         * TODO: 
         * 
         * 1. Mettre les proptypes
         * 2. Gérer les erreurs de l'API
         * 3. Dynamiser l'ID utilisateur via la route
         */
        return fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((r => r.data))
    }

    async getActivityData() {

        return fetch(`${BASE_URL}/activity`)
            .then((response) => response.json())
            .then((r => r.data))
    }

    async getAverageSessionData() {

        return fetch(`${BASE_URL}/average-sessions`)
            .then((response) => response.json())
            .then((r => r.data))
    }

    async getPerformanceData() {

        return fetch(`${BASE_URL}/performance`)
            .then((response) => response.json())
            .then((r => r.data))
    }

}


