import './Footer.scss'

import React from 'react'
import BasicDatePicker from '../BasicDatePicker'
import { Button } from '@mui/material'

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

export default function Footer(props) {
    const [user, setUser] = React.useState({
        registration_date: null,
        last_activity_date: null,
    })

    const addNewUser = () => {
        let data = {
            registration_date:
                new Date(user.registration_date).getTime() / 1000,
            last_activity_date:
                new Date(user.last_activity_date).getTime() / 1000,
        }
        props.newUserCallback(data)
    }

    const setRegistrationDate = (newDate) => {
        console.log('Set registration date: ' + newDate)
        let newUser = { ...user, registration_date: newDate }
        setUser(newUser)
    }

    const setLastActivityDate = (newDate) => {
        console.log('Set last activity date:' + newDate)
        let newUser = { ...user, last_activity_date: newDate }
        setUser(newUser)
    }

    return (
        <div className="footer">
            <div className="footer-wrapper">
                <BasicDatePicker
                    setDateCallback={setRegistrationDate}
                    name="Registration date"
                ></BasicDatePicker>
                <BasicDatePicker
                    setDateCallback={setLastActivityDate}
                    name="Last activity date"
                ></BasicDatePicker>
                <Button
                    size="large"
                    variant="outlined"
                    endIcon={<AddBoxOutlinedIcon></AddBoxOutlinedIcon>}
                    onClick={addNewUser}
                >
                    Add user
                </Button>
            </div>
        </div>
    )
}
