import './Table.scss'

import React from 'react'
import DeleteIcon from '../../assets/img/svg/DeleteIcon.svg'

export default function Table({
    headers: headers,
    body: elements,
    onDelete: deleteRow,
}) {
    return (
        <table rules="none">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th>{header}</th>
                    ))}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {elements.map((fields) => (
                    <tr>
                        {fields.map((field) => (
                            <td>{field}</td>
                        ))}
                        <td>
                            <img
                                src={DeleteIcon}
                                onClick={() => deleteRow(fields[0])}
                            ></img>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
