import './Header.scss'

import { React, useState } from 'react'
import Button from '@mui/material/Button'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Chart from 'react-google-charts'

export default function Header(props) {
    const [dialogOpened, setDialogOpened] = useState(false)
    const [rollingRetention, setRollingRetention] = useState(0)

    const handleClickOpen = () => {
        props.backendService.getRollingRetention().then((data) => {
            setRollingRetention(data.data)
            setDialogOpened(true)
        })
    }

    const handleClickClear = () => {
        let ids = props.users.map((user) => user.id)
        props.deleteAllUsers(ids)
    }

    const handleClose = () => {
        setDialogOpened(false)
    }

    const prepareHistData = () => {
        let data = [['User', 'Lifespan']]
        let getLifespan = (r, l) => {
            return (l - r) / (60 * 60 * 24)
        }
        props.users.map((user) =>
            data.push([
                `User id: ${user.id}`,
                getLifespan(user.registration_date, user.last_activity_date),
            ])
        )
        console.log(data)
        return data
    }

    return (
        <div className="header">
            <div className="header-wrapper">
                <h1>Users' activity observer</h1>
                <div className="header-buttons">
                    <Button
                        variant="outlined"
                        endIcon={
                            <CalculateOutlinedIcon></CalculateOutlinedIcon>
                        }
                        onClick={handleClickOpen}
                    >
                        Calculate
                    </Button>
                    <Button
                        variant="outlined"
                        endIcon={<ClearAllOutlinedIcon></ClearAllOutlinedIcon>}
                        color="warning"
                        onClick={handleClickClear}
                    >
                        Clear all data
                    </Button>
                </div>
            </div>
            <Dialog
                open={dialogOpened}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Rolling Retention 7 day: ${rollingRetention}`}
                </DialogTitle>
                <DialogContent>
                    <Chart
                        chartType="Histogram"
                        loader={<div>Loading Chart</div>}
                        data={prepareHistData()}
                        options={{
                            title: "Users' lifespan",
                            legend: { position: 'none' },
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
