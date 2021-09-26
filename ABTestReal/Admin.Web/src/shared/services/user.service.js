import { BackendService } from './backend.service'

export class UserService {
    constructor() {
        this.backend = new BackendService()
    }

    get() {
        return this.backend.get('/api/users')
    }

    add(data) {
        return this.backend.add('/api/users', data)
    }

    delete(ids) {
        const params = ids.map((id) => `user_id=${id}`)

        return this.backend.delete(`/api/users/${params.join('&')}`)
    }

    getRollingRetention() {
        return this.client.get('/api/users/rolling_retention')
    }
}
