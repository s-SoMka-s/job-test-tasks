import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

export default function BasicDatePicker(props) {
    const [value, setValue] = React.useState(null)

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label={props.name}
                value={value}
                onChange={(newDate) => {
                    setValue(newDate)
                    console.log(newDate)
                    props.setDateCallback(newDate)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}
