import { BackendService } from './backend.service'

export class UserService {
    constructor() {
        this.backend = new BackendService()
    }

    get() {
        return this.backend.get('/users')
    }

    add(data) {
        return this.backend.add('/users', data)
    }

    delete(ids) {
        const params = ids.map((id) => `user_ids=${id}`)

        return this.backend.delete(`/users?${params.join('&')}`)
    }

    getRollingRetention() {
        return this.backend.get('/users/rolling_retention')
    }
}
