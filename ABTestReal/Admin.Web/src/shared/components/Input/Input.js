import './Input.scss'
import * as React from 'react'

import InputMask from 'react-input-mask'

export default function Input({
    type,
    value,
    placeholder,
    mask,
    onChange,
    hasErrors,
}) {
    let className = ''

    if (hasErrors) {
        className = 'error'
    }

    return (
        <InputMask
            mask={mask}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={className}
        ></InputMask>
    )
}
