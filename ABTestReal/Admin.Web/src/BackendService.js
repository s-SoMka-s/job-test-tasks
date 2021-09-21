import axios from 'axios'

export class BackendService {
    constructor() {
        this.client = axios.create({
            baseURL: 'https://app20210922001154.azurewebsites.net/api',
            timeout: 10000,
        })
    }

    getUsers() {
        return this.client.get('/users')
    }

    addUser(data) {
        return this.client.post('/users', data)
    }

    getRollingRetention() {
        return this.client.get('/users/rolling_retention')
    }
}
