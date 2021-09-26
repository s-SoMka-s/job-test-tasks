import './Table.scss'

import React from 'react'
import DeleteIcon from '../../assets/img/svg/DeleteIcon.svg'
import { fromTimestamp } from '../../services/date.service'
import { generateData } from './DataMocks'

export default function Table({ elements, onDelete: deleteRow }) {
    if (!elements) {
        elements = generateData()
    }

    return (
        <table rules="none">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Registration date</th>
                    <th>Last activity date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {elements.map((element) => (
                    <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{fromTimestamp(element.registration_date)}</td>
                        <td>{fromTimestamp(element.last_activity_date)}</td>
                        <td>
                            <img
                                alt="delete-icon"
                                src={DeleteIcon}
                                onClick={() => deleteRow(element.id)}
                            ></img>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
