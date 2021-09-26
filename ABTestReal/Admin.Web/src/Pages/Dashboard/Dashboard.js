import './Dashboard.scss'

import React from 'react'
import { Bar } from 'react-chartjs-2'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import Button from '../../shared/components/Button/Button'
import Input from '../../shared/components/Input/Input'
import Table from '../../shared/components/Table/Table'

import AddIcon from '../../shared/assets/img/svg/AddIcon.svg'
import DeleteIcon from '../../shared/assets/img/svg/DeleteIcon.svg'

import { BarChartService } from '../../shared/services/barChart.service'
import { UserService } from '../../shared/services/user.service'

export default function Dashboard() {
    const [users, setUsers] = React.useState([])
    const [dialogOpened, setDialogOpened] = React.useState(false)
    const [onNewRowClicked, setOnNewRowClicked] = React.useState(false)

    const barCharService = new BarChartService([])
    const userService = new UserService()

    const headers = ['ID', 'Registration date', 'Last Activity date']
    const body = [
        [1, '12.12.1212', '12.12.1212'],
        [1, '12.12.1212', '12.12.1212'],
        [1, '12.12.1212', '12.12.1212'],
        [1, '12.12.1212', '12.12.1212'],
        [1, '12.12.1212', '12.12.1212'],
        [1, '12.12.1212', '12.12.1212'],
    ]

    const data = barCharService.prepareData()

    const options = barCharService.options

    const toggleDialogWindow = () => setDialogOpened(!dialogOpened)

    const onNewRowToggle = () => setOnNewRowClicked(!onNewRowClicked)

    const addNewUser = (data) => {
        userService.add(data).then((user) => {
            setUsers(users.push(user))
            setOnNewRowClicked(!onNewRowClicked)
        })
    }

    return (
        <div className="dashboard-page">
            <div className="dashboard-page-wrapper">
                <div className="dashboard-page-wrapper__header">
                    <h1>Users' activity</h1>
                    <Button onClick={toggleDialogWindow}>Calculate</Button>
                </div>
                <Table
                    headers={headers}
                    body={body}
                    onDelete={(val) => console.log('Delete row with id: ', val)}
                ></Table>
                {(onNewRowClicked && (
                    <Button
                        hasIcon={true}
                        isTextType={true}
                        icon={AddIcon}
                        onClick={onNewRowToggle}
                    >
                        Add Row
                    </Button>
                )) || (
                    <div className="dashboard-page-wrapper__new-row">
                        <img src={DeleteIcon} onClick={onNewRowToggle}></img>
                        <Input></Input>
                        <Input></Input>
                        <img src={AddIcon} onClick={onNewRowToggle}></img>
                    </div>
                )}
            </div>

            <Dialog
                open={dialogOpened}
                onClose={toggleDialogWindow}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Rolling Retention 7 day: 12%`}
                </DialogTitle>
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
