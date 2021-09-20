import axios from 'axios';

export class BackendService {
    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:5000/api',
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
        return this.client.get('/rolling_retention')
    }
}