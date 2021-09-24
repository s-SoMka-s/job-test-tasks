import './Dashboard.scss'

import React from 'react'

import Button from '../../shared/components/Button/Button'
import Table from '../../shared/components/Table/Table'

export default function Dashboard() {
    const headers = ['ID', 'Registration date', 'Last Activity date']
    const body = [
        [1, '12.12.1212', '12.12.1212'],
        [1, '12.12.1212', '12.12.1212'],
        [1, '12.12.1212', '12.12.1212'],
        [1, '12.12.1212', '12.12.1212'],
        [1, '12.12.1212', '12.12.1212'],
        [1, '12.12.1212', '12.12.1212'],
    ]

    return (
        <div className="dashboard-page">
            <div className="dashboard-page-wrapper">
                <div className="dashboard-page-wrapper__header">
                    <h1>Users' activity</h1>
                    <Button text="Calculate"></Button>
                </div>
                <Table
                    headers={headers}
                    body={body}
                    onDelete={(val) => console.log('Delete row with id: ', val)}
                ></Table>
            </div>
        </div>
    )
}
