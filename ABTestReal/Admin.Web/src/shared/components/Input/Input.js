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
    fullWidth,
}) {
    let className = []

    if (hasErrors) {
        className.push('error')
    }
    if (fullWidth) {
        className.push('full-width')
    }

    return (
        <InputMask
            mask={mask}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={className.join(' ')}
        ></InputMask>
    )
}
