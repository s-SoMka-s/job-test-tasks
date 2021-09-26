import './Button.scss'

import * as React from 'react'

export default function Button({
    isTextType: isTextType = false,
    hasIcon: hasIcon = false,
    icon: icon,
    onClick: onClick,
    children: children,
    ...rest
}) {
    const classStr = []

    console.log(rest)

    if (isTextType) {
        classStr.push('text-type')
    }
    if (hasIcon) {
        classStr.push('icon-type')
    }

    return (
        <button className={classStr.join(' ')} onClick={onClick}>
            <img src={icon}></img>
            {children}
        </button>
    )
}
