import './App.css';

import React, { useState, useEffect } from 'react'
import { BackendService } from './BackendService';

function App() {
  const backend = new BackendService()
  const [users, setUsers] = useState([])

  const loadUsers = () => {
    backend.getUsers().then((data) => {console.log(data); setUsers(data.data)})
  }

  const fromTimestamp = (raw) => {
    return new Date(raw * 1000).toLocaleString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' })
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>UserId</td>
            <td>Date Regstration</td>
            <td>Date Last Activity</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{fromTimestamp(user.registration_date)}</td>
                <td>{fromTimestamp(user.last_activity_date)}</td>
              </tr>))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
