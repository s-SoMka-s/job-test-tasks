import './Header.scss'

import React from 'react'

import UserIcon from '../../assets/img/svg/UserIcon.svg'
import ExitIcon from '../../assets/img/svg/ExitIcon.svg'

export default function Header() {
    return (
        <div className="header">
            <div className="header-wrapper">
                <h1 className="header-wrapper__logo">AB TEST REAL</h1>
                <div className="header-wrapper__icons">
                    <img src={UserIcon} alt="user-icon"></img>
                    <img src={ExitIcon} alt="exit-icon"></img>
                </div>
            </div>
        </div>
    )
}
