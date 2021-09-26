import './NewRow.scss'

import React from 'react'

import Input from '../../components/Input/Input'

import { toTimestamp } from '../../services/date.service'

import DeleteIcon from '../../../shared/assets/img/svg/DeleteIcon.svg'
import AddIcon from '../../../shared/assets/img/svg/AddIcon.svg'

export default function NewRow({ onClose, onCreate }) {
    const [registrationDate, setRegistrationDate] = React.useState('')
    const [lastActivityDate, setLastActivityDate] = React.useState('')

    return (
        <div className="new-row">
            <img src={DeleteIcon} alt="delete-icon" onClick={onClose}></img>
            <Input
                type="text"
                value={registrationDate}
                onChange={(event) => setRegistrationDate(event.target.value)}
                hasErrors={false}
                placeholder="dd.mm.yyyy"
                mask="99.99.9999"
            ></Input>
            <Input
                type="text"
                value={lastActivityDate}
                onChange={(event) => setLastActivityDate(event.target.value)}
                hasErrors={false}
                placeholder="dd.mm.yyyy"
                mask="99.99.9999"
            ></Input>
            <img
                src={AddIcon}
                alt="add-icon"
                onClick={() =>
                    onCreate({
                        registration_date: toTimestamp(registrationDate),
                        last_activity_date: toTimestamp(lastActivityDate),
                    })
                }
            ></img>
        </div>
    )
}
