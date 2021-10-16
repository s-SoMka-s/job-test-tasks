import './Sidebar.scss'

import React from 'react'

import { Link } from 'react-router-dom'

import UserIcon from '../../assets/img/svg/UserIcon.svg'
import ObserverIcon from '../../assets/img/svg/ObserverIcon.svg'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <Link to="/pages/profile">
                    <img src={UserIcon} alt="user-icon"></img>
                </Link>
                <div className="sidebar-wrapper__delimeter"></div>
                <Link to="/pages/dashboard">
                    <img src={ObserverIcon} alt="observer-icon"></img>
                </Link>
                <div className="sidebar-wrapper__delimeter"></div>
            </div>
        </div>
    )
}
