import './App.css'

import React, { useState, useEffect } from 'react'
import { BackendService } from './BackendService'
import Chart from 'react-google-charts'
//
function App() {
    const backend = new BackendService()
    const [users, setUsers] = useState([])
    const [registrationDate, setRegistrationDate] = useState(null)
    const [lastActivityDate, setLastActivityDate] = useState(null)

    const loadUsers = () => {
        backend.getUsers().then((data) => {
            setUsers(data.data)
        })
    }

    const fromTimestamp = (raw) => {
        return new Date(raw * 1000).toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        })
    }

    const prepareHistData = () => {
        let data = [['User', 'Lifespan']]
        let getLifespan = (r, l) => {
            return (l - r) / (60 * 60 * 24)
        }
        users.map((user) =>
            data.push([
                `User id: ${user.id}`,
                getLifespan(user.registration_date, user.last_activity_date),
            ])
        )
        console.log(data)
        return data
    }

    const sendData = () => {
        let data = {
            registration_date: new Date(registrationDate).getTime() / 1000,
            last_activity_date: new Date(lastActivityDate).getTime() / 1000,
        }
        backend.addUser(data).then(() => loadUsers())
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div className="App">
            <div className="app-header">
                <div>
                    <input
                        type="date"
                        onChange={(event) =>
                            setRegistrationDate(event.target.value)
                        }
                    />
                    <input
                        type="date"
                        onChange={(event) =>
                            setLastActivityDate(event.target.value)
                        }
                    />
                    <button onClick={() => sendData()}>Save</button>
                    <button onClick={() => prepareHistData()}>Calculate</button>
                </div>
            </div>
            <div className="app-body">
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="Histogram"
                    loader={<div>Loading Chart</div>}
                    data={prepareHistData()}
                    options={{
                        title: "Users' lifespan distribution",
                        legend: { position: 'none' },
                    }}
                />

                <table>
                    <thead>
                        <tr>
                            <td>UserID</td>
                            <td>Date Regstration</td>
                            <td>Date Last Activity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{fromTimestamp(user.registration_date)}</td>
                                <td>
                                    {fromTimestamp(user.last_activity_date)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App
