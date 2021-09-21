import './App.scss'

import React, { useState, useEffect } from 'react'
import { BackendService } from './BackendService'
import Chart from 'react-google-charts'
import Dialog from 'react-dialog'
//
function App() {
    const backend = new BackendService()
    const [users, setUsers] = useState([])
    const [registrationDate, setRegistrationDate] = useState(null)
    const [lastActivityDate, setLastActivityDate] = useState(null)
    const [show, setShow] = useState(false)
    const [rr, setRR] = useState(0)

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
        <div className="app">
            <div className="app__header">
                <div className="app__header-wrapper">
                    <h1>Users' activity observer</h1>
                    <div className="app__header-input-wrapper">
                        <div>
                            <input
                                type="date"
                                id="regDateInput"
                                onChange={(event) =>
                                    setRegistrationDate(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <input
                                type="date"
                                id="lastActDateInput"
                                onChange={(event) =>
                                    setLastActivityDate(event.target.value)
                                }
                            />
                        </div>
                        <button onClick={() => sendData()}>Save</button>
                    </div>
                    <button
                        onClick={() =>
                            backend.getRollingRetention().then((data) => {
                                console.log(data.data)
                                setRR(data.data)
                                setShow(true)
                            })
                        }
                    >
                        Calculate
                    </button>
                </div>
            </div>
            <div className="app__body">
                <div className="app__body-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Date Regstration</td>
                                <td>Date Last Activity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>
                                        {fromTimestamp(user.registration_date)}
                                    </td>
                                    <td>
                                        {fromTimestamp(user.last_activity_date)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Chart
                        width={'800px'}
                        height={'400px'}
                        chartType="Histogram"
                        loader={<div>Loading Chart</div>}
                        data={prepareHistData()}
                        options={{
                            title: "Users' lifespan",
                            legend: { position: 'none' },
                        }}
                    />
                </div>
                {show && <h1>Rolling Retention 7 day: {rr}</h1>}
            </div>
        </div>
    )
}

export default App
