import './Sidebar.scss'

import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from 'react-router-dom'

import UserIcon from '../../assets/img/svg/UserIcon.svg'
import ObserverIcon from '../../assets/img/svg/ObserverIcon.svg'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
            <Link to="/pages/profile"><img src={UserIcon}></img></Link>
            <Link to="/pages/dashboard"><img src={ObserverIcon}></img></Link>
        </div>
        </div>
    )
}
