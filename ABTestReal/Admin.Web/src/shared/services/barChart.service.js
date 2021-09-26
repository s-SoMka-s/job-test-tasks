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

    prepareData() {
        const data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: '# user`s lifespan',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: ['#5D6D97'],
                },
            ],
        }

        return data
    }
}
