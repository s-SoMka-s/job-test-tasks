import axios from 'axios'

export class BackendService {
    constructor() {
        this.client = axios.create({
            baseURL: process.env.REACT_APP_BACKEND,
            timeout: 10000,
        })
    }

    get(url) {
        return this.client
            .get(url)
            .then((raw) => raw.data)
            .catch((err) => console.log(err))
    }

    add(url, data) {
        return this.client
            .post(url, data)
            .then((raw) => raw.data)
            .catch((err) => console.log(err))
    }

    delete(url) {
        return this.client
            .delete(url)
            .then((raw) => raw.data)
            .catch((err) => console.log(err))
    }
}
