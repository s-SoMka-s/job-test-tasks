import './Header.scss'

import React from 'react'

import ExitIcon from '../../assets/img/svg/ExitIcon.svg'
import UserIcon from '../../assets/img/svg/UserIcon.svg'

export default function Header() {
    return (
        <div className="header">
            <div className="header-wrapper">
                <h1 className="header-wrapper__logo">AB TEST REAL</h1>
                <div className="header-wrapper__icons">
                    <img src={ExitIcon}></img>
                    <img src={UserIcon}></img>
                </div>
            </div>
        </div>
    )
}
