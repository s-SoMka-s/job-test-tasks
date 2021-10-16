import './Button.scss'

import * as React from 'react'

export default function Button({
    isTextType = false,
    hasIcon = false,
    icon,
    onClick,
    children,
    ...rest
}) {
    const classStr = []

    if (isTextType) {
        classStr.push('text-type')
    }
    if (hasIcon) {
        classStr.push('icon-type')
    }

    return (
        <button className={classStr.join(' ')} onClick={onClick}>
            <img src={icon} alt="custom-icon"></img>
            {children}
        </button>
    )
}
