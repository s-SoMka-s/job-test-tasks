import './Dashboard.scss'

import React from 'react'
import { Bar } from 'react-chartjs-2'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import Button from '../../shared/components/Button/Button'
import NewRow from '../../shared/components/NewRow/NewRow'
import Table from '../../shared/components/Table/Table'

import AddIcon from '../../shared/assets/img/svg/AddIcon.svg'

import { BarChartService } from '../../shared/services/barChart.service'
import { UserService } from '../../shared/services/user.service'

export default function Dashboard() {
    const [users, setUsers] = React.useState(null)
    const [rollingRetention, setRollingRetention] = React.useState(0)

    const [dialogOpened, setDialogOpened] = React.useState(false)
    const [onNewRowClicked, setOnNewRowClicked] = React.useState(false)

    const barCharService = new BarChartService([])
    const userService = new UserService()

    React.useEffect(() => {
        userService.get().then((data) => setUsers(data))
    }, [])

    const data = barCharService.prepareData(users)
    const options = barCharService.options

    const toggleDialogWindow = () => setDialogOpened(!dialogOpened)

    const getRollingRetention = () => {
        userService
            .getRollingRetention()
            .then((data) => setRollingRetention(data))
    }

    const addNewUser = (data) => {
        userService.add(data).then((users) => {
            setUsers(users)
            setOnNewRowClicked(false)
        })
    }

    const deleteUsers = (ids) => {
        userService.delete(ids).then((users) => {
            setUsers(users)
        })
    }

    return (
        <div className="dashboard-page">
            <div className="dashboard-page-wrapper">
                <div className="dashboard-page-wrapper__header">
                    <h1>Users' activity</h1>
                    <Button
                        onClick={() => {
                            toggleDialogWindow()
                            getRollingRetention()
                        }}
                    >
                        Calculate
                    </Button>
                </div>
                <Table
                    elements={users}
                    onDelete={(id) => deleteUsers([id])}
                ></Table>
                {!onNewRowClicked && (
                    <Button
                        hasIcon={true}
                        isTextType={true}
                        icon={AddIcon}
                        onClick={() => setOnNewRowClicked(true)}
                    >
                        Add Row
                    </Button>
                )}
                {onNewRowClicked && (
                    <NewRow
                        onClose={() => setOnNewRowClicked(false)}
                        onCreate={addNewUser}
                    ></NewRow>
                )}
            </div>

            <Dialog
                open={dialogOpened}
                onClose={toggleDialogWindow}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Rolling Retention 7 day: ${
                    rollingRetention / 100
                }%`}</DialogTitle>
                <DialogContent>
                    <Bar data={data} options={options} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleDialogWindow}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
