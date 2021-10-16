export class BarChartService {
    constructor(users) {
        this.users = users

        this.options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        }
    }

    prepareData(users) {
        if (!users) {
            return
        }

        const res = {}
        users.map((user) => {
            let diff = user.last_activity_date - user.registration_date
            let diffDays = diff / (60 * 60 * 24)

            if (res[diffDays]) {
                res[diffDays] += 1
            } else {
                res[diffDays] = 1
            }
        })
        const data = {
            labels: Object.keys(res),
            datasets: [
                {
                    label: 'users count',
                    data: Object.values(res),
                    backgroundColor: ['#5D6D97'],
                },
            ],
        }

        return data
    }
}
