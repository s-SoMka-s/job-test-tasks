import './App.scss'
import 'react-toastify/dist/ReactToastify.css'

import React, { useState, useEffect } from 'react'
import { BackendService } from './BackendService'
import Header from './components/Header/Header'
import IconButton from '@mui/material/IconButton'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify'
//
function App() {
    const backend = new BackendService()
    const [users, setUsers] = useState([])

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

    const newUserCallback = (newUserData) => {
        console.log(newUserData)

        if (newUserData.registration_date > newUserData.last_activity_date) {
            toast.error(
                'Last activity date cannot be earlier than the registration date!'
            )

            return
        }

        backend.addUser(newUserData).then((data) => {
            console.log(data)
            loadUsers()
        })
    }

    const deleteUser = (id) => {
        backend.deleteUsers([id]).then((data) => {
            console.log(data)
            loadUsers()
        })
    }

    const deleteAllUsers = (ids) => {
        console.log(ids)
        backend.deleteUsers(ids).then((data) => {
            console.log(data)
            loadUsers()
        })
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div className="app">
            <ToastContainer />
            <Header
                backendService={backend}
                users={users}
                deleteAllUsers={deleteAllUsers}
            ></Header>

            <div className="app__body">
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Date Regstration</td>
                            <td>Date Last Activity</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{fromTimestamp(user.registration_date)}</td>
                                <td>
                                    {fromTimestamp(user.last_activity_date)}
                                </td>
                                <td>
                                    <IconButton
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer newUserCallback={newUserCallback}></Footer>
        </div>
    )
}

export default App
