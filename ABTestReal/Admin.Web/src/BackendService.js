import axios from 'axios'

export class BackendService {
    constructor() {
        this.client = axios.create({
            baseURL: 'https://app20210922001154.azurewebsites.net',
            timeout: 10000,
        })
    }

    getUsers() {
        return this.client.get('/api/users')
    }

    addUser(data) {
        return this.client.post('/api/users', data)
    }

    getRollingRetention() {
        return this.client.get('/api/users/rolling_retention')
    }

    deleteUsers(userIds) {
        return this.client.post(`/delete`, { user_ids: userIds })
    }
}
