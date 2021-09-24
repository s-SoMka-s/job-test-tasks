import './Input.scss'
import * as React from 'react'

export default function Input({ type: type, placeholder: placeholder }) {
    return (
        <input
            type={type}
            className="full-width error"
            placeholder={placeholder}
        ></input>
    )
}
